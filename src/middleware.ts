import { NextResponse, NextRequest, NextFetchEvent } from 'next/server';

import { fetchDatafileFromCDN } from './utils/fetch-optimizely-datafile';
import { updateEdgeConfig } from './utils/update-edge-config';
import { getDatafileFromEdge } from './utils/get-datafile-at-edge'
import { initializeOptimizely } from './utils/inititialize-optimizely'
 
export const config = { matcher: '/' };

const COOKIE_NAME = 'optimizely_visitor_id'
 
export async function middleware(req: NextRequest, res: NextResponse) {
  
  // Fetch user Id from the cookie if available so a returning user from same browser session always sees the same variation.
  
  const userId = req.cookies.get(COOKIE_NAME)?.value || crypto.randomUUID()
  
  const checkAndFetchForDatafile = async () => {
    const timeStamp = new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' });
    
    // Make a check for the datafile in edge config.
    // If no datafile exists, fetch the datafile from CDN

    const datafileAtEdge = await getDatafileFromEdge();

    if (!datafileAtEdge) {
      const datafileFromOptimizelyCDN = await fetchDatafileFromCDN();

      // Update Datafile at Edge
      updateEdgeConfig(datafileFromOptimizelyCDN, timeStamp);

      return datafileFromOptimizelyCDN;
    }

    return datafileAtEdge;
  }

  const datafile = await checkAndFetchForDatafile();

  // Initialize Optimizely with datafile stored in Vercel Edge Config

  const instance = initializeOptimizely(datafile);

  // Create Optimizely User Context

  const user = instance.createUserContext(userId.toString())

  // Decide variation for the flag.

  const pokemonDecision = user.decide('pokemon');
  const pokemon = pokemonDecision.variables['pokemon_name'];

  // Re-route user to the page that reflects the flag decision

  const response = NextResponse.rewrite(new URL(`/${pokemon}`, req.url))

  if (!req.cookies.has(COOKIE_NAME)){
    response.cookies.set(COOKIE_NAME, userId);
  }

  return response; 
}


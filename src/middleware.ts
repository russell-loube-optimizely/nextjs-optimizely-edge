import { NextResponse, NextRequest, NextFetchEvent } from 'next/server';
import { get } from '@vercel/edge-config';

import optimizelyClient from "@optimizely/optimizely-sdk";

import { fetchDatafile } from '../utils/fetch-optimizely-datafile';
import { updateEdgeConfig } from '../utils/update-edge-config';
import { checkForDatafile } from '../utils/check-for-datafile'
 
export const config = { matcher: '/' };

const COOKIE_NAME = 'optimizely_visitor_id'
 
export async function middleware(req: NextRequest, res: NextResponse, event: NextFetchEvent) {

  // Fetch user Id from the cookie if available so a returning user from same browser session always sees the same variation.
  const userId = req.cookies.get(COOKIE_NAME)?.value || crypto.randomUUID()

  // Make a check for the datafile in edge config. If no datafile exists, create the key-value pair for the edge config.

  const datafileExists = await checkForDatafile();

  if (!datafileExists) {
    const datafile = await fetchDatafile();
    updateEdgeConfig(datafile);
  }

  // Get the datafile from the edge config

  const optimizelyDatafile = await get('optimizely');
  const stringifiedOptimizelyDatafile = JSON.stringify(optimizelyDatafile);

  // Create Optimizely instance using datafile

  const instance = optimizelyClient.createInstance({
    datafile: stringifiedOptimizelyDatafile,
  })

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


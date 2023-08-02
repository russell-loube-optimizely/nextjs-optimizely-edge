

import { NextFetchEvent, NextRequest } from "next/server";

import { fetchDatafileFromCDN } from "../../../../utils/fetch-optimizely-datafile";
import { updateEdgeConfig } from "../../../../utils/update-edge-config";
import { initializeOptimizely } from "../../../../utils/inititialize-optimizely";

export async function GET(req: NextRequest, event: NextFetchEvent) {
    const timeStamp = new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' });

    console.log(`
    [Optimizely] Optimizely webhook request received!
    The Optimizely datafile has been updated. 
    `);
    
    // Make request to Optimizely CDN for fresh datafile
    const datafile = await fetchDatafileFromCDN();

    // Re-initialize Optimizely with fresh datafile. Example code below:
    // const instance = initializeOptimizely(datafile);
    // You may want to store this instance somewhere where it can be used by your app at a root level

    // Update Vercel Edge Config wth fresh datafile
    await updateEdgeConfig(datafile, timeStamp);
    
    const response = new Response('Webhook Received, Updated Optimizely and Edge Config With New Data')
    
    return response;
}
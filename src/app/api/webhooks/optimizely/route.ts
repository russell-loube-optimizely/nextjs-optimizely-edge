import { NextRequest } from "next/server";

import { fetchDatafileFromCDN } from "../../../../utils/fetch-optimizely-datafile";
import { updateEdgeConfig } from "../../../../utils/update-edge-config";
import { initializeOptimizely } from "../../../../utils/inititialize-optimizely";

export async function GET(req: NextRequest) {
    console.log(`
    [Optimizely] Optimizely webhook request received!
    The Optimizely datafile has been updated. Re-download
    the datafile and re-instantiate the Optimizely SDK
    for the changes to take effect
    `);
    
    // Make request to Optimizely CDN for fresh datafile
    const datafile = await fetchDatafileFromCDN();

    // Re-initialize Optimizely with fresh datafile. 
    // You may want to store this instance somewhere where it can be used by your app elsewhere (i.e. a context store)
    
    const instance = initializeOptimizely(datafile);

    // Update Vercel Edge Config wth fresh datafile

    await updateEdgeConfig(datafile);
    
    const response = new Response('Webhook Received, Updated Optimizely and Edge Config With New Data')
    
    return response;
}
import { NextRequest } from "next/server";

import { fetchDatafile } from "../../../../utils/fetch-optimizely-datafile";
import { updateEdgeConfig } from "../../../../utils/update-edge-config";
import { initializeOptimizely } from "../../../../utils/inititialize-optimizely";

export async function GET(req: NextRequest) {
    console.log(`
    [Optimizely] Optimizely webhook request received!
    The Optimizely datafile has been updated. Re-download
    the datafile and re-instantiate the Optimizely SDK
    for the changes to take effect
    `);

    const response = new Response('Webhook Received, Updated Optimizely With New Data')

    // Make request to Optimizely CDN for fresh datafile
    const datafile = await fetchDatafile();

    // Update Vercel Edge Config wth datafile
    await updateEdgeConfig(datafile);

    // Initialize Optimizely with value from Vercel Edge Config
    await initializeOptimizely();

    return response;
}
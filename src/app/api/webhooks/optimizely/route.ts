import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    console.log(`
    [Optimizely] Optimizely webhook request received!
    The Optimizely datafile has been updated. Re-download
    the datafile and re-instantiate the Optimizely SDK
    for the changes to take effect
    `);

    return new Response('Webhook Received')
}
import { get } from "@vercel/edge-config";

import optimizelyClient from "@optimizely/optimizely-sdk";

export async function initializeOptimizely() {

  // Get the datafile from the edge config

  const getDatafileFromEdge = async () => {
    console.log('Getting Datafile From Edge')
    try {
      const optimizelyDatafile = await get('optimizely');
      return JSON.stringify(optimizelyDatafile);
    } 
    catch (error) {
      console.log(error);
    }
  }

  const stringifiedOptimizelyDatafile = await getDatafileFromEdge();

  // Create Optimizely instance using datafile

  const instance = optimizelyClient.createInstance({
    datafile: stringifiedOptimizelyDatafile,
  })

  return instance;
}

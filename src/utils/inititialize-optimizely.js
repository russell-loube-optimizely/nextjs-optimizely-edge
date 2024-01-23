import optimizelyClient from "@optimizely/optimizely-sdk";

export function initializeOptimizely(datafile) {

  // Create Optimizely instance using datafile

  const instance = optimizelyClient.createInstance({
    datafile: datafile,
    eventBatchSize: 10,
    eventFlushInterval: 1000,
  })

  return instance;
}
  

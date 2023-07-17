import optimizelyClient from "@optimizely/optimizely-sdk";

export function initializeOptimizely(datafile) {

  // Create Optimizely instance using datafile

  const instance = optimizelyClient.createInstance({
    datafile: datafile,
  })

  return instance;
}

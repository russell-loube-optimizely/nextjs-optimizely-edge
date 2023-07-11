export const config = {runtime: 'edge'}

export async function fetchDatafile() {
  const sdkKey = process.env.OPTIMIZELY_SDK_KEY;
  console.log(`Fetching Optimizely Datafile for SDK Key: ${sdkKey}`);

  const response = await fetch(`https://cdn.optimizely.com/datafiles/${sdkKey}.json`);
  if (response.ok)console.log(`Optimizely Datafile fetched successfully`);
  
  const responseJson = await response.json();
  return responseJson;
}
export const runtime = 'edge';

export async function fetchDatafileFromCDN() {
  const sdkKey = process.env.OPTIMIZELY_SDK_KEY;

  console.log(`Fetching Optimizely Datafile for SDK Key: ${sdkKey}`);

  try {
    const response = await fetch(`https://cdn.optimizely.com/datafiles/${sdkKey}.json`, {next: { revalidate: 0 }});
    console.log(`Optimizely Datafile fetched successfully`);
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.log(error)
  }
}

export async function getDBDatafile() {
  const sdkKey = 'KHpaznA1c7t2DgGDPaYj9';

  console.log(`Fetching Optimizely Datafile for SDK Key: ${sdkKey}`);

  try {
    const response = await fetch(`https://cdn.optimizely.com/datafiles/${sdkKey}.json`, {next: { revalidate: 0 }});
    console.log(`DB Datafile fetched successfully`);
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.log(error)
  }
}
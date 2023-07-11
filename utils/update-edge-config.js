export const config = {runtime: 'edge'}

export async function updateEdgeConfig(datafile, op) {
  const edgeConfigID = process.env.EDGE_CONFIG_ID;
  const vercelAPIToken = process.env.VERCEL_API_TOKEN;

  try {
    const response = await fetch(
      `https://api.vercel.com/v1/edge-config/${edgeConfigID}/items`,
      {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${vercelAPIToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: [
            {
              operation: op,
              key: 'optimizely',
              value: datafile
            },
          ],
        }),
      },
    );
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
  
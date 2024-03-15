export const runtime = "edge";
export const dynamic = "force-dynamic";

export async function updateEdgeConfig(datafile, timeStamp) {
  const edgeConfigID = process.env.EDGE_CONFIG_ID;
  const vercelAPIToken = process.env.VERCEL_API_TOKEN;
  const teamID = process.env.VERCEL_TEAM_ID;

  try {
    const response = await fetch(
      // `https://api.vercel.com/v1/edge-config/${edgeConfigID}/items?teamId=${teamID}`,
      `https://api.vercel.com/v1/edge-config/${edgeConfigID}/items`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${vercelAPIToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: [
            {
              operation: "upsert",
              key: "optimizely",
              value: datafile,
            },
            {
              operation: "upsert",
              key: "optimizely_last_updated",
              value: timeStamp,
            },
          ],
        }),
      }
    );
    const result = await response.json();
    console.log(
      `Status of updating edge config: ${JSON.stringify(result.status)}`
    );
  } catch (error) {
    console.log(error);
  }
}

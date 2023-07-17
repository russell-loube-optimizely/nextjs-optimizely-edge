import { get } from '@vercel/edge-config';

export const config = {
  runtime: 'edge',
};

export async function getDatafileFromEdge() {
    const optimizelyDatafileAtEdge = await get('optimizely');
    if (!optimizelyDatafileAtEdge) {
      console.log('No Optimizely Key At Edge')
      return false;
    }
    return optimizelyDatafileAtEdge;
  }
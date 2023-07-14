import { has } from '@vercel/edge-config';

export const config = {
  runtime: 'edge',
};

export async function checkForDatafile() {
    const optimizelyKeyAtEdge = await has('optimizely');
    if (!optimizelyKeyAtEdge) return false;
    return true;
  }
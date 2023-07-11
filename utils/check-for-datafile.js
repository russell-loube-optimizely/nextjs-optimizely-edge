import { get } from '@vercel/edge-config';

export async function checkForDatafile() {
    const optimizelyDatafile = await get('optimizely');
    if (!optimizelyDatafile) return false;
    return true;
  }
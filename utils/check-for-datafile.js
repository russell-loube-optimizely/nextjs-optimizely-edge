import { get } from '@vercel/edge-config';

export async function checkForDatafile() {
    const datafile = await get('optimizely');
    if (!datafile) return false;
    return true;
  }
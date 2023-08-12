import { cookies } from 'next/headers'

import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const cookieStore = cookies();
    cookieStore.delete('pokemon');
    cookieStore.delete('optimizely_visitor_id');
    
    const response = NextResponse.redirect(new URL('/', req.url));
    
    return response;
}
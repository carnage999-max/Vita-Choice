import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log('API Route: Received request body:', body);
    
    // Add timeout to prevent hanging
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout
    
    // Forward the request to your backend
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/contact/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(body),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);
    console.log('API Route: Backend response status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('API Route: Backend error response:', errorText);
      throw new Error(`Backend responded with status: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    console.log('API Route: Success response from backend:', data);
    
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error('API Route: Contact API error:', error);
    
    if (error instanceof Error && error.name === 'AbortError') {
      return NextResponse.json(
        { error: 'Request timeout - please try again' },
        { status: 408 }
      );
    }
    
    return NextResponse.json(
      { error: 'Failed to send message', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
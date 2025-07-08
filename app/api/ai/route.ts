import { NextResponse } from 'next/server';

// This is a secure way to handle API requests
// The API key is stored on the server and not exposed to the client
export async function POST(request: Request) {
  try {
    const { prompt } = await request.json();
    
    if (!prompt) {
      return NextResponse.json(
        { error: 'Prompt is required' },
        { status: 400 }
      );
    }
    
    // In a real implementation, you would use the API key here
    // const apiKey = process.env.GOOGLE_API_KEY;
    
    // For now, we'll return a mock response
    // This simulates what would happen with a real AI API call
    const mockResponse = {
      recommendation: {
        title: "AI-Enhanced Portfolio Analyzer",
        description: "An application that uses machine learning to analyze GitHub portfolios and suggest improvements.",
        technologies: ["React", "TensorFlow.js", "GitHub API", "Next.js"],
        difficulty: "Intermediate"
      }
    };
    
    return NextResponse.json(mockResponse);
    
  } catch (error) {
    console.error('AI API error:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
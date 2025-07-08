import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { prompt } = await request.json();
    
    if (!prompt) {
      return NextResponse.json(
        { error: 'Prompt is required' },
        { status: 400 }
      );
    }
    
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
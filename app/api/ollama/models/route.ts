import { NextResponse } from "next/server";

export async function GET() {
  try {
    const ollamaUrl = process.env.OLLAMA_URL || 'http://localhost:11434';
    const response = await fetch(`${ollamaUrl}/api/tags`);

    if (!response.ok) {
      throw new Error(`Ollama API responded with status: ${response.status}`);
    }

    const data = await response.json();
    const models = data.models.map((model: any) => ({
      value: model.name,
      label: model.name,
    }));

    return NextResponse.json({ models });
  } catch (error: any) {
    console.error("Error fetching Ollama models:", error);
    return NextResponse.json(
      { error: "Failed to fetch Ollama models", details: error.message },
      { status: 500 }
    );
  }
}
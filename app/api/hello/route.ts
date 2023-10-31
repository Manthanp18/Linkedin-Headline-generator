// import OpenAI from "openai";
// import { OpenAIStream, StreamingTextResponse } from "ai";
// import { NextRequest, NextResponse } from "next/server";

// // Initialize OpenAI client with API key
// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY!,
// });

// // IMPORTANT! Set the runtime to edge
// export const runtime = "edge";

// export async function POST(req: NextRequest) {
//   try {
//     // Extract the `messages` from the body of the request
//     const { messages } = await req.json();

//     // Extract the last user message
//     const lastUserMessage = messages[messages.length - 1];

//     // Define a system & user message
//     const systemAndUserMessage: OpenAI.Chat.Completions.ChatCompletionMessageParam[] =
//       [
//         {
//           role: "system",
//           content: `Generate creative and unique LinkedIn profile headline for this ${lastUserMessage}. example: 🚀 Innovative Software Developer | Full Stack Expert | Passionate about Building Scalable Solutions | Collaborative Team Player | Let's Create the Future! 💻✨ `,
//         },
//         {
//           role: "user",
//           content: lastUserMessage.content || "",
//         },
//       ];

//     // Call OpenAI API for chat completion
//     const response = await openai.chat.completions.create({
//       model: "gpt-3.5-turbo",
//       stream: true,
//       messages: systemAndUserMessage,
//       max_tokens: 200,
//     });

//     // Create and return a streaming response
//     const stream = OpenAIStream(response);
//     return new StreamingTextResponse(stream);
//   } catch (error: any) {
//     // Log the error
//     console.error("Unexpected server error:", error);

//     // Return a generic error response
//     return NextResponse.json(
//       { error: "An internal error occurred. Please try again later." },
//       { status: 500 }
//     );
//   }
// }

// app/api/completion/route.ts

import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";

export const runtime = "edge";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST(req: Request) {
  // Extract the `prompt` from the body of the request
  const { prompt } = await req.json();

  // Request the OpenAI API for the response based on the prompt
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    stream: true,
    // a precise prompt is important for the AI to reply with the correct tokens
    messages: [
      {
        role: "user",
        content: `Generate creative and unique LinkedIn profile headline for this ${prompt}. example: 🚀 Innovative Software Developer | Full Stack Expert | Passionate about Building Scalable Solutions | Collaborative Team Player | Let's Create the Future! 💻✨ but it should be short 2 lines max `,
      },
    ],
    max_tokens: 200,
    // temperature: 0, // you want absolute certainty for spell check
    // top_p: 1,
    // frequency_penalty: 1,
    // presence_penalty: 1,
  });

  const stream = OpenAIStream(response);

  return new StreamingTextResponse(stream);
}

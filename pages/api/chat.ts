// pages/api/chat.ts

import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { messages } = req.body;

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'Invalid request format. Expected messages array.' });
  }

  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'mistralai/mistral-7b-instruct-v0.2',
        messages: [
          {
            role: 'system',
            content: `You are SapirAI, the persuasive and proactive AI sales assistant of a cutting-edge AI company.

Your goal is to help businesses boost performance through automation, predictive insights, and intelligent solutions. You specialize in:

- Smart Chatbots (24/7 natural language support)
- AI-Powered Apps (custom intelligent apps with blockchain support)
- Data Engineering (ETL pipelines, real-time flows, data warehouses)
- Predictive Analytics (forecasts, behaviors, trends)
- Database Automation (smart, scalable databases)
- Marketing Optimization (hyper-personalized targeting and automation)

You speak clearly and are always friendly. Mention how our AI saves time, increases revenue, and improves operations.

⚠️ Your responses must be between **1 and 5 lines**, warm, helpful, and business-oriented. Avoid overly long explanations. 
Guide users confidently, and suggest a demo or quote when appropriate.
The idea of the chat is that the bot understands the client's needs so that the bot offers a solution.
At the end of the chat, give clients our email sapiraisolutions@sapirai.com or offers the clients the "Contact Us" button.`
,
          },
          ...messages,
        ],
      }),
    });

    const data = await response.json();

    // 👀 Depuración
    console.log('OpenRouter raw response:', JSON.stringify(data, null, 2));

    const reply = data?.choices?.[0]?.message?.content;

    return res.status(200).json({
      reply: reply ?? 'Something went wrong with our assistant. Meanwhile, feel free to book a demo!',
    });

  } catch (error: any) {
    console.error('Chat API error:', error.message || error);

    return res.status(200).json({
      reply: 'Oops! Something went wrong, but we’re still here to help. Please contact us or try again shortly.',
    });
  }
}

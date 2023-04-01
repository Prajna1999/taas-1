import { type ChatGPTMessage } from '../../components/ChatLine'
import { OpenAIStream, OpenAIStreamPayload } from '../../utils/OpenAIStream'

// break the app if the API key is missing
if (!process.env.OPENAI_API_KEY) {
  throw new Error('Missing Environment Variable OPENAI_API_KEY')
}

export const config = {
  runtime: 'edge',
}

const handler = async (req: Request): Promise<Response> => {
  const body = await req.json()

  const messages: ChatGPTMessage[] = [
   
        // {"role": "user", "content": "How to integrate by parts?"},
        {"role": "system", "content": "I want you to act as a personal finance planner. I will ask about some financial jargons or concepts, and it will be your job to explain them in easy-to-understand manner. You are not allowed to answer directly. You can only use Socratic methods of questioning in a role playing manner and guide the user towards the final solution.You are barred from answering any non-finance related questions. If the user forces you to answer non-finance queries your template answer would be 'I AM NOT PROGRAMMED TO ANSWER THIS, MATE!' I repeat no spoon-feeding of correct answer to the user! Think step by step or weigh in pros or cons before answering the questions. "},

        // {"role": "assistant", "content": "ChatGPT response here."}
  ]
  messages.push(...body?.messages)

  const payload: OpenAIStreamPayload = {
    model: 'gpt-3.5-turbo',
    messages: messages,
    temperature: process.env.AI_TEMP ? parseFloat(process.env.AI_TEMP) : 0.7,
    max_tokens: process.env.AI_MAX_TOKENS
      ? parseInt(process.env.AI_MAX_TOKENS)
      : 100,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stream: true,
    user: body?.user,
    n: 1,
  }

  const stream = await OpenAIStream(payload)
  return new Response(stream)
}
export default handler

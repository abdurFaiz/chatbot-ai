import { OpenAI } from "openai"
import type { ChatCompletionMessageParam } from "openai/resources/chat/completions"
import type { Message } from "../types/index";

const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
})

export const getAiReesponce = async (chatHistory: Message[]): Promise<string> => {
    const messages: ChatCompletionMessageParam[] = chatHistory.map(msg => ({
        role: msg.role,
        content: msg.content
    }));

    try {
        const completion = openai.chat.completions.create({
            messages: messages,
            model: "gpt-4",
        });
        return (await completion).choices[0].message.content || "No response from AI";
    } catch (err) {
        console.error('Error calling OpenAI API:', err);
        return 'Maaf, terjadi kesalahan. Coba lagi nanti.';
    }
}

/**
 * Membuat judul ringkas untuk sesi chat berdasarkan pesan pertama pengguna.
 * @param userMessage Konten dari pesan pertama pengguna.
 * @returns String judul yang dihasilkan oleh AI.
 */
export const generateTitleForChat = async (userMessage: string): Promise<string> => {
    const prompt = `Based on the following user query, create a short, descriptive title for the chat session. 
  The title should be no more than 5 words and in the same language as the query. 
  Do not add any quotes, labels, or prefixes like "Title:" to your response. Just return the title itself.

  User Query: "${userMessage}"`;

    try {
        const completion = await openai.chat.completions.create({
            messages: [{ role: 'user', content: prompt }],
            model: 'gpt-3.5-turbo',
            max_tokens: 20, // Batasi token untuk memastikan jawaban singkat dan menghemat biaya
            temperature: 0.3, // Sedikit lebih kreatif tapi tetap fokus
        });

        const title = completion.choices[0]?.message?.content?.trim() || userMessage.substring(0, 30);
        // Hapus tanda kutip jika AI secara tidak sengaja menambahkannya
        return title.replace(/["']/g, '');

    } catch (error) {
        console.error('Error generating title:', error);
        // Jika gagal, gunakan 30 karakter pertama dari pesan pengguna sebagai fallback.
        return userMessage.substring(0, 30) + '...';
    }
};
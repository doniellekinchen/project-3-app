import axios from 'axios';

const OpenAIChat = async (userMessage) => {
  const apiKey = 'VITE_CHAT_BOT';
  const apiUrl = 'https://api.openai.com/v1/chat/completions';

  try {
    const response = await axios.post(apiUrl, {
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: userMessage },
      ],
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
    });

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error('Error making OpenAI API request:', error);
    return 'Error processing request.';
  }
};

export default OpenAIChat;

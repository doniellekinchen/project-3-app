import axios from 'axios';

const OpenAIChat = async (userMessage) => {
  // eslint-disable-next-line no-undef
  const apiKey = import.meta.env.VITE_OPENAI_KEY; // Updated syntax for Vite
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
    console.log(error)
    if (error.response && error.response.status === 429) {
      // Handle rate limiting, e.g., wait for a period and retry
      console.log('Rate limited. Waiting before retrying...');
      // await new Promise(resolve => setTimeout(resolve, 5000)); // Wait for 5 seconds
      // return OpenAIChat(userMessage); // Retry the request
     
    } else {
      console.error('Error making OpenAI API request:', error);
      return 'Error processing request.';
    }
  }
};


export default OpenAIChat;

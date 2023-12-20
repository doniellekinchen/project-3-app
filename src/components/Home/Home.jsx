import React, { useState, useEffect } from 'react'

function Home() {
    const lifeQuestions = [
        "What is the meaning of life?",
        "What are your biggest goals in life?",
        "How do you define happiness?",
        "What are your core values, and how do they guide your decisions?",
        "What legacy would you like to leave behind?",
        "How do you handle and overcome challenges in life?",
        "How do you deal with change and uncertainty?",
        "You are holding a basket for an afternoon in the park with a friend or your partner. What is in it?",
        "For what item would you be willing to stand in line more than four hours to buy?",
        "What makes you feel confident?",
       "What is your favorite childhood memory?",
       "What event are you looking forward to?",
       "What is the scariest thing you have ever done? Would you ever do it again? If not, what are ways you would not put yourself in that situation again?",
       "What would you title your autobiography?",
       "Do you think it is easier to be happy when you dont have as many choice?",
       "Are you tougher, mentally or physically?",
       "Is justice or forgiveness more important?",
       "Who is the best teacher you have ever known or had?",
       "With whom are you angry? What steps would you take to stop being angry with them?",
       "Name all the 'hats' you wear? What 'hat' would you like to add? Take away?",
       "How would you explain your basic life philosophy?",
       "Have you seen your work suffer when you are unhappy? What are ways you can change that?",
       "What is the hardest thing for you to resist?",
       "Does work contribute to your happiness or take away from it?",
       "When are you most impatient?",
       "Do you have unnecessarily high standards?",
       "Which kinds of decisions exhaust you?",
       "When you shut your eyes at night what do you think about?",
       "Do you let the little things get in the way of the big things?",
       "Do you possess any of the qualities of your astrological sign?",
       "When is the last time you took a big risk?",
       "What is the best stress reliever for you?",
       "How will you know when you're 'grownn up'?",
       "Where would you choose to travel if money was no object?",
      ];
      
      const getRandomQuestion = () => {
        const randomIndex = Math.floor(Math.random() * lifeQuestions.length);
        return lifeQuestions[randomIndex];
      };
      
      const [randomQuestion, setRandomQuestion] = useState('')


      useEffect(() => {
        setRandomQuestion(getRandomQuestion());
      }, []);
      
      const handleNewQuestion = () => {
        setRandomQuestion(getRandomQuestion())
      }

      return (
        <div className='text-center'>
          <p className='text-gray-700'>{randomQuestion}</p>
          <button
            className='bg-teal-500 text-white px-4 py-2 mt-4 rounded'
            onClick={handleNewQuestion}
          >
            Get New Question
          </button>
        </div>
      );
    }
    

export default Home

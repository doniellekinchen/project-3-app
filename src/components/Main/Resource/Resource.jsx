import React, { useState, useEffect } from 'react'
import '../Resource/Resource.css'

function Resource() {
 const [news, setNews] = useState([]);
    
         useEffect(() => {
            const apiKey = import.meta.env.VITE_NEWS_KEY

            fetch(`https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=${apiKey}`)
            .then((res) => {
              return res.json();
            })
            .then((data) => {
              console.log(data);
              setNews(data.articles);
            });
        }, []);


        

        return (
            <div className="news-grid">
              <h1>Resources go here</h1>
              <div className="grid-container">
                {Array.isArray(news) &&
                  news.map((article, index) => (
                    <div key={index} className="news-item">
                      <img src={article.urlToImage} alt={article.title} />
                      <h3>{article.title}</h3>
                      <p>{article.description}</p>
                    </div>
                  ))}
              </div>
            </div>
          );
        }
        

export default Resource
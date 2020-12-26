import React, { useEffect, useState } from 'react';
import './App.css';

import alanBtn from '@alan-ai/alan-sdk-web';

const alankey = 'bdbd0722766569e6571e6aa7438fb1f42e956eca572e1d8b807a3e2338fdd0dc/stage';

function App() {
  const [newsArticles, setNewsArticles] = useState([]);

  useEffect(() => {
    alanBtn({
      key: alankey,
      onCommand: ({ command, articles }) => {
        if (command === 'newHeadlines') {
          setNewsArticles(articles);
        }
      }
    })
  }, [])
  return (
    <div className="app">
       
     <h1>Hello there!</h1>
    </div>
  );
}

export default App;
import React, { useEffect, useState } from 'react';
import './App.css';
import wordsToNumbers from 'words-to-number'

import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/NewsCards';
import useStyles from './components/styles'

const alankey = 'bdbd0722766569e6571e6aa7438fb1f42e956eca572e1d8b807a3e2338fdd0dc/stage';



function App() {
  const classes = useStyles();
  const [activeArticle, setActiveArticle] = useState(-1);
  const [newsArticles, setNewsArticles] = useState([]);

  useEffect(() => {
    alanBtn({
      key: alankey,
      onCommand: ({ command, articles, number }) => {
        if (command === 'newHeadlines') {
          setNewsArticles(articles);
          setActiveArticle(-1);
        } else if(command === 'highlight') {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        } else if(command === 'open') {
          const parsedNumber = number.length > 2 ? wordsToNumbers((number), {fuzzy: true}) : number;
          const article = articles[parsedNumber - 1];

          if(parsedNumber > 20) {
            alanBtn().playText('Please try that again.')
          } else if(article) {
            window.open(article.url, '_blank');
            alanBtn().playText('Opening...');
          }
        }
      }
    })
  }, [])


  return (
    <div>
      <div className={classes.logoContainer}>
        <img src='https://alan.app/voice/images/previews/preview.jpg' className={classes.alanLogo} alt='Alan Logo'/>
      </div>
      <NewsCards articles={newsArticles} activeArticle={activeArticle} />
    </div>
  );
}

export default App;
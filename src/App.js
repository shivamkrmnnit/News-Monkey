
import './App.css';
// import { render } from '@testing-library/react';

import React, {useState} from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'



import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';

const App =()=> {
  // apiKey="11269f201b0e4351b5c62d0127fee888"
  const apiKey=process.env.REACT_APP_NEWS_API
 
  const [progress, setProgress] = useState(0)



    return (
      <div>
        
        


      <Router>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={progress}
       
      />
      
          
        
        <Routes>
        <Route exact path="/" element={<News setProgress = {setProgress} apiKey={apiKey} key="general" country="in" category="general" />} />
        <Route exact path="/business" element={<News setProgress = {setProgress} apiKey={apiKey} key="business" country="in" category="business" />}/>
        <Route exact path="/entertainment"  element={  <News setProgress = {setProgress} apiKey={apiKey} key="entertainment" country="in" category="entertainment" />}/>
      
        <Route exact path="/general"  element={<News setProgress = {setProgress} apiKey={apiKey} key="general" country="in" category="general" />}/>
        <Route exact path="/health"  element={<News setProgress = {setProgress} apiKey={apiKey} key="health" country="in" category="health" />}/>
        <Route exact path="/science"  element={<News setProgress = {setProgress} apiKey={apiKey} key="science" country="in" category="science" />}/>
        <Route exact path="/sports"  element={<News setProgress = {setProgress} apiKey={apiKey} key="sports" country="in" category="sports" />}/>
        <Route exact path="/technology"  element={<News setProgress = {setProgress} apiKey={apiKey} key="technology" country="in" category="technology" />}/>
        </Routes>
      
    </Router>


      </div>
  
    )

  
  
}

export default App;

import React, {useState, useEffect} from 'react'
import './App.css';
import jsonData from './webdevtest-data.json'

import List from './components/List/List'
import Detail from './components/Detail/Detail'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

function App() {
  const [fortuneState, setFortuneState] = useState();
  const [madnessState, setMadness] = useState();
  const [millionaireState, setMillionaire] = useState();

  console.log(jsonData.promotion_objects)

  useEffect(() => {
      jsonData.promotion_objects.forEach(item => {
          if (item.promo_image_url === 'images/fortune.jpg') {
              setFortuneState(item);
          } else if (item.promo_image_url === 'images/mmadness.jpg') {
              setMadness(item);
          } else if (item.promo_image_url === 'images/mmmillionaire.jpg') {
              setMillionaire(item);
          }
      })
  }, [])


  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" 
            component={() => <List 
              fortuneState={fortuneState} 
              madnessState={madnessState}
              millionaireState={millionaireState}
            />} 
          />
        </Switch>
        <Switch>
          <Route path="/fortune" component={(props) => <Detail {...props} offerState={fortuneState} />} />
        </Switch>
        <Switch>
          <Route path="/madness" component={(props) => <Detail {...props} offerState={madnessState} />} />
        </Switch>
        <Switch>
          <Route path="/millionaire" component={(props) => <Detail {...props} offerState={millionaireState} />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

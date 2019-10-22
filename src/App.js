import React, { useReducer }  from 'react';
import { reducer, initialState } from './reducers/reducer'

import Header from './components/Header';
import AddedFeatures from './components/AddFeature/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeature/AdditionalFeatures';
import Total from './components/Total';

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const removeFeature = item => {
    // dispatch an action here to remove an item
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={state.car} />
        <AddedFeatures car={state.car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={state.additionalFeatures} />
        <Total car={state.car} additionalPrice={state.additionalPrice} />
      </div>
    </div>
  );
};

export default App;

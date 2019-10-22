import React from 'react';
import { connect } from 'react-redux';

import { addFeature } from './components/actions/AddFeature'
import { removeFeature } from './components/actions/RemoveFeature'

import Header from './components/Header';
import AddedFeatures from './components/AddFeature/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeature/AdditionalFeatures';
import Total from './components/Total';

const App = props => {
  console.log(props, "<- APP PROPS")

  // const removeFeature = item => {
  //   // dispatch an action here to remove an item
  // };

  const buyItem = item => {
    // dipsatch an action here to add an item
    props.addFeature(item);
    console.log(item, "ITEM")
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures buyItem={buyItem} additionalFeatures={props.additionalFeatures} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

function mapStateToProps(state){
  return {
    car: state.car,
    additionalFeatures: state.additionalFeatures,
    additionalPrice: state.additionalPrice
  }
}

export default connect(mapStateToProps, { addFeature, removeFeature })(App);

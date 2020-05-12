import React from 'react';
import { addFeature } from './allActions';
import { connect } from 'react-redux'

const AdditionalFeature = props => {
  
  return (
    <li>
      
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={(e) => { 
        props.addFeature(props.feature)
      }} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};


const mapStateToProps = (state) => {
  return{


  }
}

export default connect(mapStateToProps, {addFeature})(AdditionalFeature);


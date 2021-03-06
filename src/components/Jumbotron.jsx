import React, { Component } from 'react';
import './Jumbotron.css';

class Jumbotron extends Component {
  render() {
     return  (
     <div classname="jumbotron jumbotron-fluid">
         <div className="container">
           <h1 className="display-3">{this.props.title}</h1>
           <p classname="lead">{this.props.subtitle}</p>
         </div>
     </div>
     );
   }
 }
 
 export default Jumbotron

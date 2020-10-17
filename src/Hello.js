import React, { Component } from 'react';
import './Hello.css';
// class Hello extends Component{
//     render(){
//         return (
//         <div className="f1 tc">
//         <h1>Hello World from Hello.js</h1>
//         <p>Welcome to React</p>
//         <p>{this.props.greeting}</p>
//         </div>
//         );
//     }
// }
const Hello=(property)=>{
    return (<div className="f1 tc">
    <h1>Hello World from Hello.js</h1>
    <p>Welcome to React</p>
    <p>{property.greeting}</p>
    </div>);
}
export default Hello; 
//JSX humhe allow krt ha ke hum HTML ka code JS file ma likhsakhe e.g Hello.js ma HTML ke tags likje gye ha

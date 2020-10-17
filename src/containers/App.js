import React, { Component } from 'react';
import CardList from '../components/CardList';
import { robots } from '../robots';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from "../components/Scroll";
import ErrorBoundry from '../components/ErrorBoundry';

// const App = () => {
//     return (
//         <CardList robots={robots} />
//     );
// }


class App extends Component {
    constructor(){
        super();
        this.state = {
            robots: [],
            searchField: ''
        }
        console.log("constructor");
    }
    // onSearchChange(event){
    //     console.log(event.target.value);
    // }
    onSearchChange=(event)=>{
    this.setState({searchField:event.target.value});
    //console.log(filteredRobots);
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(users=>this.setState({robots:users}));
        console.log("componentDidMount");
    }
    render() {
        console.log("render");
        const {robots,searchField}=this.state;
        const filteredRobots=robots.filter(robot=>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
        if(!robots.length){
          return <h1>Loading...</h1>
        }
        else
        {
        return (
            <div className="tc">
                <h2 className="f1">RoboFriends</h2>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                       <CardList robots={filteredRobots} />
                    </ErrorBoundry>
                </Scroll>
            </div>
        );
    } 
 }
}
export default App;


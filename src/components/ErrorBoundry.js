import React, { Component } from 'react';

class ErrorBoundry extends Component{
    constructor(props){
        super(props);
        this.state={
            hasError:false
        }
    }
    componentDidCatch(error,info)//jb bi application ma koi error aye ga to ya life cycle hook ki waja se automatically call hojaye ga 
    {
        this.setState({hasError:true});
    }
    render(){
        if(this.state.hasError){
            return <h1>Oooops! Thats not so good </h1>
        }
        return this.props.children;//is case ma CardList ke error ke liye hum children use kr rahe ha
    }
}

export default ErrorBoundry;
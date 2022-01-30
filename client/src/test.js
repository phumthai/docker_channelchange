import React from "react";
import axios from "axios";

export default class test extends React.Component{
    state = {
        val: [],
    };

    componentDidMount(){
        axios.get('http://localhost:3001/d').then((res)=>{
            this.setState({val:res.data});
        })
    }
    render(){
        return (
            <h4>
                {this.state.val.map(val => <a>{val.cou}</a>)}
            </h4>
        )
    }
}
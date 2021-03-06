import React, { Component } from "react";


export class CommentBox extends Component{
    state = {
        comment:"",
        
    };
    handleChange =(e)=>{
        this.setState({comment:e.target.value});
    }

    handleSubmit =(e)=>{
        e.preventDefault();
        
    }
    render(){
        return <form onSubmit={this.handleSubmit}>
            <h4>Add a Comment</h4>
            <textarea onChange = {this.handleChange} value = {this.state.comment}/>
            <div>
                <button>Submit Comment</button>
            </div>
        </form>;
        
    }
}
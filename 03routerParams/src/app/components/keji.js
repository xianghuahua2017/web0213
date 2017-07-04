import React from "react";
import Fetch from "./fetchs/usefetch.js"
export default class Keji extends React.Component{
    render(){
        return(
            <div>
            科技
            {this.props.params.content}
            {this.props.params.num}
            <Fetch title={this.props.params.content} name={this.props.params.num} />
            </div>

        )
    }
}
import {get} from "./get.js";
import React from "react";
export default class Fetch extends React.Component{
    constructor(){
        super();
        this.state={
            news:[
                {
                    title:"未知",
                    name:"未知"
                }
            ]
        }
    }
    componentDidMount(){
        var result=get("http://www.iwen.wiki/sxtstu/news/juhenews.php?type="+this.props.title+"&count="+this.props.name);
        result.then(res=>{
            return res.json()
        }).then(json=>{
            this.setState({
                news:json
            })
        })
    }
    render(){
        return(
                <ul>
                    {
                        this.state.news.map((item,index)=>{
                            return <li key={index}><span>{item.title}</span><span>{item.author_nam}</span></li>
                        })
                    }
                </ul>
        )
    }
}
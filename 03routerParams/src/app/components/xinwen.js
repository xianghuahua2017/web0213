import React from "react";
import {get} from "./fetchs/get.js"
export default class Xinwen extends React.Component{
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
        var result=get("http://www.iwen.wiki/sxtstu/news/juhenews.php?type="+this.props.params.content+"&count="+this.props.params.num);
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
            <div>
                新闻
                {this.props.params.content}
                {this.props.params.num}
                <ul>
                    {
                        this.state.news.map((item,index)=>{
                            return <li key={index}><span>{item.title}</span><span>{item.author_name}</span> </li>
                        })
                    }
                </ul>
            </div>
            
        )
    }
}
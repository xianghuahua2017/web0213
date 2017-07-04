import React from "react";
import {Link} from "react-router";
export default class Index extends React.Component{
    render(){
        var navData=[
            {
                path:"/",
                name:"娱乐"
            },
            {
                path:`/xinwen/${"xinwen"}/${10}`,
                name:"新闻"
            },
            {
                path:`/keji/${"keji"}/${5}`,
                name:"科技"
            }
        ]
        return(
            <div>
                <ul>
                    {
                        navData.map((item,index)=>{
                            return <li key={index}><Link to={item.path}>{item.name}</Link></li>
                        })
                    }
                </ul>
                {this.props.children}
            </div>
        )
    }
}
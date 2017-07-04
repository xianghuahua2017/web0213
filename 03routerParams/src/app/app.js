import React from "react";
import {render} from "react-dom";
import {Route,Router,hashHistory,IndexRoute} from "react-router";
import Index from "./components/index.js";
import Yule from "./components/yule.js";
import Xinwen from "./components/xinwen.js";
import Keji from "./components/keji.js";
class App extends React.Component{
    render(){
        return(
            <Router history={hashHistory}>
                <Route path="/" component={Index}>
                    <IndexRoute  component={Yule}/>
                    <Route path="/xinwen/:content/:num" component={Xinwen}></Route>
                    <Route path="/keji/:content/:num" component={Keji}></Route>
                </Route>
            </Router>
        )
    }
}
render(<App/>,document.getElementById("root"))
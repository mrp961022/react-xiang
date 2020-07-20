import React from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

function Home (){
    return (
        <div>
            <h1>admin首页</h1>
        </div>
    )
}

function Me (props){
    console.log(props)
    return (
        <div>
            <h1>admin个人中心</h1>
        </div>
    )
}

function Product (){
    return (
        <div>
            <h1>admin产品</h1>
        </div>
    )
}
function News(props){
    console.log(props)
    return (
        <div>
            <h1>新闻页，新闻id：{props.match.params.id}</h1>
        </div>
    )
}
export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render() {
        let meObj = {
            pathname: "me", // 跳转的路由
            search:"?uesrname=admin",  // get传参
            hash:"#abc", // 设置的哈希值(锚值)
            state:{msg:"helloworld"} // 传入组件的数据
        }
        return (
            <div id="app">
                <div>所有普通路由页面</div>
                <Router basename="/admin">
                    <div className="nav">
                        <Link to="/">Home</Link>
                        <Link to={meObj}>Me</Link>
                        <Link to="/product" replace>Product</Link>
                        <Link to="/news/456789">新闻页面</Link>
                    </div>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/me" component={Me}></Route>
                    <Route path="/product" component={Product}></Route>
                    <Route path="/news/:id" component={News}></Route>
                </Router>
            </div>
        )
    }
}
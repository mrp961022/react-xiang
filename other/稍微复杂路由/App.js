import React from 'react'
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom'
function LoginInfo(props) {
    switch (props.location.state.loginState) {
        case 'success':
            return <Redirect to="/"></Redirect>
        default:
            return <Redirect to="/login"></Redirect>
    }
}
let FormCom = () => {
    let pathObj = {
        pathname: "/logininfo",
        state:{
            loginState: 'fail'
        }
    }
    return (
        <div>
            <h1>表单验证</h1>
            <Link to={pathObj}>登录验证页面</Link>
        </div>
    )
}
class ChildCom extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.clickEvent}>跳转到首页</button>
            </div>
        )
    }
    clickEvent = () => {
        // this.props.history.push('/',{ state: 111 })
        // this.props.history.replace('/',{ state: 111 })
        // 前进
        this.props.history.go(1); 
        // this.props.history.goForWard();
        // // 后退
        // this.props.history.go(-1);
        // this.props.history.goBack();
    }
}
class App extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route exact path="/" component={(props)=>{
                            console.log(props);
                            return (<h1>首页</h1>)
                        }}></Route>
                        <Route exact path="/form" component={FormCom}></Route>
                        <Route exact path="/login" component={()=>(<h1>登录页面</h1>)}></Route>
                        <Route exact path="/logininfo" component={LoginInfo}></Route>
                        <Route exact path="/abc" component={()=>(<h1>abc1</h1>)}></Route>
                        <Route exact path="/abc" component={()=>(<h1>abc2</h1>)}></Route>
                        <Route exact path="/child" component={ChildCom}></Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}
export default App;
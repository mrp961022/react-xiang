This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


## 生命周期钩子函数

> 三个步骤 
* Mounting: 将组件插入到DOM中
* Updating: 将组件更新到DOM中
* Unmouting: 将组件移除DOM

> 生命周期钩子函数 其中渲染和更新中间会执行render
* ComponentWillMount: 组件将要渲染
* ComponentDidMount: 组件渲染完毕
* ComponentWillReceiveProps: 组件将要接收props的值
* ShouldComponentUpdate: 组件接收state或者props 判断是否更新 返回布尔值
* ComponentWillUpdate: 组件将要更新
* ComponentDidUpdate: 组件更新完毕
* ComponentWillUnmount: 组件将要卸载


## react中的插槽
> 组件中写入内容 这些内容可以被识别和控制 `react`中需要自己开发支持插槽 组件中写入的HTML 可以传入到`props`中 在`props`中的`childern`中

> 对于数组中只有jsx语法的组件的的情况可以直接放在花括号中展示 不用再循环

## react中的路由
* 安装`react-router-dom`依赖
* 引入组件使用
```
// BrowserRouter
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
// HashRouter
import { HashRouter as Router, Link, Route } from 'react-router-dom'

```
* 使用 可以写多个router 当作普通jsx对象使用
```
<Router basename="/">{/* 设置跟路径的路由(默认路由 自动加在前面的路由) */}
    <div className="nav">
        <Link to="/">Home</Link>{/* 路由跳转的a标签 */}
        <Link to="/me">Me</Link>
        <Link to="/product" replace>Product</Link>{/* replace 点击链接后将新地址替换为历史访问的原地址 */}
    </div>
    <Route path="/" exact component={Home}></Route>{/* 跳转的路由 componet的值是组件 exact精确匹配 防止会出现两个路由的问题 例如 / 和 /me 不皆缺匹配跳转的话 跳转me会两个都显示 */}
    <Route path="/me" component={Me}></Route>
    <Route path="/product" component={Product}></Route>
</Router>
```
* `Link`组件可以设置`to`属性来进行路由跳转 `to`属性可以直接写路径的字符串 也可以通过一个对象进行路径的设置 例如 
```
let meObj = {
    pathname: "me", // 跳转的路由
    search:"?uesrname=admin",  // get传参
    hash:"#abc", // 设置的哈希值(锚值)
    state:{msg:"helloworld"} // 传入组件的数据 自定义
}
<Link to={meObj}>Me</Link>
```
* 动态路由 
```
function News(props){
    // 动态路由的传参在 props.match.params 中
    return (
        <div>
            <h1>新闻页，新闻id：{props.match.params.id}</h1>
        </div>
    )
}

<Link to="/news/456789">新闻页面</Link>

<Route path="/news/:id" component={News}></Route>

```

> 重定向 当我们访问某个组件时 如果有重定向组件 那么就会修改页面路径 使页面内容显示为所定向的内容 `Redirect`

```
function LoginInfo(props) {
    // 通过 控制状态值跳转不同的路由
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

<Route exact path="/logininfo" component={LoginInfo}></Route>
```

> Switch 组件内部的Route只匹配一次 只要匹配到了 剩余的路由规则将不再匹配 例如
```
<Route exact path="/abc" component={()=>(<h1>abc1</h1>)}></Route>
<Route exact path="/abc" component={()=>(<h1>abc2</h1>)}></Route>
{/* 这里只匹配第一个abc路由 */}
```
> 使用js跳转
```
// 指定路由跳转
this.props.history.push('/',{ state: 111 })
this.props.history.replace('/',{ state: 111 })
// 前进
this.props.history.go(1); 
this.props.history.goForWard();
// 后退
this.props.history.go(-1);
this.props.history.goBack();
```
## redux 数据管理（状态管理） 用于中大型项目 数据比较庞大 组件之间交互比较多的情况下使用（如果你不知道是否需要redux 那么你就不需要他！）redux只是一种状态管理的解决方案

* `store` 数据仓库 保存数据的地方

* `state` 包含了整个应用所需要的数据`state`中的数据不能直接修改 数据仓库的所有数据都放在一个`state`中

* `action` 一个动作 触发数据改变的方法 

* `dispatch` 将动作触发成方法

* `reducer` 一个函数 通过获取动作 改变数据 生成一个新的状态`state` 从而改变页面

> redux应用步骤 首先在redux中引入createStore

* `createStore` 创建仓库
```
// 创建reducer函数 初始化数据 修改状态值
const reducer = function(state={num},action) {
    switch (action.type) {
        // 判断动作的类型
        case "add":
            state.num++;
            break;
        default:
            state.num--;
            break;
    }
    // 注意解构 防止旧版本不会触发监听
    return {...state}; 
}
// 创建store仓库
const store = createStore(reducer);
```

*  调用`dispatch`动作触发 `store.dispatch({type: "add"})`

* `subscribe` 监听状态变化重新渲染页面 
```
store.subscribe(()=>{
    ReactDOM.render(<Counter/>,document.querySelector("#root"))
})
```

## react-redux react的redux库 首先引入必要的依赖
```
import { createStore } from "redux"
import { Provider, connect } from 'react-redux'
```
* `Provider`组件 自动将`store`里的`state`和组件进行关联
* `connect`将组件和数据和方法进行连接 
## react-redux的创建仓库步骤
* 第一步同`redux` 创建仓库 `createStore` 以及`reducer`
```
function reducer(state={ num:0 },action) {
    switch (action.type) {
        case 'add':
            state.num++
            break;
    
        default:
            break;
    }
    return { ...state };
}
const store = createStore(reducer);
```

* 映射状态(`state`)和方法(函数)
```
const addAction = {
    type: "add"
}
// 将store的state映射到组件里的props
function mapStateToProps(state){
    return {
        value: state.num
    }
}
// 将store中的dispatch映射到组件的props里 实现方法的共享
function mapDispatchToProps(dispatch) {
    return {
        onAddClick: ()=>{ dispatch(addAction) }
    }
}
```

* 将两个方法 将数据仓库的`state`和修改`state`的方法映射到组件上 形成新的组件
```
class Counter extends React.Component{
    render() {
        const { value, onAddClick } = this.props;
        return (
            <div>
                <h1>计数的数量：{ value }</h1>
                <button onClick={ onAddClick }>数字+1</button>
            </div>
        )
    }
}
const App = connect (
    mapStateToProps,
    mapDispatchToProps
)(Counter)
```

* 最后修改`ReactDOM`的`render`
```
ReactDOM.render(
    <Provider store={store}>
        <App></App>
    </Provider>,
    document.querySelector("#root")
 )
```
> 另一种方式 对`reducer`中的`action`和`state`进行封装
```
// 对action进行一次封装
const ActionFnObj = {
    add:function(state,action){
        state.num++;
        return {...state}
    }
}
// 对state的值进行初始化
const StateObj = {
    num: 0
}
function reducer(state = StateObj, action) {
    // 判断是否为第一次进入 reducer 第一次action的type是redux版本号等内容
    if(ActionFnObj[action.type]){
        state = ActionFnObj[action.type](state, action)
        return { ...state };
    }else {
        return { ...state };
    }
}

```
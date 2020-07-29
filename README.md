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

## ui库的使用 例如ant design
* 安装`antd`和`babel-plugin-import `
* 暴露配置 `eject` `npm run eject -y` 注意如果配置了git但是有内容没有提交到git 无法进行该操作 要先提交
* 配置`babel` 在`package.json`中找到`babel` 然后在里面`presets`同级增加 此时就不需要加载样式文件
```
"plugins": [
      ["import", { "libraryName": "antd", "style": "css" }] 
    ]
```
* 引入需要使用的组件 例如`Button`等 直接使用

## 使用`express`模拟接口
* `npm init`生成`package.json`文件
* 安装`express`依赖 建议使用`cnpm`或者`yarn` `yarn add express --save` 安装`axios`依赖
* 新建`index.js` 内容如下
```
const express = require("express");
const axios = require("axios")
const app = express();
app.get('/api/newsdata', async (req,res)=>{
    // 解决ajax跨域
    res.append('Access-Control-Allow-Origin', "*");
    res.append('Access-Control-Allow-content-type', "*")
    // 请求头条数据
    let result = await axios.get("https://c.m.163.com/ug/api/wuhan/app/data/list-total?t=318929278640")
    let data = result.data;
    res.send(data);
    res.json({ name: "老马" })
})
app.listen(8080, ()=>{
    console.log("http://localhost:8080/api/newsdata");
})
```
* `node`切换到这个目录 执行`node index.js`

## react hook 可以提供大部分类组件的功能 也可以自定义hook
> 增强函数组件的功能 在没有hook的时候: 没有状态 没有生命周期 没有引用
> 在hook里的提供的方法都是use开头的

### `useState` 将函数组件的普通变量声明称react的state状态
```
// 初始化状态和修改状态的方法
const [a,setA] = useState(0); // 给a赋值0
// 使用和修改
{a} // 直接使用
setA(a+1) // 修改
// setA仍然是异步的 如果想取到改变后的数据
setA(()=>{
    console.log(a+1);
    return a+1;
})
```

### `useRef` hook中的ref
```
// 初始化ref  
const p1 = useRef();
// 使用ref
p1.current.style.background="red"
```

### `useEffect` 生命周期方法
* 相当于componentDidMount、componentDidUpdate 和 componentWillUnmount 三个状态
* 副作用 （DOM操作 数据请求 组件更新）
* useEffect在组件函数内部执行 可以获取state和props 采用闭包的形式
* 无阻塞更新
* useEffect(回调函数, 数组（可不写）) 两个参数 第二个参数控制在状态改变时监听那个状态 例子 
```
// 只监听obj这个状态 
useEffect(()=>{
    console.log(obj)
}, [obj])
```
* 可以写多个useEffect()

### 父子组件传值 `createContext` `useContext`
* 父组件 
```
import { createContext } from 'react';
export default createContext();
```
* 子组件
```
import React, {useContext} from 'react'
import MyContent from './MyContent' // 父组件
export default ()=>{
    let count = useContext(MyContent);
    return (
        <h3>
            {count}
        </h3>
    )
}
```
* 使用
```
import MyContent from './component/MyContent' // 父组件
import ChildContext from './component/ChildContext' // 子组件
<MyContent.Provider value={a}>
    <ChildContext/>
</MyContent.Provider>
```

### `useMemo` 生命周期
* 相当于 `shouldComponentUpdate` 类似作用 在渲染过程中避免重复渲染的问题 当状态或者父组件传来的属性发生改变时 更新组件
* `useMemo` 用的是`Memoization`来提高性能的
* `Memoization` 是`javascript`的缓存技术
* 如果我们有CPU密集型操作 我们可以通过将初始操作的结果缓存在缓存中来优化使用 如果操作必然会再次执行 我们不再麻烦两次使用我们的CPU 因为相同的结果存储在某个地方 我们只是简单的返回结果 这个是以空间换速度 所以最好确定你是否值得这么做 有些场景很有必要使用 
* `useMemo()` 是一个函数 两个参数 第一个是函数 第二个是数组
* `useMemo(()=>{}, [可以不写])` 参数类似`useEffect` 如果第二个参数和`useEffect`一样的话 会在 `useEffect` 之前执行
> 使用方式
```
let res = useMemo(()=>{
    return {count, num}; // 监控改变的状态
},[count]) // 通过第二个参数控制哪个状态改变时页面组件更新 如果是空数组就不会改变 如果没有默认是所有状态
// 例如
<h3>count{res.count}----num{res.num}</h3>
<button onClick={()=>{
    setCount(count+1)
}}>改变count</button> {/* 点击这个按钮 组件会更新 */}
<button onClick={()=>{
    setNum(num+1)
}}>改变num</button> {/* 点击这个按钮 状态会改变但是组件不会更新 */}
```

### `useCallback` 避免组件重复渲染 提高性能(useMemo)
* 控制组件什么时候更新
* 同样用到缓存计数 和`useMemo`不同的是 `useCallback` 是一个函数 是个函数就可以执行 
* `useCallback()` 有两个参数 第一个参数是函数 第二个是数组
* `const callback = useCallback(()=>{},[])`;
* 可以直接`callBack()`执行
> 使用方式 
```
const [count, setCount] = useState(0)
let callback = useCallback(()=>{
    console.log(count);
    return count;
},[count]) // 最好写第二个参数 不然调用的时候会一直不改变
<h3>{callback()}</h3>{/* 使用时直接执行方法 */}
```

### `useImperativeHandle`
* 可以让你在使用`ref`时自定义暴露给父组件的实例值 在大多数情况下 应当避免使用`ref`这样的命令代码 `useImperativeHandle` 应当与 `forwardRef` 一起
#### `forwardRef` 使用方式
```
import React, { forwardRef, useRef } from 'react';
const Forward = forwardRef((props, ref)=>{
    return (
        <>
        {/* ref 传递到子组件上 */}
        <h3 ref={ref}>123</h3>
        <h4>456</h4>
        </>
    )
})
export default (()=>{
    const h3El = useRef(null);
    return (
        <>
        <Forward ref={h3El}/>
        <button onClick={()=>{
            // 父组件直接使用heEl即可 就是上面哪个h3 
            // 在这里还有一层current
            console.log(h3El)
        }}>获取子组件dom</button>
        </>
    )
});
```
### `useImperativeHandle(ref(传递来的), ()=>{}, [])`
```
// 第一个参数 ref 
// 第二个参数 函数的return 暴露给父组件的属性还有方法
// 第三个参数 监控哪个状态改变时重新传入ref 如果不写 任何状态改变都会传入 最好第二个参数return有的状态在第三个参数中都有
```
### `useLayoutEffect` 和 `useEffect` 作用一样 在组件生成过程中可以做一些操作

> 不同点 
```
1. 执行时间不同 useEffect 在componentDidMount后执行 useLayoutEffect 在浏览器执行绘制之前执行（会阻塞组件挂载 慎用）useLayoutEffect 会在 useEffect 之前执行
```
### `useReducer` 可以和`useContext`结合 实现和redux类似的作用
* 和redux中的reducer一样 reducer就是一个函数
* `useReducer()` 是一个函数 第一个参数reducer 第二个参数初始值 第三个参数init
* `uerReducer()` 返回值是个数组 第一个是state 第二个是dispatch
* `const [state, dispatch] = useReducer(reducer,初始值)`
> `useReducer`和`useContext`结合 实现和redux类似的作用
```
// 定义reducer和context
import React, { createContext, useReducer } from 'react';

// reducer和context实现redux类似功能
export const MyCountext = createContext();
// reducer 修改状态的方法
const reducer = (state, action) => {
    {/* 通过action的type不同执行不同操作 */}
    ... 
}
// state 状态值
const data = {name:"zhangsan", age:19}

export const Reducer =  (props) => {
    let [state, dispatch] = useReducer(reducer, data)
    return (
        <MyCountext.Provider value={{state, dispatch}}>
            {props.children}
        </MyCountext.Provider>
    )
}
// 使用reducer
import { MyCountext } from './Reducer'
let {state, dispatch} = useContext(MyCountext)
// 属性 {state.name}
// 修改state的方法 dispatch({type:"***", 其他属性})
```



## 自定义hook
> 自定义hook 和普通函数没有区别 都是一些函数的封装 方便使用 注意
* 自定义hook 必须以use开头
* 自定义hook 可以使用普通hook(useState, useEffect......)来封装

```
import React,{useState} from 'react';
// 自定义hook
const useCus = (val, num) => {
    let [count,setCount] = useState(val);
    const add = () => {
        setCount(count+num)
    }
    return {count,add}
}

export default ()=>{
    let {count,add} = useCus(10,2)
    return (
        <>
        <h1>{count}</h1>
        <button onClick={()=>{
            add();
        }} >加2</button>
        </>
    )
}
```
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
// 有状态组件 有state值
// class TimeDate extends React.Component {
//   constructor() {
//     super();
//     this.state = {};
//   }
//   render() {
//     return (
//       <div>
//         <h1>现在时间是{ this.props.time }</h1>
//       </div>
//     )
//   }
// }
// 无状态组件 只有一个props 没有state
// function TimeDate(props) {
//   return (
//     <div>
//       <h1>现在时间是{ props.time }</h1>
//     </div>
//   )
// }
// setInterval(() => {
//   ReactDOM.render(
//     <TimeDate time={ new Date().toLocaleTimeString() } />,
//     document.getElementById('root')
//   );;
// }, 1000);
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

// {  } 中可以放的内容 dom元素（jsx语法） 常量 变量 表达式 返回值为前几个的方法或者箭头函数 style 中使用对象
// className 样式的类名 因为class在js中是关键词
let time = new Date().toLocaleTimeString();
let str = "当前时间是";
let element =(
  <div>
    <h1>helloworld</h1>
    <h2>{ str + time }</h2>
  </div>
)
let person1 = true;
let element2 = (
  <div>
    { element }
    <h1>今天是否隔离</h1>
    <h2>{ person1 ? "隔离" : "不隔离" }</h2>
  </div>
)
let logo = "https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png";
let element3 = (
  <div className="bgGray">
    {/* 假设如果要写多个样式 className ={ ['a','b'].join(" ") } 注意前后顺序*/}
    { element2 }
    <img style={{ width: "300px" }} src={ logo } alt="百度的logo" />
    {/* style中的键使用首字母小写的驼峰命名 值字符型加引号 数值型不加 */}
  </div>
)

ReactDOM.render(element3, document.querySelector("#root"))
import React from 'react'
import ReactDOM from 'react-dom'
import './newindex.css'
import jsonData from './feiyan.json'
import drawCharts from './chartMap.js'
import SearchCom from './component/SearchComponent'
// 父传子 props 子传父 调用父组件方法
// class ParentCom extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             isActive: true
//         }
//     }
//     render() {
//         return (
//             <div>
//                 <button onClick={ this.changeShow } >控制子元素显示</button>
//                 <Children isActive={ this.state.isActive }/>
//             </div>
//         )
//     }
//     changeShow = () => {
//         this.setState({
//             isActive: !this.state.isActive
//         })
//     }
// }
// class Children extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {  }
//     }
//     render() {
//         let strClass = null;
//         if(this.props.isActive) {
//             strClass = " active"
//         }else {
//             strClass = ""
//         }
//         return (
//             <div className={ "content" + strClass }>
//                 <h1>我是子元素</h1>
//             </div>
//         )
//     }
// }


// class ParentCom extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             childData: null
//         }
//     }
//     render() {
//         return (
//             <div>
//                 <h1>子元素传递给父元素的数据{ this.state.childData }</h1>
//                 <ChildCom setChildData={ this.setChildData }/>
//             </div>
//         )
//     }
//     setChildData = (data) => {
//         this.setState({
//             childData: data
//         })
//     }
// }

// class ChildCom extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             msg: "helloWorld"
//         }
//     }
//     render() {
//         return (
//             <div>
//                 <button onClick={ () => { this.props.setChildData( this.state.msg ) } }>传递给父组件</button>
//             </div>
//         )
//     }
// }


// 事件的值必须是一个方法或者是一个箭头函数
// 当有传参的时候 需要这样写 onClick={ () => { 方法(参数(一个及一个以上)) } }
// class ParentCom extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {

//         }
//     }
//     render() {
//         return (
//             <div>
//                 <form action="http://www.baidu.com">
//                     <button onClick={this.parentEvent}>点击提交</button>
//                     <div className="child">
//                     <h1>helloWorld</h1>
//                 </div>
//                 </form>
//             </div>
//         )
//     }
//     parentEvent = (e) => {
//         e.preventDefault() // 阻止默认事件
//         console.log(e)
//     }
// }


// function UserGreet(props) {
//     return (<h1>欢迎登陆</h1>)
// }
// function UserLogin(props) {
//     return (<h1>请先登录</h1>)
// }
// class ParentCom extends React.Component {
//     constructor(props) { 
//         super(props)
//         this.state = {
//             isLogin: false
//         }
//     }
//     render() {
//         // let element =null
//         // if(this.state.isLogin) {
//         //     element = <UserGreet/>
//         // }else {
//         //     element = (
//         //         <div>
//         //             <UserLogin/>
//         //             <button onClick={ this.login }>登录</button>
//         //         </div>
//         //     )
//         // }
//         return (
//             <div>
//                 <h1>这是头部</h1>
//                 {/* { element } */}
//                 {/* 三元运算符 */}
//                 { this.state.isLogin ? <UserGreet/> : <UserLogin/> }
//             </div>
//         )
//     }
//     login = () => {
//         this.setState({
//             isLogin: !this.state.isLogin
//         })
//     }
// }
// ReactDOM.render(<ParentCom/>, document.querySelector("#root"))

// let arr = [ "小明", "小白", "小黑" ]
// function ListItem(props) {
//     return <li>{ props.item }</li>
// }
// class ListItem extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { }
//     }
//     render() {
//         return (
//             <li onClick={ () => { this.clickEvent(this.props.index + 1, this.props.title) } }>
//                 <h3>{ this.props.index + 1 }: { this.props.title }</h3>
//                 <p>{ this.props.content }</p>
//             </li>
//         )
//     }
//     clickEvent = (index, title) => {
//         alert(`${ index }: ${ title }`)
//     }
// }
// class Welcome extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             list: [
//                 {
//                     title: "第一节的标题",
//                     content: "这是第一节的内容"
//                 },
//                 {
//                     title: "第二节的标题",
//                     content: "这是第二节的内容"
//                 },
//                 {
//                     title: "第三节的标题",
//                     content: "这是第三节的内容"
//                 }
//             ]
//         }
//     }
//     render() {
//         return (
//             <div>
//                 <ul>
//                     { this.state.list.map( (item, index) => {
//                         return <ListItem { ...item } index={ index } key={ index } />
//                     } ) }
//                 </ul>
//             </div>
//         )
//     }
// }
// ReactDOM.render(<Welcome/>, document.querySelector("#root"));

let proviencesArr = [];
let proviencesObj = {}
jsonData.data.areaTree.children.forEach((item, i) => {
    if(item.name) {
        proviencesArr.push({ 
            province: item.name, // 地市
            nowConfirm: item.total.confirm - item.total.dead - item.total.heal || 0,
            confirm: item.total.confirm || 0, // 确诊
            dead: item.total.dead || 0, // 死亡
            heal: item.total.heal || 0 // 治愈
        })
    }else {
        proviencesArr.push({ 
            province: "", // 地市
            nowConfirm: 0,
            confirm: 0, // 确诊
            dead: 0, // 死亡
            heal: 0 // 治愈
        })
    }
})
proviencesArr.sort((a, b, c = "nowConfirm") => {
    return b[c] - a[c];
})
proviencesArr.forEach((item) => {
    proviencesObj[item.province] = {
        nowConfirm: item.confirm - item.dead - item.heal || 0,
        confirm: item.confirm || 0, // 确诊
        dead: item.dead || 0, // 死亡
        heal: item.heal || 0 // 治愈
    }
});
// console.log(proviencesArr);
// console.log(proviencesObj);
class Feiyan extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dragLine: null,
            target: null,
            draging: null
        }
    }
    componentDidMount() {
        
        drawCharts(proviencesArr, "现有确诊")
    }
    render() {
        return (
            <div style={{ width: "750px", margin: "0 auto" }}>
                <div id="chartmap"></div>
                <h1>中国病例</h1>
                <SearchCom proviencesObj={ proviencesObj } />
                <ul onDragStart={this.listDragStart} onDragOver={this.listDragOver}
                onDragEnd={this.listDragEnd} ref="parentUl">
                    { proviencesArr.map(item => {
                        return (<li key={ item.province } draggable="true">
                            <span>{ item.province }</span>
                            <span>现有确诊：{ item.nowConfirm }</span>
                            <span>确诊：{ item.confirm }</span>
                            <span>死亡：{ item.dead }</span>
                            <span>治愈：{ item.heal }</span>
                        </li>)
                    }) }
                </ul>
            </div>
        )
    }
    listDragStart = (e) => {
        this.setState({
            dragLine: e.target
        })
    }
    listDragOver = (e) => {
        this.setState({
            target: e.target
        },() => {
            if(this.state.target.parentNode.nodeName === "LI" && this.state.target.parentNode !== this.state.draging){
                if(this._index(this.state.draging)<this._index(this.state.target.parentNode)){
                    this.state.target.parentNode.insetBefore(this.state.draging, this.state.target.nextSibling);
                }else {
                    this.state.target.parentNode.insetBefore(this.state.draging, this.target)
                }
            }
        })
    }
    listDragEnd = () => {
        let currentNodes = Array.from(this.refs.parentUl.childNodes);
        let data = currentNodes.map((i, index) => {
            let item = proviencesArr.find(c => i.innerText.indexOf(c.province)>-1);
            return item
        })
        console.log(data)
    }
    _index= (el) => {
        let domData = Array.from(this.refs.parentUl.childNodes);
        return domData.findIndex(i=>i.innerText===el.innerText);
    }
}

ReactDOM.render(<Feiyan/>, document.querySelector("#root"))
import React from 'react'
import ReactDOM from 'react-dom'
class ParentCom extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
    render() {
        return (
            <div>
                <h1>组件插槽</h1>
                {
                    this.props.children
                }
                <ChildCom>
                    <h1 data-position="head">这是放置在头部的内容</h1>
                    <h1 data-position="main">这是主要内容</h1>
                    <h1 data-position="foot">这是放置在尾部的内容</h1>
                </ChildCom>
            </div>
        )
    }
}
class RootCom extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            arr: [1, 2, 3]
        }
    }
    render() {
        return (
            <ParentCom>
                <h2 data-name="a" data-index={ this.state.arr[0] }>子组件1</h2>
                <h2 data-name="b" data-index={ this.state.arr[1] }>子组件2</h2>
                <h2 data-name="c" data-index={ this.state.arr[2] }>子组件3</h2>
            </ParentCom>
        )
    }
}
class ChildCom extends React.Component {
    render() {
        let headerCom, mainCom, footerCom;
        this.props.children.forEach(item=>{
            switch (item.props["data-position"]) {
                case 'head':
                    headerCom = item;
                    break;
                case 'main':
                    mainCom = item;
                    break;
                default:
                    footerCom = item;
            }
        })
        return (
            <div>
                <div className="header">
                    {headerCom}
                </div>
                <div className="main">
                    {mainCom}
                </div>
                <div className="footer">
                    {footerCom}
                </div>
            </div>
        )
    }
}
ReactDOM.render(
    <RootCom/>,
    document.querySelector("#root")
)
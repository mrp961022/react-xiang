import React, {Component} from 'react';
import ReactDOM from 'react-dom';
class ComLife extends Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: "hello world"
        }
        console.log("constructor构造函数")
    }
    componentWillMount() {
        console.log("将要渲染")
    }
    componentDidMount() {
        console.log("渲染完毕")
    }
    componentWillReceiveProps() {
        console.log("组件将要接收新的状态state和props")
    }
    shouldComponentUpdate() {
        // 进行更新的判断 返回值是个布尔值 true更新 false不更新
        console.log("进行判断是否要更新")
        return true;
    }
    componentWillUpdate() {
        console.log("组件将要更新")
    }
    componentDidUpdate() {
        console.log("组件更新完毕")
    }
    componentWillUnmount() {
        console.log("组件将要移除")
    }
    render() {
        console.log("render函数")
        return (
            <div>
                <h1>{ this.state.msg }</h1>
                <button onClick={ this.changeMsg }>组件更新</button>
            </div>
        )
    }
    changeMsg = () => {
        this.setState({
            msg: "修改后的msg"
        })
    }
}
class ParentDom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isShow: true
        }
    }
    render() {
        if(this.state.isShow) {
            return (
                <div>
                    <button onClick={ this.removeComponent }>移除组件</button>
                    <ComLife/>
                </div>
            )
        }else {
            return <h1>组件已经移除</h1>
        }
    }
    removeComponent = () => {
        this.setState({
            isShow: false
        })
    }
}
ReactDOM.render(<ParentDom/>, document.querySelector("#root"))
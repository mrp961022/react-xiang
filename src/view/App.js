import React from 'react';
import { connect } from 'react-redux'
import { Button } from 'antd-mobile'
class Counter extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            allData:[]
        }
    }
    render() {
        return (
            <div>
                <Button onClick={ this.goDataPage }>跳转location</Button>
            </div>
        )
    }
    goDataPage = () => {
        this.props.history.push('/location',{ state: 111 })
    }
}
const addAction = {
    type: "add"
}
function mapStateToProps(state){
    return {
        value: state.num
    }
}
// 将修改state数据的方法映射到props 默认会传入store里的dispatch方法
function mapDispatchToProps(dispatch) {
    return {
        onAddClick: ()=>{ dispatch(addAction) }
    }
}

// 将上面两个方法 将数据仓库的state和修改state的方法映射到组件上 形成新的组件
const App = connect (
    mapStateToProps,
    mapDispatchToProps
)(Counter)

export default App;
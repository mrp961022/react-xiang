import React, { Component } from 'react';
import { connect } from 'react-redux'
import { List } from 'antd-mobile'
import fns from '../store/asyncMethods'
const Item = List.Item;
const Brief = Item.Brief
class Location extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allLatLon: []
        }
    }
    render() {
        const {allData,getTimu} = this.props
        return (
            <div>
                <button onClick={getTimu}>点击</button>
                <h1>题目：{'题目'}</h1>
                <div className="options">
                    { allData.map((item,index)=>{
                        return (
                            <List renderHeader={() => '该地市的经纬度'} key={index} className="latlon-list" style={{backgroundColor:`rgba(${item.color})`}}>
                                { item.latAndLong.map((childItem,childIndex)=>{
                                    return (
                                        <Item key={childIndex}>
                                           <Brief>经纬度：</Brief> {childItem.join(' ')}
                                        </Item>
                                    )
                                }) }
                            </List>
                        )
                    }) }
                </div>
            </div>
        );
    }
}
const addAction = {
    type: "add"
}
function mapStateToProps(state){
    return {
        value: state.num,
        allData: state.timuList
    }
}
// 将修改state数据的方法映射到props 默认会传入store里的dispatch方法
function mapDispatchToProps(dispatch) {
    return {
        onAddClick: ()=>{ dispatch(addAction) },
        getTimu:async ()=>{ 
            let list = await fns.getAsyncData()
            dispatch({type: "setTimu",content: list})
        }
    }
}

// 将上面两个方法 将数据仓库的state和修改state的方法映射到组件上 形成新的组件
const Content = connect (
    mapStateToProps,
    mapDispatchToProps
)(Location)

export default Content;
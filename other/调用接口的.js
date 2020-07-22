import React, { Component } from 'react';
import { List } from 'antd-mobile'
import axios from "axios";
const Item = List.Item;
const Brief = Item.Brief;
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            allLatLon:[]
        }
    }
    async componentDidMount() {
        let res = await axios.get('http://localhost:8080/api/something')
        let allData = res.data.split('(')[1].split(')')[0];
        let newAllData = JSON.parse(JSON.parse(allData).contours)
        newAllData.forEach(item=>{
            item.latAndLong = item.latAndLong.slice(0,10)
        })
        this.setState({
            allLatLon: newAllData
        })
    }
    render() {
        return (
            <div>
                {/* <List renderHeader={() => 'Basic Style'} className="my-list">
                    <Item extra={'extra content'}>
                        Title <Brief>subtitle</Brief>
                    </Item>
                </List> */}
                { this.state.allLatLon.map((item,index)=>{
                    return (
                        <List renderHeader={()=>"title " + (index+1)} key={index}>
                            {
                                item.latAndLong.map((childItem, childIndex)=>{
                                    return (
                                        <Item thumb={ childIndex===0?"https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png":"" } extra="10:30" align="top"  key={childIndex}>
                                            经纬度：<Brief>{childItem.join(' ')}</Brief>
                                        </Item>
                                    )
                                })
                            }
                        </List>
                    )
                }) }
            </div>
        );
    }
}

export default App;
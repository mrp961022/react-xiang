import React from 'react';
import './assets/css/style.css';
import axios from 'axios'
import NewsCom from './component/newscom'
import MapCom from './component/mapcom'
import XCCom from './component/xccom'
import GZCom from './component/gzcom'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newData: null,
      navList: [ "疫情地图", "实时播报", "广州疫情", "直击现场" ],
      tabIndex: 0,
      barStyle: {
        left: "22px"
      },
      contentStyle: {
        transform: "translate(0,0)"
      }
    }
  }
  // 加上UNSAFE_不报警告
  async UNSAFE_componentWillMount(){
    let res = await axios.get('http://localhost:8080/api/newsdata')
    let allTree = res.data.data.areaTree;
    let newTree = allTree.filter(item=>{
      return item.name === "中国"
    })
    this.setState({
      newData: newTree[0]
    },()=>{
      // console.log(this.state.newData)
    })
  }
  render() {
    return (
      <div className="app">
        <div className="nav">
          { /* navList的jsx列表 */ }
          { this.state.navList.map((item,index)=>{
            if(index === this.state.tabIndex) {
              return(<div onClick={ ()=>{this.clickTabEvent(index) } } className="navItem active" key={ index }>{ item }</div>)
            }else {
              return(<div onClick={ ()=>{this.clickTabEvent(index) } } className="navItem" key={ index }>{ item }</div>)
            }
          }) }
          <div className="bar" style={this.state.barStyle}></div>
        </div>
        <div className="content" style={this.state.contentStyle}>
          <MapCom/>
          <NewsCom/>
          <GZCom/>
          <XCCom/>
        </div>
      </div>
    )
  }
  clickTabEvent = (index) => {
    this.setState({
      tabIndex: index,
      barStyle: {
        left: (index * 88 + 22) + "px"
      },
      contentStyle: {
        transform: `translate(-${ index*375 }px, 0)`
      }
    })
  }
}

export default App;

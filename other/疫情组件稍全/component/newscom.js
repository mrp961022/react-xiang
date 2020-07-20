import React from 'react';
import axios from 'axios'
import bannerImg from '../assets/img/banner.png'
class NewsCom extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            allUrl:[]
        }
    }
    async UNSAFE_componentWillMount() {
        let res = await axios.get("http://localhost:8080/api/news");
        this.setState({
            allUrl: res.data.data.LocalNews.data.rows.first
        },()=>{
            console.log(this.state.allUrl);
        })
    }
    render() {
        return (
            <div className="contentItem new">
                <div className="banner">
                    <img src={ bannerImg } alt="新闻banner"/>
                    <div>
                        <h1>疫情追踪</h1>
                    </div>
                    <div className="newContent">
                        <div className="line"></div>
                        <div className="newList">
                            { this.state.allUrl.map((item, index)=>{
                                return (
                                    <div className="newListItem" key={index}>
                                        <div className="time">{item.time}</div>
                                        <div className="desc">{item.title}</div>

                                    </div>
                                )
                            }) }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default NewsCom;
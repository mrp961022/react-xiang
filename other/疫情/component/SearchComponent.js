import React from 'react'
export default class SearchForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            county: "",
            result: null
        }
    }
    render() {
        return (
            <div>
                <input onChange={ this.changeCounty } type="text" placeholder="请输入查询的省份" onKeyDown={ this.searchEvent } value={ this.state.county }></input>
                <div>
                    <h2>查询结果：</h2>
                    <div>
                        { this.state.result }
                    </div>
                </div>
            </div>
        )
    }
    changeCounty = (e) => {
        this.setState({
            county: e.target.value
        })
    }
    searchEvent = (e) => {
        if(e.keyCode === 13){
            // 回车的keycode
            if(this.props.proviencesObj[this.state.county] ===undefined ){
                this.setState({
                    result: <h2>没有该省份</h2>
                })
            }else {
                this.setState({
                    result: (
                        <div>
                            <div>现有确诊人数: {this.props.proviencesObj[this.state.county].nowConfirm}</div>
                            <div>累计确诊人数: {this.props.proviencesObj[this.state.county].confirm}</div>
                            <div>死亡人数: {this.props.proviencesObj[this.state.county].dead}</div>
                            <div>治愈人数: {this.props.proviencesObj[this.state.county].heal}</div>
                        </div>
                    ) 
                })
            }
        }
    }
}

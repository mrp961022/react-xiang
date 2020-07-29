import axios from 'axios'
const Host = "http://localhost:8080"
// 进行异步请求的接口
export default{
    async getAsyncData(start=0, end) {
        let res = await axios.get(`${ Host }/api/something`)
        let allData = res.data.split('(')[1].split(')')[0];
        let newAllData = JSON.parse(JSON.parse(allData).contours)
        console.log(newAllData)
        newAllData.forEach(item=>{
            item.latAndLong = item.latAndLong.slice(0,3)
        })
        return newAllData.slice(start, end||newAllData.length);
    }
}

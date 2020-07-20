import echarts from 'echarts'
import chinaJson from './china.json'
export default function drawCharts(value,whichTab){
    let switchWhich = "";
    switch (whichTab) {
        case "累计确诊":
            switchWhich = "confirm";
            break;
        case "死亡":
            switchWhich = "dead";
            break;
        case "治愈":
            switchWhich = "heal";
            break;
        default:
            whichTab = "现有确诊";
            switchWhich = "nowConfirm";
            break;
    }
    let newVal = value.map(item=>{
        let newItem = {
            name: item.province,
            value: item[switchWhich]
        }
        return newItem
    })
    chinaJson.features.forEach(item => {
        if(item.properties.name.indexOf('省')>-1 || item.properties.name.indexOf('市')>-1) {
            item.properties.name = item.properties.name.substr(0,item.properties.name.length-1);
        }else if(item.properties.name.indexOf('自治区')>-1) {
            if(item.properties.name.indexOf("内蒙古")>-1){
                item.properties.name = "内蒙古"
            }else {
                item.properties.name = item.properties.name.substr(0, 2);
            }
        }else if(item.properties.name.indexOf('特别行政区')>-1){
            item.properties.name = item.properties.name.substr(0, item.properties.name.length-5);
        }
    })
    echarts.registerMap('china', chinaJson);
    const mydata = newVal;
    // const mydata = [  
    //     {name: '北京',value: '600' },{name: '天津',value: Math.floor(Math.random()*600) },  
    //     {name: '上海',value: Math.floor(Math.random()*600) },{name: '重庆',value: Math.floor(Math.random()*600) },  
    //     {name: '河北',value: Math.floor(Math.random()*600) },{name: '河南',value: Math.floor(Math.random()*600) },  
    //     {name: '云南',value: Math.floor(Math.random()*600) },{name: '辽宁',value: Math.floor(Math.random()*600) },  
    //     {name: '黑龙江',value: Math.floor(Math.random()*600) },{name: '湖南',value: Math.floor(Math.random()*600) },  
    //     {name: '安徽',value: Math.floor(Math.random()*600) },{name: '山东',value: Math.floor(Math.random()*600) },  
    //     {name: '新疆',value: Math.floor(Math.random()*600) },{name: '江苏',value: Math.floor(Math.random()*600) },  
    //     {name: '浙江',value: Math.floor(Math.random()*600) },{name: '江西',value: Math.floor(Math.random()*600) },  
    //     {name: '湖北',value: Math.floor(Math.random()*600) },{name: '广西',value: Math.floor(Math.random()*600) },  
    //     {name: '甘肃',value: Math.floor(Math.random()*600) },{name: '山西',value: Math.floor(Math.random()*600) },  
    //     {name: '内蒙古',value: Math.floor(Math.random()*600) },{name: '陕西',value: Math.floor(Math.random()*600) },  
    //     {name: '吉林',value: Math.floor(Math.random()*600) },{name: '福建',value: Math.floor(Math.random()*600) },  
    //     {name: '贵州',value: Math.floor(Math.random()*600) },{name: '广东',value: Math.floor(Math.random()*600) },  
    //     {name: '青海',value: Math.floor(Math.random()*600) },{name: '西藏',value: Math.floor(Math.random()*600) },  
    //     {name: '四川',value: Math.floor(Math.random()*600) },{name: '宁夏',value: Math.floor(Math.random()*600) },  
    //     {name: '海南',value: Math.floor(Math.random()*600) },{name: '台湾',value: Math.floor(Math.random()*600) },  
    //     {name: '香港',value: Math.floor(Math.random()*600) },{name: '澳门',value: Math.floor(Math.random()*600) }  
    // ];
    const optionMap = {
        
        backgroundColor: '#FFFFFF',  
        title: {  
            text: '中国疫情地图 07-06',  
            subtext: '',  
            x:'center'  
        },  
        tooltip : {  
            trigger: 'item'  
        },  
        
        //左侧小导航图标
        visualMap: {  
            show : true,  
            x: 'left',  
            y: 'center',  
            // splitList: [   
            //     {start: 500, end:600},{start: 400, end: 500},  
            //     {start: 300, end: 400},{start: 200, end: 300},  
            //     {start: 100, end: 200},{start: 0, end: 100},  
            // ],  
            // color: ['#5475f5', '#9feaa5', '#85daef','#74e2ca', '#e6ac53', '#9fb5ea']  
            splitList: [   
                {start: 10000},{start: 1000, end:9999},
                {start: 500, end: 999}, {start: 100, end: 499},
                {start: 10, end: 99}, {start: 1, end: 9},
                {start: 0, end: 0},  
            ],  
            color: ['#7f1102','#bd1318', '#e74b44', '#ff8c71','#fdd39f', '#fff2cf', '#ffffff']  
        },  
        
        //配置属性
        series: [{
            name: whichTab,  
            type: 'map',  
            mapType: 'china',   
            roam: false,  
            label: {  
                normal: {  
                    show: true  //省份名称  
                },  
                emphasis: {  
                    show: false  
                }  
            },  
            data:mydata  //数据
        }]  
    };  
//初始化echarts实例
const myChart = echarts.init(document.getElementById('chartmap'));

//使用制定的配置项和数据显示图表
myChart.setOption(optionMap);
}
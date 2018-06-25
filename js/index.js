var vm = new Vue({
    el : '#app',
    data () {
        return {
            warnTop:0,
            isCollapse : false,
            type:'1',
            nowTime: '',
            warning:false,
            mask:false,
            caseBox:'',
            total_energy:'',
            thp:'',
            ldj:'',
            glj:'',
            xfj:'',
            num:0,
            warningContent:[
                {
                    type:'white',
                    content:"会议室一非工作时间用电"
                },
                {
                    type:'white',
                    content:"7楼走廊非工作时间用电"
                },
                {
                    type:'yellow',
                    content:"1号冷却塔压力过高"
                },
                {
                    type:'white',
                    content:"1#电梯非工作时间用电"
                },
                {
                    type:'white',
                    content:"会议室一非工作时间用电"
                },
                {
                    type:'yellow',
                    content:"7号冷却塔温度过高"
                },
                {
                    type:'white',
                    content:"7楼走廊非工作时间用电"
                },
                {
                    type:'white',
                    content:"1#电梯非工作时间用电"
                },
                {
                    type:'yellow',
                    content:"3号冷却塔压力过高"
                }
            ],
            freezing:{
                start:false,
                auto:false,
                warn:true
            },
            boiler:{
                start:false,
                auto:false,
                warn:false
            },
            freshAir:{
                start:true,
                auto:true,
                warn:false
            }
        };
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        dateFtt : function (fmt,date) {
            var o = {   
                "M+" : date.getMonth()+1,                 //月份   
                "d+" : date.getDate(),                    //日   
                "h+" : date.getHours(),                   //小时   
                "m+" : date.getMinutes(),                 //分   
                "s+" : date.getSeconds(),                 //秒   
                "q+" : Math.floor((date.getMonth()+3)/3), //季度   
                "S"  : date.getMilliseconds()             //毫秒   
            };   
            if(/(y+)/.test(fmt))   
            fmt=fmt.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));   
            for(var k in o)   
            if(new RegExp("("+ k +")").test(fmt))   
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));   
            return fmt;
        }
    },
    created () {
        setInterval(function(){
            vm.nowTime = vm.dateFtt("yyyy-MM-dd hh:mm:ss",new Date());
        },1000);
    },
    mounted () {
        var _this = this;
        var temChartId = document.getElementById("temChart");
        var temChart = echarts.init(temChartId);
        var xData = [];
        for(var i =0;i<24;i++){
            var testData1 = '2018/4/3 '+i;
            for(var j = 0;j<12;j++){
                var testData2 = testData1+':'+(j*5);
                xData.push(testData2)
            }
        }
        var temData = [];
        axios.post(IPCONFIG+'/console/showTq/')
        .then(function (res) {
            if(res.data.status == 200){
                res.data.data.forEach(function (e) {
                    temData.push(e.temp.replace('℃',''));
                })
                var option = {
                    tooltip: {
                        trigger: 'axis',
                        position: ['50%', '-100%'],
                        formatter: '{b0}<br>温度：{c0}℃'
                    },
                    grid:{
                    　　x:50
                    },
                    xAxis: {
                        show:false,
                        type: 'category',
                        data:xData,
                        axisPointer: {
                            type: 'shadow'
                        },
                        axisLabel:{
                            interval:0
                        }
                    },
                    yAxis: {
                        show:false,
                        type: 'value',
                        min: 10,
                        max: 30,          
                    },
                    series: [{
                        name:'温度',
                        type:'line',
                        smooth: 1,
                        showSymbol: false,
                        data: temData,
                        itemStyle : {
                            normal: {
                                width: 1,
                                lineStyle:{
                                    color:'#409eff'
                                }
                            }
                        },
                    }]
                };
                temChart.setOption(option, true);
                setInterval(function () {
                    axios.get(IPCONFIG+'/console/showTq/',{
                        params: {
                            timer: new Date().getTime()
                        },
                    })
                    .then(function (res) {
                        if(res.data.status==200){
                            temData.push(res.data.data.temp.replace('℃',''));
                            temChart.setOption({
                                series: [{
                                    data: temData
                                }]
                            });
                        }
                    })
                }, 300000);
            }
        })
        
        var forecastData = [];
        if(wea_h_hour!=undefined){
            wea_h_hour.forEach(function (e) {
                forecastData.push(e.temp)
            })
        }
        var tqDate = new Date().toLocaleDateString();
        var forecastId = document.getElementById("forecast");
        var forecastChart = echarts.init(forecastId);
        var forecast = {
            tooltip: {
                trigger: 'axis',
                position: ['50%', '50%'],
                formatter:tqDate+' {b0}<br>温度：{c0}℃'
            },
            grid:{
            　　x:40
            },
            xAxis: [
                {
                    show:false,
                    type: 'category',
                    data: ['00:00','01:00','02:00','03:00','04:00','05:00','06:00','07:00','08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00'],
                    axisPointer: {
                        type: 'shadow'
                    },
                    axisLabel:{
                        interval:0
                    }
                }
            ],
            yAxis: [
                {
                    show:false,
                    type: 'value',
                    min: 10,
                    max: 30,     
                }
            ],
            series: [
                {
                    name:'温度',
                    type:'line',
                    data:forecastData,
                    smooth: true
                }
            ]
        }
        forecastChart.setOption(forecast, true);
        document.getElementById("load").style.display = 'none';
    }
})
var vm = new Vue({
    el: "#app",
    data: {
        isCollapse : false,
        nowTime: '',
        type:'3-3',
        thp:'',
        contrast:false,
        loading:false,
        pickerOptions2: {
            disabledDate: function(time) {
                return time.getTime() > Date.now();
            },
            shortcuts: [{
              text: '最近一周',
              onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                end.setTime(end.getTime() - 3600 * 1000 * 24);
                picker.$emit('pick', [start, end]);
              }   
            }, {
              text: '最近一个月',
              onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                end.setTime(end.getTime() - 3600 * 1000 * 24);
                picker.$emit('pick', [start, end]);
            }
            }, {
              text: '最近三个月',
              onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                end.setTime(end.getTime() - 3600 * 1000 * 24);
                picker.$emit('pick', [start, end]);
              }
            }]
        },
        time2:[],
        time:[]
    },
    methods: {
        /* 获取当前时间然后转换 */
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
        },
        /* 获取Url后的锚点参数 */
        GetUrlPara : function () {
    　　　　var url = document.location.toString();
    　　　　var arrUrl = url.split("#");
    　　　　var para = arrUrl[1];
    　　　　return para;
        },
        //获取URL地址的参数的方法
        getQueryString : function (name,url1){
            var url = url1 || window.location.search.substr(1);
            var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
            var r = url.match(reg);
            if(r!=null)return decodeURI(r[2]); return '';
        },
        search : function () {
            
        }
    },
    //做一些初始化，实现函数自执行 
    created : function () {
        setInterval(function(){
            vm.nowTime = vm.dateFtt("yyyy-MM-dd hh:mm:ss",new Date());
        },1000);
    },
    //发起后端请求，拿数据
    mounted : function () {
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
        var testDate1 = [];
        var testDate2 = [];

        for(var i= 1;i<32;i++){
            testDate1.push('2017/12/'+i);
            testDate2.push('2018/1/'+i);
        }
        var analysisHeatId = document.getElementById("analysisHeat");
        var analysisHeatChart = echarts.init(analysisHeatId);
        axios.get(IPCONFIG+'/console/showWison/')
        .then(data => {
            console.log(data.data.data)
            var data12 = data.data.data.slice(0,775);
            var data1 = data.data.data.slice(1392,2165);

            console.log(data12)
            console.log(data1)
            var analysisHeat = {
                color: ['#5793f3', '#d14a61', '#675bba'],
            
                tooltip: {
                    trigger: 'none',
                    axisPointer: {
                        type: 'cross'
                    }
                },
                legend: {
                    data:['2017年12月 室内温度', '2018年1月 室内温度']
                },
                grid: {
                    top: 70,
                    bottom: 50
                },
                dataZoom: [
                    {
                        show: true,
                        realtime: true,
                        start: 30,
                        end: 70,
                        xAxisIndex: [0, 1]
                    },
                    {
                        type: 'inside',
                        realtime: true,
                        start: 30,
                        end: 70,
                        xAxisIndex: [0, 1]
                    }
                ],
                xAxis: [
                    {
                        type: 'category',
                        axisTick: {
                            alignWithLabel: true
                        },
                        axisLine: {
                            onZero: false,
                            lineStyle: {
                                color: '#d14a61'
                            }
                        },
                        axisPointer: {
                            label: {
                                formatter: function (params) {
                                    return '室内温度  ' + params.value
                                        + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                                }
                            }
                        },
                        data: data1.map(function(e){
                            return e.getTime;
                        })
                    },
                    {
                        type: 'category',
                        axisTick: {
                            alignWithLabel: true
                        },
                        axisLine: {
                            onZero: false,
                            lineStyle: {
                                color: '#5793f3'
                            }
                        },
                        axisPointer: {
                            label: {
                                formatter: function (params) {
                                    return '室内温度  ' + params.value
                                        + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                                }
                            }
                        },
                        data: data12.map(function(e){
                            return e.getTime;
                        })
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        min:15,
                        max:30
                    }
                ],
                series: [
                    {
                        name:'2017年12月 室内温度',
                        type:'line',
                        xAxisIndex: 1,
                        smooth: true,
                        data: data12.map(function(e){
                            return e.temp;
                        })
                    },
                    {
                        name:'2018年1月 室内温度',
                        type:'line',
                        smooth: true,
                        data: data1.map(function(e){
                            return e.temp;
                        })
                    }
                ]
            };
            analysisHeatChart.setOption(analysisHeat, true);
        });
        document.getElementById("load").style.display = 'none';
    }
    
});

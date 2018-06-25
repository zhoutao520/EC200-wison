var vm = new Vue({
    el: "#app",
    data: {
        isCollapse : false,
        nowTime: '',
        type:'3-2',
        thp:'',
        loading:false,
        options:[{
            value: '电',
            label: '电'
          }, {
            value: '供热量',
            label: '供热量'
          }, {
            value: '制冷量',
            label: '制冷量'
          }],
        mold:'电',
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
        time:[],
        contrast:false
    },
    methods: {
        search : function () {
            if(this.mold == ''){
                this.$message.error('请输入能源类型');
                return false;
            }
            if(this.time == ''){
                this.$message.error('请输入查询日期');
                return false;
            }
            var startTime = new Date(this.time[0]).toLocaleDateString();
            var endTime = new Date(this.time[1]).toLocaleDateString();

            var energyId = document.getElementById("energyCenter");
            var energyChart = echarts.init(energyId);
            var energy = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        crossStyle: {
                            color: '#999'
                        }
                    }
                },
                legend: {
                    data:['日耗水量'],
                    x: 'center',
                    top:20
                },
                toolbox: {
                    feature: {
                        saveAsImage: {show: true}
                    },
                    right:20,
                    top:10
                },
                grid:{
                　　x:40
                },
                xAxis: [
                    {
                        type: 'category',
                        data: ['2018/2/4','2018/2/5','2018/2/6','2018/2/7','2018/2/8','2018/2/9','2018/2/10'],
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
                        type: 'value',
                        name: 'T',
                        min: 0,
                        max: 300,
                        interval: 50,
                        axisLabel: {
                            formatter: '{value} '
                        }
                    }
                ],
                series: [
                    {
                        name:'日耗水量',
                        type:'line',
                        data:[66, 79, 90, 164,188, 60, 53],
                        smooth: true
                    }
                ]
            }
            energyChart.setOption(energy, true);
        },
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
        var heatId = document.getElementById("heat");
        var heatChart = echarts.init(heatId);
        axios.get(IPCONFIG+'/console/showWisonHot/')
        .then(function(data1){
            console.log(data1.data.data)
            data1.data.data.map(function (item) {
                item.hot = parseFloat(item.hot).toFixed(1)
            })
            heatChart.setOption(option = {
                title: {
                    text: '惠生集团供热量Q',
                    left:'5%'
                },
                tooltip: {
                    trigger: 'axis'
                },
                xAxis: {
                    data: data1.data.data.map(function (item) {
                        return item.getTime;
                    })
                },
                yAxis: {
                    splitLine: {
                        show: false
                    }
                },
                toolbox: {
                    left: 'center',
                    feature: {
                        dataZoom: {
                            yAxisIndex: 'none'
                        },
                        restore: {},
                        saveAsImage: {}
                    }
                },
                dataZoom: [{
                    startValue: '2018-02-01'
                }, {
                    type: 'inside'
                }],
                visualMap: {
                    top: '1%',
                    right: 10,
                    pieces: [{
                        gt: 0,
                        lte: 2500,
                        color: '#096'
                    }, {
                        gt: 2500,
                        lte: 5000,
                        color: '#ffde33'
                    }, {
                        gt: 5000,
                        lte: 7500,
                        color: '#ff9933'
                    }, {
                        gt: 7500,
                        lte: 10000,
                        color: '#cc0033'
                    }, {
                        gt: 10000,
                        lte: 12500,
                        color: '#660099'
                    }, {
                        gt: 12500,
                        color: '#7e0023'
                    }],
                    outOfRange: {
                        color: '#999'
                    }
                },
                series: {
                    name: '惠生集团供热量Q',
                    type: 'line',
                    data: data1.data.data.map(function (item) {
                        return item.hot;
                    }),
                    markLine: {
                        silent: true,
                        data: [{
                            yAxis: 2500
                        }, {
                            yAxis: 5000
                        }, {
                            yAxis: 7500
                        }, {
                            yAxis: 10000
                        }, {
                            yAxis: 12500
                        }]
                    }
                }
            });
        })
        document.getElementById("load").style.display = 'none';
    }
    
});

var vm = new Vue({
    el: "#app",
    data: {
        isCollapse : false,
        nowTime: '',
        type:'3-1',
        thp:'',
        contrast:false
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
        /* 获取在线监测数据 */
        monitoring : function () {
            var electricId = document.getElementById("electric");
            var heatId = document.getElementById("heat");
            var coldId = document.getElementById("cold");
    
            var electricChart = echarts.init(electricId);
            var heatChart = echarts.init(heatId);
            var coldChart = echarts.init(coldId);
    
            var electric = {
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
                    data:['日耗电量'],
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
                    x : 50,
                    y : 60,
                    x2 : 30,
                    y2 : 40,
                },
                xAxis: [
                    {
                        type: 'category',
                        data: ['00:00','01:00','02:00','03:00','04:00','05:00','06:00','07:00','08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00','24:00'],
                        axisPointer: {
                            type: 'shadow'
                        },
                        axisLabel:{
                            interval:3
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        name: 'kw',
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
                        name:'日耗电量',
                        type:'line',
                        data:[66, 79, 90, 164,188, 60, 53,43,77,94,133,235,286,195,154,145,125,124,266,235,175,145,124,55],
                        smooth: true
                    }
                ]
            }
            electricChart.setOption(electric, true);
            var heat = {
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
                    data:['日供热量'],
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
                        data: ['2018\n2/4','2018\n2/5','2018\n2/6','2018\n2/7','2018\n2/8','2018\n2/9','2018\n2/10'],
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
                        name: 'GJ',
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
                        name:'日供热量',
                        type:'line',
                        data:[66, 79, 90, 164,188, 60, 53],
                        smooth: true
                    }
                ]
            }
            heatChart.setOption(heat, true);
            var cold = {
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
                    data:['日制冷量'],
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
                        data: ['2018\n2/4','2018\n2/5','2018\n2/6','2018\n2/7','2018\n2/8','2018\n2/9','2018\n2/10'],
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
                        name: 'kcal',
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
                        name:'日制冷量',
                        type:'line',
                        data:[66, 79, 90, 164,188, 60, 53],
                        smooth: true
                    }
                ]
            }
            coldChart.setOption(cold, true);
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
                    visualMap:[
                        {
                            show: false,
                            type: 'continuous',
                            seriesIndex: 1,
                            dimension: 0,
                            min: 0,
                            max: '100%'
                        }
                    ],
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
        /*      var floorTemData = [
            "2018/1/1 6:00", "2018/1/1 6:30", "2018/1/1 7:00", "2018/1/1 7:30", "2018/1/1 8:00", "2018/1/1 8:30", "2018/1/1 9:00", "2018/1/1 9:30", "2018/1/1 10:00", "2018/1/1 10:30", "2018/1/1 11:00", "2018/1/1 11:30", "2018/1/1 12:00", "2018/1/1 12:30", "2018/1/1 13:00", "2018/1/1 13:30", "2018/1/1 14:00", "2018/1/1 14:30", "2018/1/1 15:00", "2018/1/1 15:30", "2018/1/1 16:00", "2018/1/1 16:30", "2018/1/1 17:00", "2018/1/1 17:30", "2018/1/1 18:00", "2018/1/1 18:30", "2018/1/1 19:00", "2018/1/1 19:30", "2018/1/1 20:00", "2018/1/1 20:30", "2018/1/1 21:00", "2018/1/1 21:30", "2018/1/1 22:00", "2018/1/1 22:30", "2018/1/1 23:00", "2018/1/1 23:30",
        ];
        var testDate = [];
        for(var j = 1;j<31;j++){
            var test1 = '2018/1/'+(j+1);
            for(var i = 0;i<48;i++){
                var t = Math.floor(i/2);
                if(i%2==0){
                    testDate.push(test1+' '+t+':00')
                }else{
                    testDate.push(test1+' '+t+':30')
                }
            }
        }
        console.log(testDate) */
        axios.get(IPCONFIG+'/console/showWison/')
        .then(data => {
            console.log(data.data.data)
            var floorTemId = document.getElementById("floorTem");
            var floorTemChart = echarts.init(floorTemId);
            var floorTem = {
                title : {
                    text: '温度曲线图',
                    subtext: '数据来自上海惠生集团',
                    x: 'center',
                    align: 'right'
                },
                grid: {
                    bottom: 80
                },
                toolbox: {
                    feature: {
                        dataZoom: {
                            yAxisIndex: 'none'
                        },
                        restore: {},
                        saveAsImage: {}
                    }
                },
                tooltip : {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        animation: false,
                        label: {
                            backgroundColor: '#505765'
                        }
                    }
                },
                legend: {
                    data:['温度'],
                    x: 'left',
                    left:'5%'
                },
                dataZoom: [
                    {
                        show: true,
                        realtime: true,
                        start: 65,
                        end: 85
                    }
                ],
                xAxis : [
                    {
                        type : 'category',
                        boundaryGap : false,
                        axisLine: {onZero: false},
                        data : data.data.data.map(function (str) {
                            return str.getTime.replace(' ', '\n')
                        })
                    }
                ],
                yAxis: [
                    {
                        name: '温度(℃)',
                        type: 'value',
                        min :0,
                        max: 30
                    }
                ],
                series: [
                    {
                        name:'温度',
                        type:'line',
                        animation: false,
                        itemStyle : {
                            normal: {
                                width: 1
                            }
                        },
                        markArea: {
                            silent: true,
                            data: [[{
                                xAxis: '2018-3-12\n06:00:00'
                            }, {
                                xAxis: '2018-3-22\n06:00:00'
                            }]]
                        },
                        data:data.data.data.map(function(e){
                            return e.temp;
                        })
                    }
                ]
            };
            floorTemChart.setOption(floorTem, true);
        })
        // var electricId = document.getElementById("electric");
        // var heatId = document.getElementById("heat");
        // var coldId = document.getElementById("cold");

        // var electricChart = echarts.init(electricId);
        // var heatChart = echarts.init(heatId);
        // var coldChart = echarts.init(coldId);

        // var electric = {
        //     tooltip: {
        //         trigger: 'axis',
        //         axisPointer: {
        //             type: 'cross',
        //             crossStyle: {
        //                 color: '#999'
        //             }
        //         }
        //     },
        //     legend: {
        //         data:['日耗电量'],
        //         x: 'center',
        //         top:20
        //     },
        //     toolbox: {
        //         feature: {
        //             saveAsImage: {show: true}
        //         },
        //         right:20,
        //         top:10
        //     },
        //     grid:{
        //         x : 50,
        //         y : 60,
        //         x2 : 30,
        //         y2 : 40,
        //     },
        //     xAxis: [
        //         {
        //             type: 'category',
        //             data: ['00:00','01:00','02:00','03:00','04:00','05:00','06:00','07:00','08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00','24:00'],
        //             axisPointer: {
        //                 type: 'shadow'
        //             },
        //             axisLabel:{
        //                 interval:3
        //             }
        //         }
        //     ],
        //     yAxis: [
        //         {
        //             type: 'value',
        //             name: 'kw',
        //             min: 0,
        //             max: 300,
        //             interval: 50,
        //             axisLabel: {
        //                 formatter: '{value} '
        //             }
        //         }
        //     ],
        //     series: [
        //         {
        //             name:'日耗电量',
        //             type:'line',
        //             data:[66, 79, 90, 164,188, 60, 53,43,77,94,133,235,286,195,154,145,125,124,266,235,175,145,124,55],
        //             smooth: true
        //         }
        //     ]
        // }
        // electricChart.setOption(electric, true);
        // var heat = {
        //     tooltip: {
        //         trigger: 'axis',
        //         axisPointer: {
        //             type: 'cross',
        //             crossStyle: {
        //                 color: '#999'
        //             }
        //         }
        //     },
        //     legend: {
        //         data:['日供热量'],
        //         x: 'center',
        //         top:20
        //     },
        //     toolbox: {
        //         feature: {
        //             saveAsImage: {show: true}
        //         },
        //         right:20,
        //         top:10
        //     },
        //     grid:{
        //     　　x:40
        //     },
        //     xAxis: [
        //         {
        //             type: 'category',
        //             data: ['2018\n2/4','2018\n2/5','2018\n2/6','2018\n2/7','2018\n2/8','2018\n2/9','2018\n2/10'],
        //             axisPointer: {
        //                 type: 'shadow'
        //             },
        //             axisLabel:{
        //                 interval:0
        //             }
        //         }
        //     ],
        //     yAxis: [
        //         {
        //             type: 'value',
        //             name: 'GJ',
        //             min: 0,
        //             max: 300,
        //             interval: 50,
        //             axisLabel: {
        //                 formatter: '{value} '
        //             }
        //         }
        //     ],
        //     series: [
        //         {
        //             name:'日供热量',
        //             type:'line',
        //             data:[66, 79, 90, 164,188, 60, 53],
        //             smooth: true
        //         }
        //     ]
        // }
        // heatChart.setOption(heat, true);
        // var cold = {
        //     tooltip: {
        //         trigger: 'axis',
        //         axisPointer: {
        //             type: 'cross',
        //             crossStyle: {
        //                 color: '#999'
        //             }
        //         }
        //     },
        //     legend: {
        //         data:['日制冷量'],
        //         x: 'center',
        //         top:20
        //     },
        //     toolbox: {
        //         feature: {
        //             saveAsImage: {show: true}
        //         },
        //         right:20,
        //         top:10
        //     },
        //     grid:{
        //     　　x:40
        //     },
        //     xAxis: [
        //         {
        //             type: 'category',
        //             data: ['2018\n2/4','2018\n2/5','2018\n2/6','2018\n2/7','2018\n2/8','2018\n2/9','2018\n2/10'],
        //             axisPointer: {
        //                 type: 'shadow'
        //             },
        //             axisLabel:{
        //                 interval:0
        //             }
        //         }
        //     ],
        //     yAxis: [
        //         {
        //             type: 'value',
        //             name: 'kcal',
        //             min: 0,
        //             max: 300,
        //             interval: 50,
        //             axisLabel: {
        //                 formatter: '{value} '
        //             }
        //         }
        //     ],
        //     series: [
        //         {
        //             name:'日制冷量',
        //             type:'line',
        //             data:[66, 79, 90, 164,188, 60, 53],
        //             smooth: true
        //         }
        //     ]
        // }
        // coldChart.setOption(cold, true);
        document.getElementById("load").style.display = 'none';
    }
    
});

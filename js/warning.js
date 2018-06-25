var vm = new Vue({
    el: "#app",
    data: {
        isCollapse : false,
        nowTime: '',
        type:'4',
        thp:'',
        time:'',
        loading:false,
        warinType:'',
        warinStutas:'',
        options1:[{
            value: '甲级',
            label: '甲级'
          }, {
            value: '乙级',
            label: '乙级'
          }, {
            value: '丙级',
            label: '丙级'
          }
        ],
        options2:[{
            value: '待处理',
            label: '待处理'
          }, {
            value: '处理中',
            label: '处理中'
          }, {
            value: '已处理',
            label: '已处理'
          }
        ],
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
        currentPage:4,
        tableData3: [{
            date: '2016-05-03',
            type:'电压过高',
            name: '冷却塔',
            info: '冷却塔电压过高',
            level:'甲级',
            status:'未处理'
          },{
            date: '2016-05-03',
            type:'电压过高',
            name: '冷却塔',
            info: '冷却塔电压过高',
            level:'甲级',
            status:'未处理'
          },{
            date: '2016-05-03',
            type:'电压过高',
            name: '冷却塔',
            info: '冷却塔电压过高',
            level:'甲级',
            status:'未处理'
          },{
            date: '2016-05-03',
            type:'电压过高',
            name: '冷却塔',
            info: '冷却塔电压过高',
            level:'甲级',
            status:'未处理'
          },{
            date: '2016-05-03',
            type:'电压过高',
            name: '冷却塔',
            info: '冷却塔电压过高',
            level:'甲级',
            status:'未处理'
          },{
            date: '2016-05-03',
            type:'电压过高',
            name: '冷却塔',
            info: '冷却塔电压过高',
            level:'甲级',
            status:'未处理'
          },{
            date: '2016-05-03',
            type:'电压过高',
            name: '冷却塔',
            info: '冷却塔电压过高',
            level:'甲级',
            status:'未处理'
          },{
            date: '2016-05-03',
            type:'电压过高',
            name: '冷却塔',
            info: '冷却塔电压过高',
            level:'甲级',
            status:'未处理'
          },{
            date: '2016-05-03',
            type:'电压过高',
            name: '冷却塔',
            info: '冷却塔电压过高',
            level:'甲级',
            status:'未处理'
          },{
            date: '2016-05-03',
            type:'电压过高',
            name: '冷却塔',
            info: '冷却塔电压过高',
            level:'甲级',
            status:'未处理'
          },
        ]
    },
    methods: {
        handleEdit(index, row) {
            console.log(index, row);
        },
        handleDelete(index, row) {
            console.log(index, row);
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
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
        var myChart1 = echarts.init(document.getElementById('chartB')); 
        option1 = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            title: {
                text: '预警管理',
                left: 'left',
                textStyle:{
                    color:'#fff',
                    fontSize:14,
                    fontWeight:'normal'
                },
                padding:13
            },
            textStyle:{
                color:'#fff'
            },
            legend: {
                orient: 'vertical',
                right:'2%',
                top:'5%',
                data:['非工作时间用电','电压过高','电流过高'],
                textStyle:{color:'#fff'}
            },
            series: [{
                name:'警告比例',
                type:'pie',
                radius: ['30%', '70%'],
                center : ['35%', '50%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '20',
                            fontWeight: 'bold',
                            color:'#fff'
                        }
                    }
                },
                data:[
                    {value:6, name:'非工作时间用电'},
                    {value:2, name:'电压过高'},
                    {value:1, name:'电流过高'},
                ],
                color:['#55c45f','#ff6b6b','#4eb7cd']
            }]
        };
        myChart1.setOption(option1);

        var myChart2 = echarts.init(document.getElementById('chartL'));
        option2 = {
            legend: {
                bottom: '2%',
                data: ['设备报警']
            },
            textStyle:{
                color:'#fff'
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c}'
            },
            xAxis: {
                type: 'category',
                splitLine: {
                    show: true,
                    lineStyle:{
                        color:'rgba(43,46,56,0.8)'
                    }
                },
                data: ['1日','2日','3日','4日','5日','6日','7日','8日','9日','10日','11日','12日']
            },
            yAxis: {
                splitLine: {
                    show: true,
                    lineStyle:{
                        color:'rgba(43,46,56,0.8)'
                    }
                },
                scale:true
            },
            grid: {
                top:'13%',
                left: '3%',
                right: '4%',
                bottom: '15%',
                containLabel: true
            },
            series: [{
                name: '设备报警',
                type: 'line',
                data: [1,0,3,0,0,3,0,0,0,0,2,0],
                symbol:'circle',
                symbolSize:10,
                lineStyle:{
                    normal:{color:'#ff6b6b'}
                }
            }]
        };
        myChart2.setOption(option2);

        document.getElementById("load").style.display = 'none';
    }
    
});

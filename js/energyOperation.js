var vm = new Vue({
    el : '#app',
    data () {
        return {
            freezingNum:0,
            isCollapse : false,
            type:'1',
            nowTime: '',
            box:'',
            thp:'',
            freezingType:0,
            boilerType:0,
            boardType:0,
            freshAirSelectT:false,
            freshAirShow:false,
            freezing:{
                coolingWater:[
                    {
                        name:'一号冷水机',
                        state:1,
                        tem:7
                    },
                    {
                        name:'二号冷水机',
                        state:1,
                        tem:7
                    },
                    {
                        name:'二号冷水机',
                        state:1,
                        tem:7
                    }
                ],
                pump:[
                    {
                        name:'一号制冷循环水泵',
                        state:1,
                        rate:60
                    },
                    {
                        name:'二号制冷循环水泵',
                        state:1,
                        rate:60
                    },
                    {
                        name:'三号制冷循环水泵',
                        state:1,
                        rate:60
                    },
                    {
                        name:'四号制冷循环水泵',
                        state:1,
                        rate:60
                    },
                    {
                        name:'一号冰蓄冷循环水泵',
                        state:1,
                        rate:60
                    },
                    {
                        name:'二号冰蓄冷循环水泵',
                        state:1,
                        rate:60
                    },
                    {
                        name:'三号冰蓄冷循环水泵',
                        state:1,
                        rate:60
                    },
                    {
                        name:'四号冰蓄冷循环水泵',
                        state:1,
                        rate:60
                    },
                    {
                        name:'一号冰释冷循环水泵',
                        state:1,
                        rate:60
                    },
                    {
                        name:'二号冰释冷循环水泵',
                        state:1,
                        rate:60
                    },
                    {
                        name:'三号冰释冷循环水泵',
                        state:1,
                        rate:60
                    },
                    {
                        name:'四号冰释冷循环水泵',
                        state:1,
                        rate:60
                    },
                    {
                        name:'一号冷却塔循环水泵',
                        state:1,
                        rate:60
                    },
                    {
                        name:'二号冷却塔循环水泵',
                        state:1,
                        rate:60
                    },
                    {
                        name:'三号冷却塔循环水泵',
                        state:1,
                        rate:60
                    },
                    {
                        name:'四号冷却塔循环水泵',
                        state:1,
                        rate:60
                    },
                ],
                tower:[
                    {
                        name:'一号冷却塔',
                        state:1,
                        rate:60
                    },
                    {
                        name:'二号冷却塔',
                        state:1,
                        rate:60
                    },
                    {
                        name:'三号冷却塔',
                        state:1,
                        rate:60
                    },
                    {
                        name:'四号冷却塔',
                        state:1,
                        rate:60
                    },
                    {
                        name:'五号冷却塔',
                        state:1,
                        rate:60
                    },
                    {
                        name:'六号冷却塔',
                        state:1,
                        rate:60
                    },
                    {
                        name:'七号冷却塔',
                        state:1,
                        rate:60
                    },
                    {
                        name:'八号冷却塔',
                        state:1,
                        rate:10
                    },
                ]
            },
            coolingWater:[
                {
                    id:1,
                    name:'一号冷水机组',
                    unlock:false,
                    state:1,
                    condition1:false,
                    condition2:false,
                    supply_tem:'-',
                    evaporator_enter:'-',
                    evaporator_out:'-',
                    condenser_enter:'-',
                    condenser_out:'-'
                },
                {
                    id:2,
                    name:'二号冷水机组',
                    unlock:false,
                    state:1,
                    condition1:false,
                    condition2:false,
                    supply_tem:'-',
                    evaporator_enter:'-',
                    evaporator_out:'-',
                    condenser_enter:'-',
                    condenser_out:'-'
                },
                {
                    id:3,
                    name:'三号冷水机组',
                    unlock:false,
                    state:1,
                    condition1:false,
                    condition2:false,
                    supply_tem:'-',
                    evaporator_enter:'-',
                    evaporator_out:'-',
                    condenser_enter:'-',
                    condenser_out:'-'
                },
            ],
            freezing_pump:[
                {
                    id:1,
                    name:'一号制冷循环水泵',
                    unlock:false,
                    state:1,
                    control:'远程',
                    supply_rate:'-',
                    pressure_enter:'-',
                    pressure_out:'-'
                },
                {
                    id:2,
                    name:'二号制冷循环水泵',
                    unlock:false,
                    state:1,
                    control:'远程',
                    supply_rate:'-',
                    pressure_enter:'-',
                    pressure_out:'-'
                },
                {
                    id:3,
                    name:'三号制冷循环水泵',
                    unlock:false,
                    state:1,
                    control:'远程',
                    supply_rate:'-',
                    pressure_enter:'-',
                    pressure_out:'-'
                },
                {
                    id:4,
                    name:'四号制冷循环水泵',
                    unlock:false,
                    state:1,
                    control:'远程',
                    supply_rate:'-',
                    pressure_enter:'-',
                    pressure_out:'-'
                },
                {
                    id:1,
                    name:'一号冰蓄冷循环水泵',
                    unlock:false,
                    state:1,
                    control:'远程',
                    supply_rate:'-',
                    pressure_enter:'-',
                    pressure_out:'-'
                },
                {
                    id:2,
                    name:'二号冰蓄冷循环水泵',
                    unlock:false,
                    state:1,
                    control:'远程',
                    supply_rate:'-',
                    pressure_enter:'-',
                    pressure_out:'-'
                },
                {
                    id:3,
                    name:'三号冰蓄冷循环水泵',
                    unlock:false,
                    state:1,
                    control:'远程',
                    supply_rate:'-',
                    pressure_enter:'-',
                    pressure_out:'-'
                },
                {
                    id:4,
                    name:'四号冰蓄冷循环水泵',
                    unlock:false,
                    state:1,
                    control:'远程',
                    supply_rate:'-',
                    pressure_enter:'-',
                    pressure_out:'-'
                },
                {
                    id:1,
                    name:'一号冰释冷循环水泵',
                    unlock:false,
                    state:1,
                    control:'远程',
                    supply_rate:'-',
                    pressure_enter:'-',
                    pressure_out:'-'
                },
                {
                    id:2,
                    name:'二号冰释冷循环水泵',
                    unlock:false,
                    state:1,
                    control:'远程',
                    supply_rate:'-',
                    pressure_enter:'-',
                    pressure_out:'-'
                },
                {
                    id:3,
                    name:'三号冰释冷循环水泵',
                    unlock:false,
                    state:1,
                    control:'远程',
                    supply_rate:'-',
                    pressure_enter:'-',
                    pressure_out:'-'
                },
                {
                    id:4,
                    name:'四号冰释冷循环水泵',
                    unlock:false,
                    state:1,
                    control:'远程',
                    supply_rate:'-',
                    pressure_enter:'-',
                    pressure_out:'-'
                },
                {
                    id:1,
                    name:'一号冷却塔循环水泵',
                    unlock:false,
                    state:1,
                    control:'远程',
                    supply_rate:'-',
                    pressure_enter:'-',
                    pressure_out:'-'
                },
                {
                    id:2,
                    name:'二号冷却塔循环水泵',
                    unlock:false,
                    state:1,
                    control:'远程',
                    supply_rate:'-',
                    pressure_enter:'-',
                    pressure_out:'-'
                },
                {
                    id:3,
                    name:'三号冷却塔循环水泵',
                    unlock:false,
                    state:1,
                    control:'远程',
                    supply_rate:'-',
                    pressure_enter:'-',
                    pressure_out:'-'
                },
                {
                    id:4,
                    name:'四号冷却塔循环水泵',
                    unlock:false,
                    state:1,
                    control:'远程',
                    supply_rate:'-',
                    pressure_enter:'-',
                    pressure_out:'-'
                },
            ],
            tower:[
                {
                    id:1,
                    name:'一号冷却塔',
                    unlock:false,
                    state:1,
                    control:'远程',
                    supply_rate:'-',
                    tem_enter:'-',
                    tem_out:'-'
                },
                {
                    id:2,
                    name:'二号冷却塔',
                    unlock:false,
                    state:1,
                    control:'远程',
                    supply_rate:'-',
                    tem_enter:'-',
                    tem_out:'-'
                },
                {
                    id:3,
                    name:'三号冷却塔',
                    unlock:false,
                    state:1,
                    control:'远程',
                    supply_rate:'-',
                    tem_enter:'-',
                    tem_out:'-'
                },
                {
                    id:4,
                    name:'四号冷却塔',
                    unlock:false,
                    state:1,
                    control:'远程',
                    supply_rate:'-',
                    tem_enter:'-',
                    tem_out:'-'
                },
                {
                    id:5,
                    name:'五号冷却塔',
                    unlock:false,
                    state:1,
                    control:'远程',
                    supply_rate:'-',
                    tem_enter:'-',
                    tem_out:'-'
                },
                {
                    id:6,
                    name:'六号冷却塔',
                    unlock:false,
                    state:1,
                    control:'远程',
                    supply_rate:'-',
                    tem_enter:'-',
                    tem_out:'-'
                },
                {
                    id:7,
                    name:'七号冷却塔',
                    unlock:false,
                    state:1,
                    control:'远程',
                    supply_rate:'-',
                    tem_enter:'-',
                    tem_out:'-'
                },
                {
                    id:8,
                    name:'八号冷却塔',
                    unlock:false,
                    state:1,
                    control:'远程',
                    supply_rate:'-',
                    tem_enter:'-',
                    tem_out:'-'
                },
            ],
            boiler:{
                heat_pump:[
                    {
                        name:'一号水源热泵',
                        state:1,
                        tem:37
                    },
                    {
                        name:'二号水源热泵',
                        state:1,
                        tem:37
                    },
                    {
                        name:'三号水源热泵',
                        state:1,
                        tem:37
                    },
                ],
                pump:[
                    {
                        name:'一号供热循环水泵',
                        state:1,
                        rate:60
                    },
                    {
                        name:'二号供热循环水泵',
                        state:1,
                        rate:60
                    },
                    {
                        name:'三号供热循环水泵',
                        state:1,
                        rate:60
                    },
                    {
                        name:'四号供热循环水泵',
                        state:1,
                        rate:60
                    },
                ]
            },
            heat_pump:[
                {
                    id:1,
                    name:'一号水源热泵',
                    unlock:false,
                    state:1,
                    condition1:false,
                    condition2:false,
                    supply_tem:'-',
                    evaporator_enter:'-',
                    evaporator_out:'-',
                    condenser_enter:'-',
                    condenser_out:'-'
                },
                {
                    id:2,
                    name:'二号水源热泵',
                    unlock:false,
                    state:1,
                    condition1:false,
                    condition2:false,
                    supply_tem:'-',
                    evaporator_enter:'-',
                    evaporator_out:'-',
                    condenser_enter:'-',
                    condenser_out:'-'
                },
                {
                    id:3,
                    name:'三号水源热泵',
                    unlock:false,
                    state:1,
                    condition1:false,
                    condition2:false,
                    supply_tem:'-',
                    evaporator_enter:'-',
                    evaporator_out:'-',
                    condenser_enter:'-',
                    condenser_out:'-'
                },
            ],
            boiler_pump:[
                {
                    id:1,
                    name:'一号供热循环水泵',
                    unlock:false,
                    state:1,
                    control:'远程',
                    supply_rate:'-',
                    pressure_enter:'-',
                    pressure_out:'-'
                },
                {
                    id:2,
                    name:'二号供热循环水泵',
                    unlock:false,
                    state:1,
                    control:'远程',
                    supply_rate:'-',
                    pressure_enter:'-',
                    pressure_out:'-'
                },
                {
                    id:3,
                    name:'三号供热循环水泵',
                    unlock:false,
                    state:1,
                    control:'远程',
                    supply_rate:'-',
                    pressure_enter:'-',
                    pressure_out:'-'
                },
                {
                    id:4,
                    name:'四号供热循环水泵',
                    unlock:false,
                    state:1,
                    control:'远程',
                    supply_rate:'-',
                    pressure_enter:'-',
                    pressure_out:'-'
                },
            ],
            exchanger:{
                board:[
                    {
                        name:'一号板式换热器',
                        state:1
                    },
                    {
                        name:'二号板式换热器',
                        state:1
                    },
                    {
                        name:'三号板式换热器',
                        state:1
                    },
                ],
                pump:[
                    {
                        name:'一号水源侧循环水泵',
                        state:1,
                        rate:60
                    },
                    {
                        name:'二号水源侧循环水泵',
                        state:1,
                        rate:60
                    },
                    {
                        name:'三号水源侧循环水泵',
                        state:1,
                        rate:60
                    },
                    {
                        name:'四号水源侧循环水泵',
                        state:1,
                        rate:60
                    },
                ]
            },
            board:[
                {
                    id:1,
                    name:'一号板式换热器',
                    one_enter_tem:21.5,
                    one_enter_pre:0.47,
                    one_back_tem:21.5,
                    one_back_pre:0.47,
                    two_enter_tem:21.5,
                    two_enter_pre:0.47,
                    two_back_tem:21.5,
                    two_back_pre:0.47
                },
                {
                    id:2,
                    name:'二号板式换热器',
                    one_enter_tem:22.1,
                    one_enter_pre:0.65,
                    one_back_tem:22.1,
                    one_back_pre:0.65,
                    two_enter_tem:22.1,
                    two_enter_pre:0.65,
                    two_back_tem:22.1,
                    two_back_pre:0.65
                },
                {
                    id:3,
                    name:'三号板式换热器',
                    one_enter_tem:20.7,
                    one_enter_pre:0.35,
                    one_back_tem:20.7,
                    one_back_pre:0.35,
                    two_enter_tem:20.7,
                    two_enter_pre:0.35,
                    two_back_tem:20.7,
                    two_back_pre:0.35
                }
            ],
            board_pump:[
                {
                    id:1,
                    name:'一号水源侧循环水泵',
                    unlock:false,
                    state:1,
                    control:'远程',
                    supply_rate:'-',
                    pressure_enter:'-',
                    pressure_out:'-'
                },
                {
                    id:2,
                    name:'二号水源侧循环水泵',
                    unlock:false,
                    state:1,
                    control:'远程',
                    supply_rate:'-',
                    pressure_enter:'-',
                    pressure_out:'-'
                },
                {
                    id:3,
                    name:'三号水源侧循环水泵',
                    unlock:false,
                    state:1,
                    control:'远程',
                    supply_rate:'-',
                    pressure_enter:'-',
                    pressure_out:'-'
                },
                {
                    id:4,
                    name:'四号水源侧循环水泵',
                    unlock:false,
                    state:1,
                    control:'远程',
                    supply_rate:'-',
                    pressure_enter:'-',
                    pressure_out:'-'
                },
            ],
            freshAir:[
                {
                    id:1,
                    name:'四号新风机组',
                    unlock:true,
                    state:0,
                    control:'远程',
                    fresh_tem:-6,
                    fresh_hum:15,
                    carry_tem:23.3,
                    carry_hum:86.1,
                    return_tem:24,
                    return_hum:53,
                    exhaust_tem:22.5,
                    exhaust_hum:57.3,
                    carry_rate:60,
                    exhaust_rate:50,
                    surface_enter_tem:23.7,
                    surface_out_tem:23.7
                },
                {
                    id:2,
                    name:'二十一号新风机组',
                    unlock:true,
                    state:0,
                    control:'远程',
                    fresh_tem:-6,
                    fresh_hum:15,
                    carry_tem:23.7,
                    carry_hum:85.3,
                    return_tem:24,
                    return_hum:53,
                    exhaust_tem:22.3,
                    exhaust_hum:54.7,
                    carry_rate:60,
                    exhaust_rate:50,
                    surface_enter_tem:24.2,
                    surface_out_tem:24.2
                },
                // {
                //     id:1,
                //     name:'一号新风机组',
                //     unlock:true,
                //     state:0,
                //     control:'远程',
                //     fresh_tem:-6,
                //     fresh_hum:15,
                //     carry_tem:26,
                //     carry_hum:50,
                //     return_tem:24,
                //     return_hum:53,
                //     exhaust_tem:22,
                //     exhaust_hum:57,
                //     carry_rate:60,
                //     exhaust_rate:50,
                //     surface_enter_tem:37,
                //     surface_out_tem:32
                // },
                // {
                //     id:1,
                //     name:'一号新风机组',
                //     unlock:true,
                //     state:0,
                //     control:'远程',
                //     fresh_tem:-6,
                //     fresh_hum:15,
                //     carry_tem:26,
                //     carry_hum:50,
                //     return_tem:24,
                //     return_hum:53,
                //     exhaust_tem:22,
                //     exhaust_hum:57,
                //     carry_rate:60,
                //     exhaust_rate:50,
                //     surface_enter_tem:37,
                //     surface_out_tem:32
                // },
                // {
                //     id:1,
                //     name:'一号新风机组',
                //     unlock:true,
                //     state:0,
                //     control:'远程',
                //     fresh_tem:-6,
                //     fresh_hum:15,
                //     carry_tem:26,
                //     carry_hum:50,
                //     return_tem:24,
                //     return_hum:53,
                //     exhaust_tem:22,
                //     exhaust_hum:57,
                //     carry_rate:60,
                //     exhaust_rate:50,
                //     surface_enter_tem:37,
                //     surface_out_tem:32
                // },
                // {
                //     id:1,
                //     name:'一号新风机组',
                //     unlock:true,
                //     state:0,
                //     control:'远程',
                //     fresh_tem:-6,
                //     fresh_hum:15,
                //     carry_tem:26,
                //     carry_hum:50,
                //     return_tem:24,
                //     return_hum:53,
                //     exhaust_tem:22,
                //     exhaust_hum:57,
                //     carry_rate:60,
                //     exhaust_rate:50,
                //     surface_enter_tem:37,
                //     surface_out_tem:32
                // },
                // {
                //     id:1,
                //     name:'一号新风机组',
                //     unlock:true,
                //     state:0,
                //     control:'远程',
                //     fresh_tem:-6,
                //     fresh_hum:15,
                //     carry_tem:26,
                //     carry_hum:50,
                //     return_tem:24,
                //     return_hum:53,
                //     exhaust_tem:22,
                //     exhaust_hum:57,
                //     carry_rate:60,
                //     exhaust_rate:50,
                //     surface_enter_tem:37,
                //     surface_out_tem:32
                // },
                // {
                //     id:1,
                //     name:'一号新风机组',
                //     unlock:true,
                //     state:0,
                //     control:'远程',
                //     fresh_tem:-6,
                //     fresh_hum:15,
                //     carry_tem:26,
                //     carry_hum:50,
                //     return_tem:24,
                //     return_hum:53,
                //     exhaust_tem:22,
                //     exhaust_hum:57,
                //     carry_rate:60,
                //     exhaust_rate:50,
                //     surface_enter_tem:37,
                //     surface_out_tem:32
                // },
                // {
                //     id:1,
                //     name:'一号新风机组',
                //     unlock:true,
                //     state:0,
                //     control:'远程',
                //     fresh_tem:-6,
                //     fresh_hum:15,
                //     carry_tem:26,
                //     carry_hum:50,
                //     return_tem:24,
                //     return_hum:53,
                //     exhaust_tem:22,
                //     exhaust_hum:57,
                //     carry_rate:60,
                //     exhaust_rate:50,
                //     surface_enter_tem:37,
                //     surface_out_tem:32
                // },
                // {
                //     id:1,
                //     name:'一号新风机组',
                //     unlock:true,
                //     state:0,
                //     control:'远程',
                //     fresh_tem:-6,
                //     fresh_hum:15,
                //     carry_tem:26,
                //     carry_hum:50,
                //     return_tem:24,
                //     return_hum:53,
                //     exhaust_tem:22,
                //     exhaust_hum:57,
                //     carry_rate:60,
                //     exhaust_rate:50,
                //     surface_enter_tem:37,
                //     surface_out_tem:32
                // },
                // {
                //     id:1,
                //     name:'一号新风机组',
                //     unlock:true,
                //     state:0,
                //     control:'远程',
                //     fresh_tem:-6,
                //     fresh_hum:15,
                //     carry_tem:26,
                //     carry_hum:50,
                //     return_tem:24,
                //     return_hum:53,
                //     exhaust_tem:22,
                //     exhaust_hum:57,
                //     carry_rate:60,
                //     exhaust_rate:50,
                //     surface_enter_tem:37,
                //     surface_out_tem:32
                // },
                // {
                //     id:1,
                //     name:'一号新风机组',
                //     unlock:true,
                //     state:0,
                //     control:'远程',
                //     fresh_tem:-6,
                //     fresh_hum:15,
                //     carry_tem:26,
                //     carry_hum:50,
                //     return_tem:24,
                //     return_hum:53,
                //     exhaust_tem:22,
                //     exhaust_hum:57,
                //     carry_rate:60,
                //     exhaust_rate:50,
                //     surface_enter_tem:37,
                //     surface_out_tem:32
                // },
                // {
                //     id:1,
                //     name:'一号新风机组',
                //     unlock:true,
                //     state:0,
                //     control:'远程',
                //     fresh_tem:-6,
                //     fresh_hum:15,
                //     carry_tem:26,
                //     carry_hum:50,
                //     return_tem:24,
                //     return_hum:53,
                //     exhaust_tem:22,
                //     exhaust_hum:57,
                //     carry_rate:60,
                //     exhaust_rate:50,
                //     surface_enter_tem:37,
                //     surface_out_tem:32
                // },
                // {
                //     id:1,
                //     name:'一号新风机组',
                //     unlock:true,
                //     state:0,
                //     control:'远程',
                //     fresh_tem:-6,
                //     fresh_hum:15,
                //     carry_tem:26,
                //     carry_hum:50,
                //     return_tem:24,
                //     return_hum:53,
                //     exhaust_tem:22,
                //     exhaust_hum:57,
                //     carry_rate:60,
                //     exhaust_rate:50,
                //     surface_enter_tem:37,
                //     surface_out_tem:32
                // },
                // {
                //     id:1,
                //     name:'一号新风机组',
                //     unlock:true,
                //     state:0,
                //     control:'远程',
                //     fresh_tem:-6,
                //     fresh_hum:15,
                //     carry_tem:26,
                //     carry_hum:50,
                //     return_tem:24,
                //     return_hum:53,
                //     exhaust_tem:22,
                //     exhaust_hum:57,
                //     carry_rate:60,
                //     exhaust_rate:50,
                //     surface_enter_tem:37,
                //     surface_out_tem:32
                // },
                // {
                //     id:1,
                //     name:'一号新风机组',
                //     unlock:true,
                //     state:0,
                //     control:'远程',
                //     fresh_tem:-6,
                //     fresh_hum:15,
                //     carry_tem:26,
                //     carry_hum:50,
                //     return_tem:24,
                //     return_hum:53,
                //     exhaust_tem:22,
                //     exhaust_hum:57,
                //     carry_rate:60,
                //     exhaust_rate:50,
                //     surface_enter_tem:37,
                //     surface_out_tem:32
                // },
                // {
                //     id:1,
                //     name:'一号新风机组',
                //     unlock:true,
                //     state:0,
                //     control:'远程',
                //     fresh_tem:-6,
                //     fresh_hum:15,
                //     carry_tem:26,
                //     carry_hum:50,
                //     return_tem:24,
                //     return_hum:53,
                //     exhaust_tem:22,
                //     exhaust_hum:57,
                //     carry_rate:60,
                //     exhaust_rate:50,
                //     surface_enter_tem:37,
                //     surface_out_tem:32
                // },
                // {
                //     id:1,
                //     name:'一号新风机组',
                //     unlock:true,
                //     state:0,
                //     control:'远程',
                //     fresh_tem:-6,
                //     fresh_hum:15,
                //     carry_tem:26,
                //     carry_hum:50,
                //     return_tem:24,
                //     return_hum:53,
                //     exhaust_tem:22,
                //     exhaust_hum:57,
                //     carry_rate:60,
                //     exhaust_rate:50,
                //     surface_enter_tem:37,
                //     surface_out_tem:32
                // },
                // {
                //     id:1,
                //     name:'一号新风机组',
                //     unlock:true,
                //     state:0,
                //     control:'远程',
                //     fresh_tem:-6,
                //     fresh_hum:15,
                //     carry_tem:26,
                //     carry_hum:50,
                //     return_tem:24,
                //     return_hum:53,
                //     exhaust_tem:22,
                //     exhaust_hum:57,
                //     carry_rate:60,
                //     exhaust_rate:50,
                //     surface_enter_tem:37,
                //     surface_out_tem:32
                // },
                // {
                //     id:1,
                //     name:'一号新风机组',
                //     unlock:true,
                //     state:0,
                //     control:'远程',
                //     fresh_tem:-6,
                //     fresh_hum:15,
                //     carry_tem:26,
                //     carry_hum:50,
                //     return_tem:24,
                //     return_hum:53,
                //     exhaust_tem:22,
                //     exhaust_hum:57,
                //     carry_rate:60,
                //     exhaust_rate:50,
                //     surface_enter_tem:37,
                //     surface_out_tem:32
                // },
                // {
                //     id:1,
                //     name:'一号新风机组',
                //     unlock:true,
                //     state:0,
                //     control:'远程',
                //     fresh_tem:-6,
                //     fresh_hum:15,
                //     carry_tem:26,
                //     carry_hum:50,
                //     return_tem:24,
                //     return_hum:53,
                //     exhaust_tem:22,
                //     exhaust_hum:57,
                //     carry_rate:60,
                //     exhaust_rate:50,
                //     surface_enter_tem:37,
                //     surface_out_tem:32
                // },
                // {
                //     id:1,
                //     name:'一号新风机组',
                //     unlock:true,
                //     state:0,
                //     control:'远程',
                //     fresh_tem:-6,
                //     fresh_hum:15,
                //     carry_tem:26,
                //     carry_hum:50,
                //     return_tem:24,
                //     return_hum:53,
                //     exhaust_tem:22,
                //     exhaust_hum:57,
                //     carry_rate:60,
                //     exhaust_rate:50,
                //     surface_enter_tem:37,
                //     surface_out_tem:32
                // },
                // {
                //     id:1,
                //     name:'一号新风机组',
                //     unlock:true,
                //     state:0,
                //     control:'远程',
                //     fresh_tem:-6,
                //     fresh_hum:15,
                //     carry_tem:26,
                //     carry_hum:50,
                //     return_tem:24,
                //     return_hum:53,
                //     exhaust_tem:22,
                //     exhaust_hum:57,
                //     carry_rate:60,
                //     exhaust_rate:50,
                //     surface_enter_tem:37,
                //     surface_out_tem:32
                // },
                // {
                //     id:1,
                //     name:'一号新风机组',
                //     unlock:true,
                //     state:0,
                //     control:'远程',
                //     fresh_tem:-6,
                //     fresh_hum:15,
                //     carry_tem:26,
                //     carry_hum:50,
                //     return_tem:24,
                //     return_hum:53,
                //     exhaust_tem:22,
                //     exhaust_hum:57,
                //     carry_rate:60,
                //     exhaust_rate:50,
                //     surface_enter_tem:37,
                //     surface_out_tem:32
                // },
                // {
                //     id:1,
                //     name:'一号新风机组',
                //     unlock:true,
                //     state:0,
                //     control:'远程',
                //     fresh_tem:-6,
                //     fresh_hum:15,
                //     carry_tem:26,
                //     carry_hum:50,
                //     return_tem:24,
                //     return_hum:53,
                //     exhaust_tem:22,
                //     exhaust_hum:57,
                //     carry_rate:60,
                //     exhaust_rate:50,
                //     surface_enter_tem:37,
                //     surface_out_tem:32
                // },
                // {
                //     id:1,
                //     name:'一号新风机组',
                //     unlock:true,
                //     state:0,
                //     control:'远程',
                //     fresh_tem:-6,
                //     fresh_hum:15,
                //     carry_tem:26,
                //     carry_hum:50,
                //     return_tem:24,
                //     return_hum:53,
                //     exhaust_tem:22,
                //     exhaust_hum:57,
                //     carry_rate:60,
                //     exhaust_rate:50,
                //     surface_enter_tem:37,
                //     surface_out_tem:32
                // },
                // {
                //     id:1,
                //     name:'一号新风机组',
                //     unlock:true,
                //     state:0,
                //     control:'远程',
                //     fresh_tem:-6,
                //     fresh_hum:15,
                //     carry_tem:26,
                //     carry_hum:50,
                //     return_tem:24,
                //     return_hum:53,
                //     exhaust_tem:22,
                //     exhaust_hum:57,
                //     carry_rate:60,
                //     exhaust_rate:50,
                //     surface_enter_tem:37,
                //     surface_out_tem:32
                // },
                // {
                //     id:1,
                //     name:'一号新风机组',
                //     unlock:true,
                //     state:0,
                //     control:'远程',
                //     fresh_tem:-6,
                //     fresh_hum:15,
                //     carry_tem:26,
                //     carry_hum:50,
                //     return_tem:24,
                //     return_hum:53,
                //     exhaust_tem:22,
                //     exhaust_hum:57,
                //     carry_rate:60,
                //     exhaust_rate:50,
                //     surface_enter_tem:37,
                //     surface_out_tem:32
                // },
                // {
                //     id:1,
                //     name:'一号新风机组',
                //     unlock:true,
                //     state:0,
                //     control:'远程',
                //     fresh_tem:-6,
                //     fresh_hum:15,
                //     carry_tem:26,
                //     carry_hum:50,
                //     return_tem:24,
                //     return_hum:53,
                //     exhaust_tem:22,
                //     exhaust_hum:57,
                //     carry_rate:60,
                //     exhaust_rate:50,
                //     surface_enter_tem:37,
                //     surface_out_tem:32
                // },
                // {
                //     id:1,
                //     name:'一号新风机组',
                //     unlock:true,
                //     state:0,
                //     control:'远程',
                //     fresh_tem:-6,
                //     fresh_hum:15,
                //     carry_tem:26,
                //     carry_hum:50,
                //     return_tem:24,
                //     return_hum:53,
                //     exhaust_tem:22,
                //     exhaust_hum:57,
                //     carry_rate:60,
                //     exhaust_rate:50,
                //     surface_enter_tem:37,
                //     surface_out_tem:32
                // },
                // {
                //     id:1,
                //     name:'一号新风机组',
                //     unlock:true,
                //     state:0,
                //     control:'远程',
                //     fresh_tem:-6,
                //     fresh_hum:15,
                //     carry_tem:26,
                //     carry_hum:50,
                //     return_tem:24,
                //     return_hum:53,
                //     exhaust_tem:22,
                //     exhaust_hum:57,
                //     carry_rate:60,
                //     exhaust_rate:50,
                //     surface_enter_tem:37,
                //     surface_out_tem:32
                // },
                // {
                //     id:1,
                //     name:'一号新风机组',
                //     unlock:true,
                //     state:0,
                //     control:'远程',
                //     fresh_tem:-6,
                //     fresh_hum:15,
                //     carry_tem:26,
                //     carry_hum:50,
                //     return_tem:24,
                //     return_hum:53,
                //     exhaust_tem:22,
                //     exhaust_hum:57,
                //     carry_rate:60,
                //     exhaust_rate:50,
                //     surface_enter_tem:37,
                //     surface_out_tem:32
                // },
                // {
                //     id:1,
                //     name:'一号新风机组',
                //     unlock:true,
                //     state:0,
                //     control:'远程',
                //     fresh_tem:-6,
                //     fresh_hum:15,
                //     carry_tem:26,
                //     carry_hum:50,
                //     return_tem:24,
                //     return_hum:53,
                //     exhaust_tem:22,
                //     exhaust_hum:57,
                //     carry_rate:60,
                //     exhaust_rate:50,
                //     surface_enter_tem:37,
                //     surface_out_tem:32
                // },
                // {
                //     id:1,
                //     name:'一号新风机组',
                //     unlock:true,
                //     state:0,
                //     control:'远程',
                //     fresh_tem:-6,
                //     fresh_hum:15,
                //     carry_tem:26,
                //     carry_hum:50,
                //     return_tem:24,
                //     return_hum:53,
                //     exhaust_tem:22,
                //     exhaust_hum:57,
                //     carry_rate:60,
                //     exhaust_rate:50,
                //     surface_enter_tem:37,
                //     surface_out_tem:32
                // },
            ]
        };
    },
    methods: {
        show : function (e) {
            console.log(e.keyCode)
        },
        changeData : function (id) {
            console.log(id)
        },
        coolingWaterTem : function (index) {
            console.log(index)
        },
        coolingWaterLock : function (index) {
            console.log(index)
        },
        freezing_pumpRate : function (index) {
            console.log(index)
        },
        freezing_pumpLock : function (index) {
            console.log(index)
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
        },
        /* 获取Url后的锚点参数 */
        GetUrlPara : function () {
    　　　　var url = document.location.toString();
    　　　　var arrUrl = url.split("#");
    　　　　var para = arrUrl[1];
    　　　　return para;
        },
        /* 左侧能源运营跳转页面 */
        turn : function (index) {
            switch (index) {
                case 'freezing' :
                    this.type = '2-1';
                    break;
                case 'boiler' :
                    this.type = '2-2';
                    break;
                case 'board' :
                    this.type = '2-3';
                    break;
                case 'freshAir' :
                    this.type = '2-4';
                    break;
            }
        },
        /* 冷冻机控制参数的修改 */
        freezingEffluent :function (e) {
            console.log(e.currentTarget.innerText)
            confirm("你确定要将温度修改成"+e.currentTarget.innerText+"℃")
        },
        /* 锅炉机控制参数的修改 */
        boilerEffluent :function (e) {
            console.log(e.currentTarget.innerText)
        },
    },
    created () {
        setInterval(function(){
            vm.nowTime = vm.dateFtt("yyyy-MM-dd hh:mm:ss",new Date());
        },1000);
    },
    mounted () {
        var _this = this;
        this.turn(this.GetUrlPara());
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
        // 通过$refs获取dom元素
        this.box = this.$refs.viewBox;
        // 监听这个dom的scroll事件
        this.box.addEventListener('scroll', () => {
            if(this.$refs.viewBox.scrollTop < 500){
                this.type = '2-1';
            }else if(this.$refs.viewBox.scrollTop < 1030){
                this.type = '2-2';
            }else if(this.$refs.viewBox.scrollTop < 1559){
                this.type = '2-3';
            }else{
                this.type = '2-4'; 
            }
        }, false);
    }
})
document.onkeyup= function (event) {
    var e = (event || window.event).keyCode;
    var r1 = Math.random()*2;
    var r2 = Math.random()*2;
    if(e == 67){
        vm.freshAir[0].carry_tem = (23+r1).toFixed(1);
        vm.freshAir[0].carry_hum = (86-r1).toFixed(1);
        vm.freshAir[0].exhaust_tem = (22+r2).toFixed(1);
        vm.freshAir[0].exhaust_hum = (57-r2).toFixed(1);
    }else if(e == 86){
        vm.freshAir[1].carry_tem = (23+r1).toFixed(1);
        vm.freshAir[1].carry_hum = (86-r1).toFixed(1);
        vm.freshAir[1].exhaust_tem = (22+r2).toFixed(1);
        vm.freshAir[1].exhaust_hum = (57-r2).toFixed(1);
    }
}
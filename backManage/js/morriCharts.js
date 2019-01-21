var li_sub = document.getElementsByClassName('li_sub');
var uls_sub = document.getElementsByClassName("uls_sub");
for (let i = 0; i < li_sub.length; i++) {
    li_sub[i].onmouseenter = function () {
        this.lastElementChild.style.display = "block";
    }
    li_sub[i].onmouseleave = function () {
        this.lastElementChild.style.display = "none";
    }
}

//点击删表
//点击删表
for(let i=0;i<$(".del").length;i++){
    $(".del")[i].onclick=function(){
        // console.log($(this).parents(".echartsAll"));
        $(this).parents(".echartsAll").remove();
    }
}


//echarts1
function echarts1Fuc(){
    // Use Morris.Area instead of Morris.Line
    Morris.Area({
        element: 'echarts1',
        resize:true,
        symbolSize: 2,
        yAxis : [
        {
            type: 'category',
        }],
        ymax:30000,
        resize : true,
        pointSize:5,
        hoverOpacity:1,
        lineColors : [ "#fb6e52",'#ffce55',"#2dc3e8"],//红  黄  蓝
        data: [
            {x: '2015 Q1', iPhone: 2166, iPad:null,iPodTouch:2647},
            {x: '2015 Q2',iPhone: 2600, iPad:3694,iPodTouch:7500},
            {x: '2015 Q3', iPhone: 4912, iPad:1969,iPodTouch:2501},
            {x: '2015 Q4', iPhone: 3767, iPad:3597,iPodTouch:5689},
            {x: '2016 Q1', iPhone: 6810, iPad:3914,iPodTouch:2293},
            {x: '2016 Q2',iPhone: 5670, iPad:4293,iPodTouch:1881},
            {x: '2016 Q3', iPhone: 3820, iPad:10795,iPodTouch:988},
            {x: '2016 Q4', iPhone: 15073, iPad:5967,iPodTouch:5175},
            {x: '2017 Q1', iPhone: 10687, iPad:4460,iPodTouch:2028},
            {x: '2017 Q2',iPhone: 8432, iPad:5713,iPodTouch:1791}
        ],
        xkey: 'x',
        ykeys: ['iPhone', 'iPad','iPodTouch'],
        labels: ['IPHONE', 'IPAD','IPOTOUCH'],


    }).on('click', function(i, row){
        console.log(i, row);
    });
}
//echarts2
function echarts2Fuc() {
    var mychart2 = echarts.init(document.getElementsByClassName('echarts2')[0]);
    option = {
        backgroundColor: "#fff",
        tooltip: {
            trigger: 'item',
            // formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            data: ['IOS', 'Win', 'Java', 'Adrio']
        },
        series: [{
            // name:'访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center',
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            itemStyle: {
                normal: {
                    borderColor: "#fff",
                    borderWidth: 8
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },

            data: [{
                    value: 135,
                    name: 'IOS',
                    itemStyle: {
                        color: '#a0d468'
                    }
                },
                {
                    value: 410,
                    name: 'Win',
                    itemStyle: {
                        color: '#ffce55'
                    }
                },
                {
                    value: 634,
                    name: 'Java',
                    itemStyle: {
                        color: '#2dc3e8'
                    }
                },
                {
                    value: 548,
                    name: 'Adrio',
                    itemStyle: {
                        color: '#fb6e52'
                    }
                }
            ]
        }]
    };
    if (option && typeof option === "object") {
        mychart2.setOption(option, true);
    }
}

//echarts3
function echarts3Fuc() {
    var mychart3 = echarts.init(document.getElementsByClassName('echarts3')[0]);
    option = {
        backgroundColor:'#fff',
        color: ['#ffce55', '#2dc3e8'],
        tooltip: {
            trigger: 'axis',
            backgroundColor:'rgba(255,255,255,0.8)',//通过设置rgba调节背景颜色与透明度
            textStyle:{
                color:'#2dc3e8'
            }
        },
        grid: {
            left: '4%',
            right: '6%',
            bottom: '10%',
            top:'10%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
            axisTick:{
                show:false
            },
            axisLine:{
                show:false
            }
        },
        yAxis: {
            type: 'value',
            axisTick:{
                show:false
            },
            axisLine:{
                show:false
            },
            min:0,
            max:4000,
            interval:1000
        },
        series: [{
                name: 'Licensed',
                type: 'line',
                // color:'#ffce55',
                data: [, , 501, 334, 190, 330, 210],
                symbol: 'circle',     //设定为实心点
                symbolSize: 10,   //设定实心点的大小
            },
            {
                name: 'Off the road',
                type: 'line',
                // color:'#2dc3e8',
                data: [3200, 3320, 3341, 3240, 3100, 3000, 3200],
                symbol: 'circle',     //设定为实心点
                symbolSize: 10,   //设定实心点的大小
                
            },
        ]
    };
    if (option && typeof option === "object") {
        mychart3.setOption(option, true);
    }
}

//echarts4
function echarts4Fuc() {
    var mychart4 = echarts.init(document.getElementsByClassName('echarts4')[0]);
    var geoCoordMap = {
        上海: [121.4648, 31.2891],
        尼日利亚: [-4.388361, 11.186148],
        美国洛杉矶: [-118.24311, 34.052713],
        香港邦泰: [114.195466, 22.282751],
        美国芝加哥: [-87.801833, 41.870975],
        加纳库马西: [-4.62829, 7.72415],
        英国曼彻斯特: [-1.657222, 51.886863],
        德国汉堡: [10.01959, 54.38474],
        哈萨克斯坦阿拉木图: [45.326912, 41.101891],
        俄罗斯伊尔库茨克: [89.116876, 67.757906],
        巴西: [-48.678945, -10.493623],
        埃及达米埃塔: [31.815593, 31.418032],
        西班牙巴塞罗纳: [2.175129, 41.385064],
        柬埔寨金边: [104.88659, 11.545469],
        意大利米兰: [9.189948, 45.46623],
        乌拉圭蒙得维的亚: [-56.162231, -34.901113],
        莫桑比克马普托: [32.608571, -25.893473],
        阿尔及利亚阿尔及尔: [3.054275, 36.753027],
        阿联酋迪拜: [55.269441, 25.204514],
        匈牙利布达佩斯: [17.108519, 48.179162],
        澳大利亚悉尼: [150.993137, -33.675509],
        美国加州: [-121.910642, 41.38028],
        澳大利亚墨尔本: [144.999416, -37.781726],
        墨西哥: [-99.094092, 19.365711],
        加拿大温哥华: [-123.023921, 49.311753]
    };
    var BJData = [
        [{
            name: "尼日利亚",
            value: 9100
        }, {
            name: "上海"
        }],
        [{
            name: "美国洛杉矶",
            value: 2370
        }, {
            name: "上海"
        }],
        [{
            name: "香港邦泰",
            value: 3130
        }, {
            name: "上海"
        }],
        [{
            name: "美国芝加哥",
            value: 2350
        }, {
            name: "上海"
        }],
        [{
            name: "加纳库马西",
            value: 5120
        }, {
            name: "上海"
        }],
        [{
            name: "英国曼彻斯特",
            value: 3110
        }, {
            name: "上海"
        }],
        [{
            name: "德国汉堡",
            value: 6280
        }, {
            name: "上海"
        }],
        [{
            name: "哈萨克斯坦阿拉木图",
            value: 7255
        }, {
            name: "上海"
        }],
        [{
            name: "俄罗斯伊尔库茨克",
            value: 8125
        }, {
            name: "上海"
        }],
        [{
            name: "巴西",
            value: 3590
        }, {
            name: "上海"
        }],
        [{
            name: "埃及达米埃塔",
            value: 3590
        }, {
            name: "上海"
        }],
        [{
            name: "西班牙巴塞罗纳",
            value: 3590
        }, {
            name: "上海"
        }],
        [{
            name: "柬埔寨金边",
            value: 3590
        }, {
            name: "上海"
        }],
        [{
            name: "意大利米兰",
            value: 3590
        }, {
            name: "上海"
        }],
        [{
            name: "乌拉圭蒙得维的亚",
            value: 3590
        }, {
            name: "上海"
        }],
        [{
            name: "莫桑比克马普托",
            value: 3590
        }, {
            name: "上海"
        }],
        [{
            name: "阿尔及利亚阿尔及尔",
            value: 3590
        }, {
            name: "上海"
        }],
        [{
            name: "阿联酋迪拜",
            value: 3590
        }, {
            name: "上海"
        }],
        [{
            name: "匈牙利布达佩斯",
            value: 3590
        }, {
            name: "上海"
        }],
        [{
            name: "澳大利亚悉尼",
            value: 3590
        }, {
            name: "上海"
        }],
        [{
            name: "美国加州",
            value: 3590
        }, {
            name: "上海"
        }],
        [{
            name: "澳大利亚墨尔本",
            value: 3590
        }, {
            name: "上海"
        }],
        [{
            name: "墨西哥",
            value: 3590
        }, {
            name: "上海"
        }],
        [{
            name: "加拿大温哥华",
            value: 3590
        }, {
            name: "上海"
        }]
    ];
    var convertData = function(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var dataItem = data[i];
            var fromCoord = geoCoordMap[dataItem[0].name];
            var toCoord = geoCoordMap[dataItem[1].name];
            if (fromCoord && toCoord) {
                res.push([{
                        coord: fromCoord,
                        value: dataItem[0].value
                    },
                    {
                        coord: toCoord
                    }
                ]);
            }
        }
        return res;
    };
    
    var series = [];
    [
        ["上海", BJData]
    ].forEach(function(item, i) {
        series.push({
                type: "lines",
                zlevel: 2,
                effect: {
                    show: true,
                    period: 4, //箭头指向速度，值越小速度越快
                    trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
                    symbol: "arrow", //箭头图标
                    symbolSize: 5 //图标大小
                },
                lineStyle: {
                    normal: {
                        width: 1, //尾迹线条宽度
                        opacity: 0, //尾迹线条透明度
                        curveness: 0.3 //尾迹线条曲直度
                    }
                },
    
                data: convertData(item[1])
            }, {
                type: "effectScatter",
                coordinateSystem: "geo",
                zlevel: 2,
                rippleEffect: {
                    //涟漪特效
                    period: 4, //动画时间，值越小速度越快
                    brushType: "stroke", //波纹绘制方式 stroke, fill
                    scale: 4 //波纹圆环最大限制，值越大波纹越大
                },
                label: {
                    normal: {
                        show: true,
                        position: "right", //显示位置
                        offset: [5, 0], //偏移设置
                        formatter: "{b}" //圆环显示文字
                    },
                    emphasis: {
                        show: true
                    }
                },
                symbol: "circle",
                symbolSize: function(val) {
                    return 4 + val[2] / 1000; //圆环大小
                },
                itemStyle: {
                    normal: {
                        show: false,
                    }
                },
                data: item[1].map(function(dataItem) {
                    return {
                        name: dataItem[0].name,
                        value: geoCoordMap[dataItem[0].name].concat([dataItem[0].value])
                    };
                })
            },
            //被攻击点
            {
                type: "scatter",
                coordinateSystem: "geo",
                zlevel: 2,
                rippleEffect: {
                    period: 4,
                    brushType: "stroke",
                    scale: 4
                },
                label: {
                    normal: {
                        show: true,
                        position: "right",
                        color: "#00ffff",
                        formatter: "{b}",
                        textStyle: {
                            color: "#0bc7f3"
                        }
                    },
                    emphasis: {
                        show: true
                    }
                },
                symbol: "pin",
                symbolSize: 30,
                itemStyle: {
                    normal: {
                        show: true,
                        color: "#9966cc"
                    }
                },
                data: [{
                    name: item[0],
                    value: geoCoordMap[item[0]].concat([100])
                }]
            }
        );
    });
    
    option = {
        backgroundColor: 'rgba(0,0,0,0.8)',
        tooltip: {
            trigger: "item",
            backgroundColor: "#1540a1",
            borderColor: "#FFFFCC",
            showDelay: 0,
            hideDelay: 0,
            enterable: true,
            transitionDuration: 0,
            extraCssText: "z-index:100",
            formatter: function(params, ticket, callback) {
                //根据业务自己拓展要显示的内容
                var res = "";
                var name = params.name;
                var value = params.value[params.seriesIndex + 1];
                res =
                    "<span style='color:#fff;'>" +
                    name +
                    "</span><br/>数据：" +
                    value;
                return res;
            }
        },
        visualMap: {
            //图例值控制
            min: 0,
            max: 10000,
            show: false,
            calculable: true,
            color: ["#0bc7f3"],
            textStyle: {
                color: "#fff"
            },
    
        },
        geo: {
            map: "world",
            label: {
                emphasis: {
                    show: false
                }
            },
            roam: true, //是否允许缩放
            layoutCenter: ["50%", "50%"], //地图位置
            layoutSize: "180%",
            itemStyle: {
                normal: {
                    color: "#04284e", //地图背景色
                    borderColor: "#5bc1c9" //省市边界线
                },
                emphasis: {
                    color: "rgba(37, 43, 61, .5)" //悬浮背景
                }
            }
        },
    
        series: series
    };
    if (option && typeof option === "object") {
        mychart4.setOption(option, true);
    }
}
//echarts2
var echarts2 = document.getElementsByClassName('echarts2')[0];

function resizeWorldMapContainer1() { //用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
    echarts2.style.width = document.getElementsByClassName('echarts2')[0].innerWidth + 'px';
    echarts2.style.height = document.getElementsByClassName('echarts2')[0].innerHeight + 'px';
}
resizeWorldMapContainer1(); //设置容器高宽
var myChart2 = echarts.init(echarts2); // 基于准备好的dom，初始化echarts实例

//echarts3
var echarts3 = document.getElementsByClassName('echarts3')[0];

function resizeWorldMapContainer2() { //用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
    echarts3.style.width = document.getElementsByClassName('echarts3')[0].innerWidth + 'px';
    echarts3.style.height = document.getElementsByClassName('echarts3')[0].innerHeight + 'px';
}
resizeWorldMapContainer2(); //设置容器高宽
var myChart3 = echarts.init(echarts3); // 基于准备好的dom，初始化echarts实例

//echarts4
var echarts4 = document.getElementsByClassName('echarts4')[0];

function resizeWorldMapContainer3() { //用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
    echarts4.style.width = document.getElementsByClassName('echarts4')[0].innerWidth + 'px';
    echarts4.style.height = document.getElementsByClassName('echarts4')[0].innerHeight + 'px';
}
resizeWorldMapContainer3(); //设置容器高宽
var myChart4= echarts.init(echarts4); // 基于准备好的dom，初始化echarts实例
window.onresize = function () { //用于使chart自适应高度和宽度
    //echarts2
    resizeWorldMapContainer1(); //重置容器高宽
    myChart2.resize();
     //echarts3
     resizeWorldMapContainer2(); //重置容器高宽
     myChart3.resize();
     //echarts4
     resizeWorldMapContainer3(); //重置容器高宽
     myChart4.resize();
}

$(function () {
    echarts1Fuc(); //echarts1
    echarts2Fuc(); //echarts2
    echarts3Fuc(); //echarts3
    echarts4Fuc(); //echarts4
})
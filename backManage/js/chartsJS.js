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
for (let i = 0; i < $(".del").length; i++) {
    $(".del")[i].onclick = function () {
        // console.log($(this).parents(".echartsAll"));
        $(this).parents(".echartsAll").remove();
    }
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
                    position: 'center'
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
        backgroundColor: '#fff',
        color: ['#ffce55', '#2dc3e8'],
        tooltip: {
            trigger: 'axis',
            backgroundColor: 'rgba(255,255,255,0.8)', //通过设置rgba调节背景颜色与透明度
            textStyle: {
                color: '#2dc3e8'
            }
        },
        grid: {
            left: '4%',
            right: '6%',
            bottom: '10%',
            top: '10%',
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
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            }
        },
        yAxis: {
            type: 'value',
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            min: 0,
            max: 4000,
            interval: 1000
        },
        series: [{
                name: 'Licensed',
                type: 'line',
                // color:'#ffce55',
                data: [, , 501, 334, 190, 330, 210],
                symbol: 'circle', //设定为实心点
                symbolSize: 10, //设定实心点的大小
            },
            {
                name: 'Off the road',
                type: 'line',
                // color:'#2dc3e8',
                data: [3200, 3320, 3341, 3240, 3100, 3000, 3200],
                symbol: 'circle', //设定为实心点
                symbolSize: 10, //设定实心点的大小

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
    option = {
        backgroundColor: '#fff',
        angleAxis: {
            interval: 1,
            type: 'category',
            z: 10,
            axisLine: {
                show: true,
                lineStyle: {
                    color: "#ccc",
                    width: 1,
                    type: "solid"
                },
            },
            axisLabel: {
                interval: 0,
                show: true,
                color: "#ccc",
                margin: 8,
                fontSize: 16
            },
        },
        radiusAxis: {
            min: 0,
            max: 100,
            interval: 20,
            axisLine: {
                show: true,
                lineStyle: {
                    color: "#ccc",
                    width: 1,
                    type: "solid"
                },
            },
            axisLabel: {
                formatter: '{value} %',
                show: true,
                padding: [0, 0, 20, 0],
                color: "#000",
                fontSize: 12
            },
            splitLine: {
                lineStyle: {
                    color: "#ccc",
                    width: 1,
                    type: "solid"
                }
            }
        },
        polar: {},
        series: [{
            type: 'bar',
            data: [{
                    value: 87,
                    itemStyle: {
                        normal: {
                            color: "#fb6e52"
                        }
                    }
                },
                {
                    value: 70,
                    itemStyle: {
                        normal: {
                            color: "#ffce55"
                        }
                    }
                },
                {
                    value: 29,
                    itemStyle: {
                        normal: {
                            color: "#2dc3e8"
                        }
                    }
                },
                {
                    value: 54,
                    itemStyle: {
                        normal: {
                            color: "#01fff5"
                        }
                    }
                },
                {
                    value: 40,
                    itemStyle: {
                        normal: {
                            color: "#29ec5a"
                        }
                    }
                },
                {
                    value: 8,
                    itemStyle: {
                        normal: {
                            color: "#ff62e8"
                        }
                    }
                }
            ],
            coordinateSystem: 'polar',
        }],
    };
    if (option && typeof option === "object") {
        mychart4.setOption(option, true);
    }
}

//echarts5
function echarts5Fuc() {
    var mychart5 = echarts.init(document.getElementsByClassName('echarts5')[0]);
    option = {
        backgroundColor: '#fff',
        color: ['#00c2ff', '#f9cf67', '#fb6e52'],
        legend: {
            show: true,
            bottom: 0,
            center: 0,
            itemWidth: 14, // 图例标记的图形宽度。[ default: 25 ]
            itemHeight: 14, // 图例标记的图形高度。[ default: 14 ]
            itemGap: 18, // 图例每项之间的间隔。[ default: 10 ]横向布局时为水平间隔，纵向布局时为纵向间隔。
            textStyle: {
                fontSize: 14,
                color: '#999'
            },
            data: ['2016', '2017', '2018'],
        },
        radar: [{

            indicator: [{
                    max: 100
                },
                {
                    max: 100
                },
                {
                    max: 100
                },
                {
                    max: 100
                },
                {
                    max: 100
                }
            ],
            center: ['50%', '50%'],
            radius: 142,
            startAngle: 90,
            splitNumber: 3,
            orient: 'horizontal', // 图例列表的布局朝向,默认'horizontal'为横向,'vertical'为纵向.
            splitArea: { // 坐标轴在 grid 区域中的分隔区域，默认不显示。
                show: true,
                areaStyle: { // 分隔区域的样式设置。
                    color: ['#141c42', '#141c42'], // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
                }
            },
            axisLine: { //指向外圈文本的分隔线样式
                lineStyle: {
                    color: '#153269'
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#113865', // 分隔线颜色
                    width: 1, // 分隔线线宽
                }
            }
        }, ],
        series: [{
            type: 'radar',
            itemStyle: {
                emphasis: {
                    lineStyle: {
                        width: 4
                    }
                }
            },
            data: [{
                name: '2016',
                value: [85, 65, 55, 90, 82],
                areaStyle: {
                    normal: { // 单项区域填充样式
                        color: {
                            type: 'linear',
                            x: 0, //右
                            y: 0, //下
                            x2: 1, //左
                            y2: 1, //上
                            colorStops: [{
                                offset: 0,
                                color: '#00c2ff'
                            }, {
                                offset: 0.5,
                                color: 'rgba(0,0,0,0)'
                            }, {
                                offset: 1,
                                color: '#00c2ff'
                            }],
                            globalCoord: false
                        },
                        opacity: 1 // 区域透明度
                    }
                },
                symbolSize: 2.5, // 单个数据标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [20, 10] 表示标记宽为20，高为10。
                label: { // 单个拐点文本的样式设置                            
                    normal: {
                        show: true, // 单个拐点文本的样式设置。[ default: false ]
                        position: 'top', // 标签的位置。[ default: top ]
                        distance: 2, // 距离图形元素的距离。当 position 为字符描述值（如 'top'、'insideRight'）时候有效。[ default: 5 ]
                        color: '#6692e2', // 文字的颜色。如果设置为 'auto'，则为视觉映射得到的颜色，如系列色。[ default: "#fff" ]
                        fontSize: 12, // 文字的字体大小
                        formatter: function (params) {
                            return params.value;
                        }
                    }
                },
                itemStyle: {
                    normal: { //图形悬浮效果
                        borderColor: '#00c2ff',
                        borderWidth: 3.5
                    }
                },
                lineStyle: {
                    normal: {
                        opacity: 0.4 // 图形透明度
                    }
                }
            }, {
                name: '2017',
                value: [50, 20, 45, 30, 75],
                symbolSize: 2.5,
                itemStyle: {
                    normal: {
                        borderColor: '#f9cf67',
                        borderWidth: 2.5,
                    }
                },
                areaStyle: {
                    normal: { // 单项区域填充样式
                        color: {
                            type: 'linear',
                            x: 0, //右
                            y: 0, //下
                            x2: 1, //左
                            y2: 1, //上
                            colorStops: [{
                                offset: 0,
                                color: '#f9cf67'
                            }, {
                                offset: 0.5,
                                color: 'rgba(0,0,0,0)'
                            }, {
                                offset: 1,
                                color: '#f9cf67'
                            }],
                            globalCoord: false
                        },
                        opacity: 1 // 区域透明度
                    }
                },
            }, {
                name: '2018',
                value: [37, 80, 12, 50, 25],
                symbolSize: 2.5,
                itemStyle: {
                    normal: {
                        borderColor: '#e92b77',
                        borderWidth: 2.5,
                    }
                },
                areaStyle: {
                    normal: { // 单项区域填充样式
                        color: {
                            type: 'linear',
                            x: 0, //右
                            y: 0, //下
                            x2: 1, //左
                            y2: 1, //上
                            colorStops: [{
                                offset: 0,
                                color: '#e92b77'
                            }, {
                                offset: 0.5,
                                color: 'rgba(0,0,0,0)'
                            }, {
                                offset: 1,
                                color: '#e92b77'
                            }],
                            globalCoord: false
                        },
                        opacity: 1 // 区域透明度
                    }
                }
            }]
        }, ]
    };
    if (option && typeof option === "object") {
        mychart5.setOption(option, true);
    }
}

//echarts6
function echarts6Fuc() {
    var mychart6 = echarts.init(document.getElementsByClassName('echarts6')[0]);

    function renderItem(params, api) {
        var values = [api.value(0), api.value(1)];
        var coord = api.coord(values);
        var size = api.size([1, 1], values);
        return {
            type: 'sector',
            shape: {
                cx: params.coordSys.cx,
                cy: params.coordSys.cy,
                r0: coord[2] - size[0] / 2,
                r: coord[2] + size[0] / 2,
                startAngle: -(coord[3] + size[1] / 2),
                endAngle: -(coord[3] - size[1] / 2)
            },
            style: api.style({
                fill: api.visual('color')
            })
        };
    }

    var hours = ['12a', '1a', '2a', '3a', '4a', '5a', '6a',
        '7a', '8a', '9a', '10a', '11a',
        '12p', '1p', '2p', '3p', '4p', '5p',
        '6p', '7p', '8p', '9p', '10p', '11p'
    ];
    var days = ['Saturday', 'Friday', 'Thursday',
        'Wednesday', 'Tuesday', 'Monday', 'Sunday'
    ];

    var data = [
        [0, 0, 5],
        [0, 1, 1],
        [0, 2, 0],
        [0, 3, 0],
        [0, 4, 0],
        [0, 5, 0],
        [0, 6, 0],
        [0, 7, 0],
        [0, 8, 0],
        [0, 9, 0],
        [0, 10, 0],
        [0, 11, 2],
        [0, 12, 4],
        [0, 13, 1],
        [0, 14, 1],
        [0, 15, 3],
        [0, 16, 4],
        [0, 17, 6],
        [0, 18, 4],
        [0, 19, 4],
        [0, 20, 3],
        [0, 21, 3],
        [0, 22, 2],
        [0, 23, 5],
        [1, 0, 7],
        [1, 1, 0],
        [1, 2, 0],
        [1, 3, 0],
        [1, 4, 0],
        [1, 5, 0],
        [1, 6, 0],
        [1, 7, 0],
        [1, 8, 0],
        [1, 9, 0],
        [1, 10, 5],
        [1, 11, 2],
        [1, 12, 2],
        [1, 13, 6],
        [1, 14, 9],
        [1, 15, 11],
        [1, 16, 6],
        [1, 17, 7],
        [1, 18, 8],
        [1, 19, 12],
        [1, 20, 5],
        [1, 21, 5],
        [1, 22, 7],
        [1, 23, 2],
        [2, 0, 1],
        [2, 1, 1],
        [2, 2, 0],
        [2, 3, 0],
        [2, 4, 0],
        [2, 5, 0],
        [2, 6, 0],
        [2, 7, 0],
        [2, 8, 0],
        [2, 9, 0],
        [2, 10, 3],
        [2, 11, 2],
        [2, 12, 1],
        [2, 13, 9],
        [2, 14, 8],
        [2, 15, 10],
        [2, 16, 6],
        [2, 17, 5],
        [2, 18, 5],
        [2, 19, 5],
        [2, 20, 7],
        [2, 21, 4],
        [2, 22, 2],
        [2, 23, 4],
        [3, 0, 7],
        [3, 1, 3],
        [3, 2, 0],
        [3, 3, 0],
        [3, 4, 0],
        [3, 5, 0],
        [3, 6, 0],
        [3, 7, 0],
        [3, 8, 1],
        [3, 9, 0],
        [3, 10, 5],
        [3, 11, 4],
        [3, 12, 7],
        [3, 13, 14],
        [3, 14, 13],
        [3, 15, 12],
        [3, 16, 9],
        [3, 17, 5],
        [3, 18, 5],
        [3, 19, 10],
        [3, 20, 6],
        [3, 21, 4],
        [3, 22, 4],
        [3, 23, 1],
        [4, 0, 1],
        [4, 1, 3],
        [4, 2, 0],
        [4, 3, 0],
        [4, 4, 0],
        [4, 5, 1],
        [4, 6, 0],
        [4, 7, 0],
        [4, 8, 0],
        [4, 9, 2],
        [4, 10, 4],
        [4, 11, 4],
        [4, 12, 2],
        [4, 13, 4],
        [4, 14, 4],
        [4, 15, 14],
        [4, 16, 12],
        [4, 17, 1],
        [4, 18, 8],
        [4, 19, 5],
        [4, 20, 3],
        [4, 21, 7],
        [4, 22, 3],
        [4, 23, 0],
        [5, 0, 2],
        [5, 1, 1],
        [5, 2, 0],
        [5, 3, 3],
        [5, 4, 0],
        [5, 5, 0],
        [5, 6, 0],
        [5, 7, 0],
        [5, 8, 2],
        [5, 9, 0],
        [5, 10, 4],
        [5, 11, 1],
        [5, 12, 5],
        [5, 13, 10],
        [5, 14, 5],
        [5, 15, 7],
        [5, 16, 11],
        [5, 17, 6],
        [5, 18, 0],
        [5, 19, 5],
        [5, 20, 3],
        [5, 21, 4],
        [5, 22, 2],
        [5, 23, 0],
        [6, 0, 1],
        [6, 1, 0],
        [6, 2, 0],
        [6, 3, 0],
        [6, 4, 0],
        [6, 5, 0],
        [6, 6, 0],
        [6, 7, 0],
        [6, 8, 0],
        [6, 9, 0],
        [6, 10, 1],
        [6, 11, 0],
        [6, 12, 2],
        [6, 13, 1],
        [6, 14, 3],
        [6, 15, 4],
        [6, 16, 0],
        [6, 17, 0],
        [6, 18, 0],
        [6, 19, 0],
        [6, 20, 1],
        [6, 21, 2],
        [6, 22, 2],
        [6, 23, 6]
    ];
    var maxValue = echarts.util.reduce(data, function (max, item) {
        return Math.max(max, item[2]);
    }, -Infinity);

    option = {
        legend: {
            data: ['Punch Card']
        },
        polar: {},
        tooltip: {},
        visualMap: {
            type: 'continuous',
            min: 0,
            max: maxValue,
            top: 'middle',
            dimension: 2,
            calculable: true
        },
        angleAxis: {
            type: 'category',
            data: hours,
            boundaryGap: false,
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#ddd',
                    type: 'dashed'
                }
            },
            axisLine: {
                show: false
            }
        },
        radiusAxis: {
            type: 'category',
            data: days,
            z: 100
        },
        series: [{
            name: 'Punch Card',
            type: 'custom',
            coordinateSystem: 'polar',
            itemStyle: {
                normal: {
                    color: '#d14a61'
                }
            },
            renderItem: renderItem,
            data: data
        }]
    };

    if (option && typeof option === "object") {
        mychart6.setOption(option, true);
    }
}

//echarts7
function echarts7Fuc() {
    var mychart7 = echarts.init(document.getElementsByClassName('echarts7')[0]);
    option = {
        xAxis: {
            data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        },
        yAxis: {},
        series: [{
            type: 'bar',
            barWidth: 37,
            itemStyle: {
                normal: {
                    borderWidth: 1,
                    borderColor: '#18CEE2',
                    barBorderRadius: 28,
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 1, 0,
                        [{
                                offset: 0,
                                color: '#2dc3db'
                            },
                            {
                                offset: 1,
                                color: '#0f88c0'
                            }
                        ]
                    )
                },
                emphasis: {
                    barBorderRadius: 13,
                    shadowBlur: 18,
                    shadowColor: 'rgba(218,170, 58, 0.7)'
                }
            },
            data: [220, 182, 191, 234, 290, 330, 310]
        }, {
            name: 'a',
            tooltip: {
                show: false
            },
            type: 'pictorialBar',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 1, 0,
                        [{
                                offset: 0,
                                color: '#2bc6dd'
                            },
                            {
                                offset: 1,
                                color: '#18cde1'
                            }
                        ]
                    ),
                    borderWidth: 1,
                    borderColor: '#18CEE2'
                }
            },
            symbol: 'circle',
            symbolSize: ['38', '22'],
            symbolPosition: 'end',
            data: [220, 182, 191, 234, 290, 330, 310],
            z: 3
        }]
    };
    if (option && typeof option === "object") {
        mychart7.setOption(option, true);
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
var myChart4 = echarts.init(echarts4); // 基于准备好的dom，初始化echarts实例

//echarts5
var echarts5 = document.getElementsByClassName('echarts5')[0];

function resizeWorldMapContainer4() { //用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
    echarts5.style.width = document.getElementsByClassName('echarts5')[0].innerWidth + 'px';
    echarts5.style.height = document.getElementsByClassName('echarts5')[0].innerHeight + 'px';
}
resizeWorldMapContainer4(); //设置容器高宽
var myChart5 = echarts.init(echarts5); // 基于准备好的dom，初始化echarts实例

//echarts6
var echarts6 = document.getElementsByClassName('echarts6')[0];

function resizeWorldMapContainer5() { //用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
    echarts6.style.width = document.getElementsByClassName('echarts6')[0].innerWidth + 'px';
    echarts6.style.height = document.getElementsByClassName('echarts6')[0].innerHeight + 'px';
}
resizeWorldMapContainer5(); //设置容器高宽
var myChart6 = echarts.init(echarts6); // 基于准备好的dom，初始化echarts实例

//echarts7
var echarts7 = document.getElementsByClassName('echarts7')[0];

function resizeWorldMapContainer6() { //用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
    echarts7.style.width = document.getElementsByClassName('echarts7')[0].innerWidth + 'px';
    echarts7.style.height = document.getElementsByClassName('echarts7')[0].innerHeight + 'px';
}
resizeWorldMapContainer6(); //设置容器高宽
var myChart7 = echarts.init(echarts7); // 基于准备好的dom，初始化echarts实例

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
    //echarts5
    resizeWorldMapContainer4(); //重置容器高宽
    myChart5.resize();
    //echarts6
    resizeWorldMapContainer5(); //重置容器高宽
    myChart6.resize();
    //echarts7
    resizeWorldMapContainer6(); //重置容器高宽
    myChart7.resize();
}

$(function () {
    echarts2Fuc(); //echarts2
    echarts3Fuc(); //echarts3
    echarts4Fuc(); //echarts4
    echarts5Fuc(); //echarts5
    echarts6Fuc(); //echarts6
    echarts7Fuc();//echarts7
})
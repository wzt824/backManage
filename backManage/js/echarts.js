//Tab1
function echart1() {
    var mychart1 = echarts.init(document.getElementsByClassName('section_e')[0]);
    var colors = ['#59cdea', '#ffcf59', '#777'];
    let option = {
        color: colors,
        tooltip: {
            // trigger: 'axis',
            axisPointer: {
                // type: 'cross'
            }
        },
        grid: {

        },
        xAxis: {
            data: ['', '4', '', '6', '', '8', '', '10', '', '12', '', '14', '', '16']
        },
        yAxis: [{},
            {
                min: 0,
                max: 250
            },
            {
                min: 0,
                max: 25
            }
        ],
        series: [{
                type: 'bar',
                yAxisIndex: 1,
                data: [50, 70, 56, 90, 95, 70.7, 150, 70, 80, 60, 96, 75, 80, 105]
            },

            {
                type: 'line',
                yAxisIndex: 2,
                data: [10, 8, 5, 4, 6, 7, 6, 4, 3, 2, 3, 5, 4, 6]
            }
        ]
    }
    mychart1.setOption(option);
}

//Tab2
function echart2() {
    var mychart2 = echarts.init(document.getElementsByClassName('section_e2')[0]);

    function randomData() {
        now = new Date(+now + oneDay);
        value = value + Math.random() * 21 - 10;
        return {
            name: now.toString(),
            value: [
                [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
                Math.round(value)
            ]
        }
    }
    var data = [];
    var now = +new Date(1997, 9, 3);
    var oneDay = 24 * 3600 * 1000;
    var value = Math.random() * 1000;
    for (var i = 0; i < 1000; i++) {
        data.push(randomData());
    }

    let option = {
        tooltip: {
            trigger: 'axis',
            formatter: function (params) {
                params = params[0];
                var date = new Date(params.name);
                return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
            },
            axisPointer: {
                animation: false
            }
        },
        xAxis: {
            type: 'time',
            splitLine: {
                show: false
            },
            axisLabel: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            }
        },
        yAxis: {
            type: 'value',
            boundaryGap: [0, '100%'],
            splitLine: {
                show: false
            },
            axisLabel: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            }
        },
        series: [{
            name: '模拟数据',
            type: 'line',
            width: "100%",
            showSymbol: false,
            hoverAnimation: false,
            grid: {
                x: "50%",
                y: "65%"
            },
            lineStyle: {
                color: '#a5e5f5'
            },
            areaStyle: {
                color: '#a5e5f5'
            },
            data: data
        }]
    };

    setInterval(function () {

        for (var i = 0; i < 5; i++) {
            data.shift();
            data.push(randomData());
        }
        mychart2.setOption({
            series: [{
                data: data
            }]
        });
    }, 10);
    // mychart2.setOption(option);
    if (option && typeof option === "object") {
        mychart2.setOption(option, true);
    }
}

//Tab1
function echart3() {
    var mychart3 = echarts.init(document.getElementsByClassName('section_e3')[0]);

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

    option = {
        title: {
            text: 'Punch Card of Github',
            link: 'https://github.com/pissang/echarts-next/graphs/punch-card'
        },
        legend: {
            data: ['Punch Card'],
            left: 'right'
        },
        polar: {},
        tooltip: {
            formatter: function (params) {
                return params.value[2] + ' commits in ' + hours[params.value[1]] + ' of ' + days[params.value[0]];
            }
        },
        angleAxis: {
            type: 'category',
            data: hours,
            boundaryGap: false,
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#999',
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
            axisLine: {
                show: false
            },
            axisLabel: {
                rotate: 45
            }
        },
        series: [{
            name: 'Punch Card',
            type: 'scatter',
            coordinateSystem: 'polar',
            symbolSize: function (val) {
                return val[2] * 2;
            },
            data: data,
            animationDelay: function (idx) {
                return idx * 5;
            }
        }]
    };
    if (option && typeof option === "object") {
        mychart3.setOption(option, true);
    }
}

//task1
function echartTask1() {
    var mychartTask1 = echarts.init(document.getElementsByClassName('task_echarts1')[0]);
    let option = {
        backgroundColor: "#a0d468",
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                // type: 'cross'
            }
        },
        grid: {
            x: 8,
            y: 0,
            x2: 5,
            y2: 0
        },
        xAxis: [{
            type: 'category',
            data: ['', '', '', '', '', '', '', '', '', '', '', ''],
            axisPointer: {
                // type: 'shadow'
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            }
        }],
        yAxis: [{
                type: 'value',
                min: 0,
                max: 250,
                interval: 50,
                splitLine: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
            },
            {
                type: 'value',
                min: 0,
                max: 25,
                interval: 5,
                splitLine: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                }
            }
        ],
        series: [

            {
                // name:'降水量',
                type: 'bar',
                data: [150, 100, 6, 30, 49, 70.7, 60, 67, 48.7, 190, 160, 140],
                barWidth: 10,
                itemStyle: {
                    normal: {
                        color: "#b0dc81"
                    }

                }
            },
            {
                // name:'平均温度',
                type: 'line',
                yAxisIndex: 1,
                data: [10, 6, 3, 4.5, 6.3, 10.2, 8, 10, 1.0, 11, 12.0, 13],
                itemStyle: {
                    normal: {
                        color: "#fff",
                    }
                }
            }
        ]
    };
    if (option && typeof option === "object") {
        mychartTask1.setOption(option, true);
    }

}

//task2
function echartTask2() {
    var mychartTask2 = echarts.init(document.getElementsByClassName('task_echarts2')[0]);
    option = {
        backgroundColor: "#fb6e52",
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                // type: 'cross'
            }
        },
        grid: {
            x: 8,
            y: 0,
            x2: 5,
            y2: 0
        },
        xAxis: [{
            type: 'category',
            data: ['', '', '', '', '', '', '', '', '', '', '', ''],
            axisPointer: {
                // type: 'shadow'
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            }
        }],
        yAxis: [{
                type: 'value',
                min: 0,
                max: 250,
                interval: 50,
                splitLine: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
            },
            {
                type: 'value',
                min: 0,
                max: 25,
                interval: 5,
                splitLine: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                }
            }
        ],
        series: [

            {
                // name:'降水量',
                type: 'bar',
                data: [200, 180, 200, 50, 10, 70.7, 70, 10, 48.7, 10, 10, 140],
                barWidth: 10,
                itemStyle: {
                    normal: {
                        color: "#fb7d64"
                    }

                }
            },
            {
                // name:'平均温度',
                type: 'line',
                yAxisIndex: 1,
                data: [10, 6, 3, 4.5, 3.3, 6.2, 5, 2, 1.0, 4, 6.0, 4],
                itemStyle: {
                    normal: {
                        color: "#fff",
                    }
                }
            }
        ]
    };
    if (option && typeof option === "object") {
        mychartTask2.setOption(option, true);
    }
}
//task3
function echartTask3() {
    var mychartTask3 = echarts.init(document.getElementsByClassName('task_echarts3')[0]);
    option = {
        backgroundColor: "#2dc3e8",
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                // type: 'cross'
            }
        },
        grid: {
            x: 8,
            y: 0,
            x2: 5,
            y2: 0
        },
        xAxis: [{
            type: 'category',
            data: ['', '', '', '', '', '', '', '', '', '', '', ''],
            axisPointer: {
                // type: 'shadow'
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            }
        }],
        yAxis: [{
                type: 'value',
                min: 0,
                max: 250,
                interval: 50,
                splitLine: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
            },
            {
                type: 'value',
                min: 0,
                max: 25,
                interval: 5,
                splitLine: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                }
            }
        ],
        series: [

            {
                // name:'降水量',
                type: 'bar',
                data: [100, 80, 50, 110, 130, 140, 130, 110, 48.7, 60, 80, 10],
                barWidth: 10,
                itemStyle: {
                    normal: {
                        color: "#3bcbef"
                    }

                }
            },
            {
                // name:'平均温度',
                type: 'line',
                yAxisIndex: 1,
                data: [6, 4, 1, 4, 3.3, 6.2, 5, 2, 6, 12, 7, 8],
                itemStyle: {
                    normal: {
                        color: "#fff",
                    }
                }
            }
        ]
    };
    if (option && typeof option === "object") {
        mychartTask3.setOption(option, true);
    }
}

//row1
function echartRow1() {
    var mychartRow1 = echarts.init(document.getElementsByClassName('section_rowLeftCen')[0]);
    var data = [20, 50, 30, 110, 60, 55, 0];
    var xdata = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var option = {
        backgroundColor: "#f5f5f5",
        grid: {
            left: -55,
            right: -60,
            top: -150,
            bottom: 0,
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: xdata,
            min: 0,
            max: 6,
            splitLine: {
                show: false
            },
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            }
        },
        yAxis: {
            splitLine: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            min: 0,
            max: 250,
            interval: 50
        },
        series: [{
            data: data,
            type: 'line',
            symbol: "none",
            lineStyle: {
                color: "#37c2e2"
            },
            label: {
                show: false,
                position: 'top'
            },
            areaStyle: {
                color: '#37c2e2'
            }
        }, {
            type: 'bar',
            animation: false,
            barWidth: 3,
            hoverAnimation: false,
            tooltip: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1
                    }
                }
            }
        }]
    }
    if (option && typeof option === "object") {
        mychartRow1.setOption(option, true);
    }
}

//row2
function echartRow2() {
    var mychartRow2 = echarts.init(document.getElementsByClassName('section_rowRight2E1')[0]);
    var data = {
        id: 'echartPie',
        value: [12, 32, 54, 12, 22],
        legend: ['', '', '', '', ''],
        color: ['#e75b8d', '#fb6e52', '#5db2ff', '#a0d468', '#ffce55'],
        // tooltipShow:false,    //设置悬浮提示显示              --默认显示true
        // hoverAnimation:false, //设置鼠标悬浮点击饼图动画效果  --默认开启动画true
    }
    /**
     * 数据处理
     */
    var seriesData = []
    data.value.forEach(function (item, index) {
        seriesData.push({
            value: item,
            name: data.legend[index]
        })
    })
    var option = {
        tooltip: {
            trigger: 'item',
            show: data.tooltipShow === false ? false : true
        },
        legend: {
            orient: 'horizontal',
            top: 16,
            icon: 'circle',
            selectedMode: false,
            itemWidth: 4,
            itemHeight: 4,
            itemGap: 4,
            borderRadius: 4,
            data: data.legend
        },
        series: [{
            type: 'pie',
            hoverAnimation: data.hoverAnimation === false ? false : true,
            radius: ['40%', '67%'],
            color: data.color,
            label: {
                normal: {
                    formatter: function (param) {
                        if (!param.percent) return ''
                        var f = Math.round(param.percent * 10) / 10;
                        var s = f.toString();
                        var rs = s.indexOf('.');
                        if (rs < 0) {
                            rs = s.length;
                            s += '.';
                        }
                        while (s.length <= rs + 1) {
                            s += '0';
                        }
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: seriesData
        }]
    };
    if (option && typeof option === "object") {
        mychartRow2.setOption(option, true);
    }
}
//图表自适应
//Tab1
var echartsWarp = document.getElementsByClassName('section_e')[0];

function resizeWorldMapContainer() { //用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
    echartsWarp.style.width = document.getElementsByClassName('section_e')[0].innerWidth + 'px';
    echartsWarp.style.height = document.getElementsByClassName('section_e')[0].innerHeight + 'px';
}
resizeWorldMapContainer(); //设置容器高宽
var myChart = echarts.init(echartsWarp); // 基于准备好的dom，初始化echarts实例

//Tab3
var echartsWarp3 = document.getElementsByClassName('section_e3')[0];

function resizeWorldMapContainer6() { //用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
    echartsWarp3.style.width = document.getElementsByClassName('section_e3')[0].innerWidth + 'px';
    echartsWarp3.style.height = document.getElementsByClassName('section_e3')[0].innerHeight + 'px';
}
resizeWorldMapContainer6(); //设置容器高宽
var myChart3 = echarts.init(echartsWarp3); // 基于准备好的dom，初始化echarts实例

//task1
var echartsTask = document.getElementsByClassName('task_echarts1')[0];

function resizeWorldMapContainer1() { //用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
    echartsTask.style.width = document.getElementsByClassName('task_echarts1')[0].innerWidth + 'px';
    echartsTask.style.height = document.getElementsByClassName('task_echarts1')[0].innerHeight + 'px';
}
resizeWorldMapContainer1(); //设置容器高宽
var myChartTask = echarts.init(echartsTask); // 基于准备好的dom，初始化echarts实例

//task2
var echartsTask2 = document.getElementsByClassName('task_echarts2')[0];

function resizeWorldMapContainer2() { //用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
    echartsTask2.style.width = document.getElementsByClassName('task_echarts2')[0].innerWidth + 'px';
    echartsTask2.style.height = document.getElementsByClassName('task_echarts2')[0].innerHeight + 'px';
}
resizeWorldMapContainer2(); //设置容器高宽
var myChartTask2 = echarts.init(echartsTask2); // 基于准备好的dom，初始化echarts实例

//task3
var echartsTask3 = document.getElementsByClassName('task_echarts3')[0];

function resizeWorldMapContainer3() { //用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
    echartsTask3.style.width = document.getElementsByClassName('task_echarts3')[0].innerWidth + 'px';
    echartsTask3.style.height = document.getElementsByClassName('task_echarts3')[0].innerHeight + 'px';
}
resizeWorldMapContainer3(); //设置容器高宽
var myChartTask3 = echarts.init(echartsTask3); // 基于准备好的dom，初始化echarts实例


//row1
var echartsRow1 = document.getElementsByClassName('section_rowLeftCen')[0];

function resizeWorldMapContainer4() { //用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
    echartsRow1.style.width = document.getElementsByClassName('section_rowLeftCen')[0].innerWidth + 'px';
    echartsRow1.style.height = document.getElementsByClassName('section_rowLeftCen')[0].innerHeight + 'px';
}
resizeWorldMapContainer4(); //设置容器高宽
var myChartRow1 = echarts.init(echartsRow1); // 基于准备好的dom，初始化echarts实例

//row2
var echartsRow2 = document.getElementsByClassName('section_rowRight2E1')[0];

function resizeWorldMapContainer5() { //用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
    echartsRow2.style.width = document.getElementsByClassName('section_rowRight2E1')[0].innerWidth + 'px';
    echartsRow2.style.height = document.getElementsByClassName('section_rowRight2E1')[0].innerHeight + 'px';
}
resizeWorldMapContainer5(); //设置容器高宽
var myChartRow2 = echarts.init(echartsRow2); // 基于准备好的dom，初始化echarts实例

window.onresize = function () { //用于使chart自适应高度和宽度
    //Tab1
    resizeWorldMapContainer(); //重置容器高宽
    myChart.resize();
    //Tab3
    resizeWorldMapContainer6(); //重置容器高宽
    myChart3.resize();
    //task1
    resizeWorldMapContainer1(); //重置容器高宽
    myChartTask.resize();
    //task2
    resizeWorldMapContainer2(); //重置容器高宽
    myChartTask2.resize();
    //task3
    resizeWorldMapContainer3(); //重置容器高宽
    myChartTask3.resize();
    //row1
    resizeWorldMapContainer4(); //重置容器高宽
    myChartRow1.resize();
    //row2
    resizeWorldMapContainer5(); //重置容器高宽
    myChartRow2.resize();
};

$(function () {
    //百分比
    $('.myStat2').circliful();

    // menu();//响应菜单

    echart1(); //Tab1
    // echart2(); //Tab2
    // echart3(); //Tab3
    echartTask1();
    echartTask2();
    echartTask3();
    echartRow1(); //row1
    echartRow2();
})
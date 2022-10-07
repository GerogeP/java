import * as React from 'react';
import * as echarts from 'echarts/core';
import {
    BarChart,
    // 系列类型的定义后缀都为 SeriesOption
    BarSeriesOption,
    LineChart,
    LineSeriesOption
} from 'echarts/charts';
import {
    TitleComponent,
    // 组件类型的定义后缀都为 ComponentOption
    TitleComponentOption,
    TooltipComponent,
    TooltipComponentOption,
    GridComponent,
    GridComponentOption,
    // 数据集组件
    DatasetComponent,
    DatasetComponentOption,
    // 内置数据转换器组件 (filter, sort)
    TransformComponent,
    DataZoomComponent,
    GraphicComponent
} from 'echarts/components';
import { LabelLayout, UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';

// 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型
type ECOption = echarts.ComposeOption<
    | BarSeriesOption
    | LineSeriesOption
    | TitleComponentOption
    | TooltipComponentOption
    | GridComponentOption
    | DatasetComponentOption
>;

// 注册必须的组件
echarts.use([
    TitleComponent,
    TooltipComponent,
    GridComponent,
    DatasetComponent,
    TransformComponent,
    BarChart,
    LineChart,
    LabelLayout,
    UniversalTransition,
    CanvasRenderer,
    DataZoomComponent,
    GraphicComponent
]);

const symbolSize = 20;
const data = [
    [40, -10],
    [-30, -5],
    [-76.5, 20],
    [-63.5, 40],
    [-22.1, 50]
];

const defualtOption = {
    title: {
        text: 'Try Dragging these Points',
        left: 'center'
    },
    tooltip: {
        triggerOn: 'none',
        formatter: function (params: any) {
            return (
                'X: ' +
                params.data[0].toFixed(2) +
                '<br>Y: ' +
                params.data[1].toFixed(2)
            );
        }
    },
    grid: {
        top: '8%',
        bottom: '12%'
    },
    xAxis: {
        min: -100,
        max: 70,
        type: 'value',
        axisLine: { onZero: false }
    },
    yAxis: {
        min: -30,
        max: 60,
        type: 'value',
        axisLine: { onZero: false }
    },
    dataZoom: [
        {
            type: 'slider',
            xAxisIndex: 0,
            filterMode: 'none'
        },
        {
            type: 'slider',
            yAxisIndex: 0,
            filterMode: 'none'
        },
        {
            type: 'inside',
            xAxisIndex: 0,
            filterMode: 'none'
        },
        {
            type: 'inside',
            yAxisIndex: 0,
            filterMode: 'none'
        }
    ],
    series: [
        {
            id: 'a',
            type: 'line',
            smooth: true,
            symbolSize: symbolSize,
            data: data
        }
    ]
};
const AddShadowPoints = ((myChart: any) => {
    
    setTimeout( ()=> {
        // Add shadow circles (which is not visible) to enable drag.
        myChart.setOption({
            graphic: data.map(function (item, dataIndex) {
                return {
                    type: 'circle',
                    position: myChart.convertToPixel('grid', item),
                    shape: {
                        cx: 0,
                        cy: 0,
                        r: symbolSize / 2
                    },
                    invisible: true,
                    draggable: true,
                    ondrag: function (dx: number, dy: number) {
                        onPointDragging(dataIndex, [(this as any).x, (this as any).y], myChart);
                    },
                    onmousemove: function () {
                        showTooltip(dataIndex, myChart);
                    },
                    onmouseout: function () {
                        hideTooltip(dataIndex, myChart);
                    },
                    z: 100
                };
            })
        });
    }, 0);
});

window.addEventListener('resize', updatePosition);

// myChart.on('dataZoom', updatePosition);

function updatePosition(myChart: any) {
    myChart.setOption({
        graphic: data.map(function (item, dataIndex) {
            return {
                position: myChart.convertToPixel('grid', item)
            };
        })
    });
}

function showTooltip(dataIndex: number, myChart: any) {
    myChart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: dataIndex
    });
}

function hideTooltip(dataIndex: number, myChart: any) {
    myChart.dispatchAction({
        type: 'hideTip'
    });
}

function onPointDragging(dataIndex: number, pos: number[], myChart: any) {
    data[dataIndex] = myChart.convertFromPixel('grid', pos);

    // Update data
    myChart.setOption({
        series: [
            {
                id: 'a',
                data: data
            }
        ]
    });
}


const Echart = ((props: any) => {
    console.log('echart props ======== ', props);

    const [option, setOption] = React.useState(defualtOption);
    const chartWrapper = React.useRef<HTMLDivElement>(null)   // 在React中，通过useRef来获取组件挂载的HTML元素，也就是ECharts官网文档中所提到的父容器。
    const chart = React.useRef<any>(null)

    React.useEffect(() => {
        const height = document.getElementById('dora')?.clientHeight  // 你也可以根据你的布局来自定义ECharts的宽高。
        if (!chartWrapper.current) { return };
        console.log('chartWrapper,current === false', !chartWrapper.current);

        chartWrapper.current.style.height = `${height}px`              //用到了响应式布局的理念，在父元素中寻找id为dora的元素，并设置ECharts父容器的高度为其高度
        chart.current = echarts.init(chartWrapper.current)    //初始化ECharts

        chart.current.setOption(option);
        AddShadowPoints(chart.current);

        console.log('charts ===== 1', chart.current);
        
    }, [])
    React.useEffect(() => {                             //每次当option变化时，再次setOptions
        chart.current.setOption(option)

        console.log('charts ===== 2', chart.current);

    }, [option])

    console.log('charts ===== 3', chart.current);

    return (
        <div
            ref={chartWrapper}
            style={{
                width: '100%',
                height: '100%'
            }}
        />
    )
});

export default Echart;
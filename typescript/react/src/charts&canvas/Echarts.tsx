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
    TransformComponent
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
    CanvasRenderer
]);

const option: ECOption = {
    // ...
};


// import * as echarts from 'echarts';

// 基于准备好的dom，初始化echarts实例
// var myChart = echarts.init(document.getElementById('main'));
// 绘制图表
const defualtOption = {
    title: {
        text: 'ECharts 入门示例'
    },
    tooltip: {},
    xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    yAxis: {},
    series: [
        {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }
    ]
};

const Echart = ((props: any) => {
    console.log('echart props ======== ', props);

    const [option, setOption] = React.useState(defualtOption);
    const chartWrapper = React.useRef<HTMLDivElement>(null)   // 在React中，通过useRef来获取组件挂载的HTML元素，也就是ECharts官网文档中所提到的父容器。
    const chart = React.useRef<any>(null)

    React.useEffect(() => {
        // const height = document.getElementById('dora')?.clientHeight  // 你也可以根据你的布局来自定义ECharts的宽高。
        if (!chartWrapper.current) { return };
        console.log('chartWrapper,current === false', !chartWrapper.current);

        // chartWrapper.current.style.height = `${height}px`              //用到了响应式布局的理念，在父元素中寻找id为dora的元素，并设置ECharts父容器的高度为其高度
        chart.current = echarts.init(chartWrapper.current)    //初始化ECharts

        chart.current.setOption(option);

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
                width: 600,
                height: 400
            }}
        />
    )
});

export default Echart;
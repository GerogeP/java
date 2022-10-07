import * as React from 'react';
import CanvasJSReact from '../asserts/js/canvasjs/canvasjs.react.js';
const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;
let initoptions: any = {}

const defaultDataPoints = [
    { x: 0, y: 0 },
    { x: 1, y: 10000 },
    { x: 2, y: 20000 },
    { x: 3, y: 30000 },
    { x: 4, y: 40000 },
    { x: 5, y: 33900 },
    { x: 6, y: 40000 },
    { x: 7, y: 2500 },
    { x: 8, y: 32300 },
    { x: 9, y: 42000 },
    { x: 10, y: 37160 },
    { x: 11, y: 38400 }
];

const secondDatapoints = [
    { x: 0, y: 0 },
    { x: 1, y: 10000 },
    { x: 2, y: 50000 },
    { x: 3, y: 30000 },
    { x: 4, y: 40000 },
    { x: 5, y: 33900 },
    { x: 6, y: 40000 },
    { x: 7, y: 20500 },
    { x: 8, y: 32300 },
    { x: 9, y: 42000 },
    { x: 10, y: 37160 },
    { x: 11, y: 38400 }
];

const GetOptions = ((datapoints: { x:number, y: number }[]) => {
    return (
        {
            animationEnabled: true,
            title: {
                text: "Row Gamma"
            },
            axisX: {
                valueFormatString: "###"
            },
            axisY: {
                title: "",
                prefix: ""
            },
            data: [{
                yValueFormatString: "#,###",
                xValueFormatString: "#,###",
                type: "spline",
                dataPoints: datapoints
            }]
        }
    )
})


const defaultoptions = {
    animationEnabled: true,
    title: {
        text: "Row Gamma"
    },
    axisX: {
        valueFormatString: "###"
    },
    axisY: {
        title: "",
        prefix: ""
    },
    data: [{
        yValueFormatString: "#,###",
        xValueFormatString: "#,###",
        type: "spline",
        dataPoints: [
            { x: 0, y: 0 },
            { x: 1, y: 10000 },
            { x: 2, y: 20000 },
            { x: 3, y: 30000 },
            { x: 4, y: 40000 },
            { x: 5, y: 33900 },
            { x: 6, y: 40000 },
            { x: 7, y: 2500 },
            { x: 8, y: 32300 },
            { x: 9, y: 42000 },
            { x: 10, y: 37160 },
            { x: 11, y: 38400 }
        ]
    }]
};

const secondoptions = {
    animationEnabled: true,
    title: {
        text: "Row Gamma"
    },
    axisX: {
        valueFormatString: "###"
    },
    axisY: {
        title: "",
        prefix: ""
    },
    data: [{
        yValueFormatString: "#,###",
        xValueFormatString: "#,###",
        type: "spline",
        dataPoints: secondDatapoints
    }]
};

const buildcanvas = ((ref: any, options: any) => {
    return (
        <CanvasJSChart
            ref={ref}
            options={options}
        />
    )
});

const Canvas = ((props: any) => {
    const CanvasRef = React.useRef(null);

    const [options, setOptions] = React.useState(initoptions);
    const [mycanvas, setMycanvas] = React.useState(<CanvasJSChart />)


    React.useEffect(() => {
        setOptions(GetOptions(defaultDataPoints));
        setMycanvas(buildcanvas(CanvasRef, GetOptions(defaultDataPoints)));
    }, []);
        
    const handleClick = ((event: React.MouseEvent) => {
        console.log('-----------------cilck canvas!!!!!--------------')
        console.log("event,client x y ===== ", event.clientX, event.clientY);
        // console.log('event.screen x y ', event.screenX, event.screenY);
        // console.log(CanvasRef.current);
        const mycanvas: any = CanvasRef.current;
        if (CanvasRef.current === null) return;
        if (mycanvas.chart === null) return;
        
        const chart = mycanvas.chart;
        
        const relX = event.clientX;
        const relY = event.clientY;
        const xValue = Math.round(chart.axisX[0].convertPixelToValue(relX) - 1);
        const yValue = Math.round(chart.axisY[0].convertPixelToValue(relY) + 18789);
          
        const oldDataPoints = mycanvas.chart.data[0].dataPoints;
        
        const newdataPoints = oldDataPoints.map((property: any) => {
            return (
                {
                    x: property.x,
                    y: property.x === xValue ? yValue : property.y
                }
            )
        });


        // setMycanvas(buildcanvas(CanvasRef, GetOptions(secondDatapoints)));
        console.log('seconddatapoints', secondDatapoints);
        console.log('newnDataPoints', newdataPoints);
        

        setMycanvas(buildcanvas(CanvasRef, GetOptions(newdataPoints)));

    });

    // const MyCanvas = buildcanvas(CanvasRef, options)
    return (
        <div onClick={handleClick}  >
            {mycanvas}
           
        </div >
    );
});

export default Canvas; 

import * as React from 'react';
import logo from './asserts/js/svgs/logo.svg';
import './App.css';
import GroupBasic4Curve from './GroupBasic4Curve';
import Drill from '../asserts/js/svgs/drill.svg';
import Canvas from './Canvas';
import Echarts from './Echarts';
import EchartsDraggable from './EchartsDraggable';
import Luft from './luft';
import Button from '@mui/material/Button';

function Drawcharts() {
  return (
    <div
      className="App"
      style={{
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <img src={Drill} />
      <GroupBasic4Curve
        data={{ "Name": " Curve" }}
        image={<EchartsDraggable />}
      />
      {/* <GroupBasic4Curve
        data={{ "Name": " Curve" }}
        image={<Canvas />}
      />
      <GroupBasic4Curve
        data={{ "Name": " Curve" }}
        image={<Luft />}
      /> */}
    </div>
  );
}

export default Drawcharts;

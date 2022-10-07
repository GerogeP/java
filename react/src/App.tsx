import * as React from 'react';
import logo from './asserts/js/svgs/logo.svg';
import './App.css';
import KeyShortcuts from './keyshortcuts/keyshortcuts';
import KeyShortcutsTestall from './keyshortcuts/keyshortcuts-testall';
import Drawcharts from './charts&canvas/DrawCharts';
import Play from './Icons/Play';
import SkipPrevious from './Icons/SkipPrevious';
import SkipNext from './Icons/SkipNext';
import Sound from './Icons/Sound';
import DragAndDrop from './FileObjects/DragAndDrop';


const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'SET_DROP_DEPTH':
      return { ...state, dropDepth: action.dropDepth }
    case 'SET_IN_DROP_ZONE':
      return { ...state, inDropZone: action.inDropZone };
    case 'ADD_FILE_TO_LIST':
      return { ...state, fileList: state.fileList.concat(action.files) };
    default:
      return state;
  }
};
function App() {

  const [data, dispatch] = React.useReducer(
    reducer, { dropDepth: 0, inDropZone: false, fileList: [] }
  )



  return (
    <div
      className="App"
      style={{
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <h1>React drag-and-drop component</h1>
      <DragAndDrop data={data} dispatch={dispatch} />
      <ol className="dropped-files">
        {data.fileList.map((f: any) => {
          return (
            <li key={f.name}>{f.path + f.name}</li>
          )
        })}
      </ol>

      {/* <Sound /> */}
      {/* <SkipNext /> */}
      {/* <SkipPrevious /> */}
      {/* <Play /> */}
      {/* <KeyShortcuts /> */}
      {/* <KeyShortcutsTestall /> */}
      {/* <Drawcharts /> */}
    </div>
  );
}

export default App;

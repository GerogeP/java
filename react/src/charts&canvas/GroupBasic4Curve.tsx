import * as React from 'react';
// import Box from '@mui/material/Box';
// import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import UploadFileOutlinedIcon from '@mui/icons-material/UploadFileOutlined';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Luft from './luft';
import Button from '@mui/material/Button';
import Canvas from './Canvas';
// import { TAttributes, TGroup } from '../CommonTypes';
// import { CreateGroupItem, GetDataFiltered } from '../CommonFunctions';
// import { ipcRenderer } from 'electron';


const Root = styled('div')`
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
    font-size: 10px;
    overflow: hidden;
  }
  tr {
    width: calc(100% - 1px);
    border: 1px solid #ddd;
  }
  td,
  th {
    text-align: left;
    margin: 0px;
    padding: 0px;
      }

  th {
    background-color: #ddd;
  }
`;

const MyAppBar = styled(AppBar)(({ theme }) => ({
  ...theme.typography.body1,
  padding: theme.spacing(2),
  textAlign: 'center',
  // color: theme.palette.text.white,
  // background: theme.palette.background.darkblue,
  shadow: theme,
  flexGrow: 1, flexShrink: 1, height: '2vh',
  justifyContent: 'space-around', alignItems: 'center',
  position: 'relative',
  shadows: theme.shadows[0]
}));

export default function Group(props: any) {
  console.log('GroupBasic props =============', props)

  const [env, setEnv] = React.useState('');
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  return (

    <Box
      id="hive"
      sx={{
        minWidth: 300,
        width: '100%',
        margin: 2,
        padding: 2, border: '1px solid bule'
      }}
    >

      <div id="blank header"
        style={{
          position: 'relative',
          overflow: 'hidden',
          borderRadius: 5,
          top: 3
        }}>
        <MyAppBar sx={{ top: -3, }}>
          <Typography sx={{ top: 3 }}>
            {props.data.Name}
          </Typography>

        </MyAppBar>
      </div>

      <Box
        id="Curve's name and data"
        sx={{
          // width: '100%',
          height: '4vh',
          padding: 1,
          backgroundColor: 'rgba(200, 200, 200, 0.6)',
          display: 'flex', alignItems: 'flex-end',
          border: '1px solid red'
        }}
      >
        <Box
          sx={{
            height: '2vh',
            display: 'flex',
            alignItems: 'center',
            mr: 1
          }}
        // onClick={handleGet}
        >
          <UploadFileOutlinedIcon sx={{ width: '15px', float: 'left' }} />
          <Typography
            variant="caption"
            display="block"
            sx={{
              float: 'left',
              height: '15px',
              top: 2,
              mr: 2
            }}
          >
            Curve Name
          </Typography>
        </Box>
        <Box
          sx={{ display: 'flex', alignItems: 'center' }}
        // onClick={handleSet}
        >
          <Typography
            variant="caption"
            display="block"
            sx={{ float: 'left', height: '15px', top: 2, mr: 2 }}
          >
            Curve Value
          </Typography>
        </Box>
      </Box>
      <Box id="image and buttons"
        sx={{
          display: 'flex',
          border: '1px solid red'
        }}
      >
        <Box id="image"
          sx={{
            width: '80%',
            border: '1px solid blue'
          }}
        >
          {props.image}
          {/* <Canvas /> */}
          {/* <Luft /> */}
        </Box>
        <Box id="buttuins"
          sx={{
            margin: 2,
            padding: 2,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'stretch',
            border: '1px solid blue'
          }}
        >
          <Button variant='outlined' sx={{ margin: 2 }}>Read.txt</Button>
          <Button variant='outlined' sx={{ margin: 2 }}>Save.txt</Button>
          <Button variant='outlined' sx={{ margin: 2 }}>Table</Button>
          <Button variant='outlined' sx={{ margin: 2 }}>Reset</Button>
        </Box>
      </Box>

      {/* <svg xmlns="http://www.w3.org/2000/svg"
        width={32}
        height={32}
        fill="currentColor"
        // class="bi bi-skip-backward-circle"
        viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
        <path d="M11.729 5.055a.5.5 0 0 0-.52.038L8.5 7.028V5.5a.5.5 0 0 0-.79-.407L5 7.028V5.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0V8.972l2.71 1.935a.5.5 0 0 0 .79-.407V8.972l2.71 1.935A.5.5 0 0 0 12 10.5v-5a.5.5 0 0 0-.271-.445z" />
      </svg> */}

      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        // xmlns:xlink="http://www.w3.org/1999/xlink"
        version="1.1"
        id="Capa_1" x="0px" y="0px"
        width={30}  height={30}
        viewBox="0 0 60 60" enableBackground="new 0 0 150 150" 
        xmlSpace="preserve"
        // width={512} height={512}
      >
        <g id="heart"
        >
          <path
            fill="#C03A2B" 
            d="M24.85,10.126c2.018-4.783,6.628-8.125,11.99-8.125c7.223,0,12.425,6.179,13.079,13.543  c0,0,0.353,1.828-0.424,5.119c-1.058,4.482-3.545,8.464-6.898,11.503L24.85,48L7.402,32.165c-3.353-3.038-5.84-7.021-6.898-11.503  c-0.777-3.291-0.424-5.119-0.424-5.119C0.734,8.179,5.936,2,13.159,2C18.522,2,22.832,5.343,24.85,10.126z" />
          <path
           fill="#ED7161"
            d="M6,18.078c-0.553,0-1-0.447-1-1c0-5.514,4.486-10,10-10c0.553,0,1,0.447,1,1s-0.447,1-1,1  c-4.411,0-8,3.589-8,8C7,17.631,6.553,18.078,6,18.078z" />
        </g>


        <rect x="0" y="0" width="10" height="10" fill="blue" />
      </svg> */}
    </Box>
  )
}

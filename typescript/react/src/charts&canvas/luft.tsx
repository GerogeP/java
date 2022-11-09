import Box from '@mui/material/Box';
import * as React from 'react';

export default function Luft(props: any) {


    return (
        <Box id='luft'
            sx={{ border: '1px dotted green' }}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                viewBox='0 0 1400 1400'
                x="0px" y="0px"
                enableBackground="new 0 0 160 160"
                xmlSpace="preserve"
            >
                {/* main axies of X, Y */}
                <path id="AxisX" d="M 200 1224 l 1100 0" stroke="black" strokeWidth="3" fill="none" />
                <path id="AxisY" d="M 200 100 l 0 1124" stroke="black" strokeWidth="3" fill="none" />

                {/* horizonal dotted lines */}
                <path id="horizon-128" d="M 200 1096 l 1024 0" stroke="grey" strokeWidth="2" strokeDasharray="5,5" fill="none" />
                <path id="horizon-256" d="M 200 968 l 1024 0" stroke="grey" strokeWidth="2" strokeDasharray="5,5" fill="none" />
                <path id="horizon-384" d="M 200 840 l 1024 0" stroke="grey" strokeWidth="2" strokeDasharray="5,5" fill="none" />
                <path id="horizon-512" d="M 200 712 l 1024 0" stroke="grey" strokeWidth="2" strokeDasharray="5,5" fill="none" />
                <path id="horizon-640" d="M 200 584 l 1024 0" stroke="grey" strokeWidth="2" strokeDasharray="5,5" fill="none" />
                <path id="horizon-768" d="M 200 456 l 1024 0" stroke="grey" strokeWidth="2" strokeDasharray="5,5" fill="none" />
                <path id="horizon-896" d="M 200 328 l 1024 0" stroke="grey" strokeWidth="2" strokeDasharray="5,5" fill="none" />
                <path id="horizon-1024" d="M 200 200 l 1024 0" stroke="grey" strokeWidth="2" strokeDasharray="5,5" fill="none" />

                {/* vertical dotted line */}
                <path id="vertical-32" d="M 456 200 l 0 1024" stroke="grey" strokeWidth="2" strokeDasharray="5,5" fill="none" />
                <path id="vertical-64" d="M 712 200 l 0 1024" stroke="grey" strokeWidth="2" strokeDasharray="5,5" fill="none" />
                <path id="vertical-96" d="M 968 200 l 0 1024" stroke="grey" strokeWidth="2" strokeDasharray="5,5" fill="none" />
                <path id="vertical-128" d="M 1224 200 l 0 1024" stroke="grey" strokeWidth="2" strokeDasharray="5,5" fill="none" />

                {/* X labels */}
                <g fontSize="30" fill="black" stroke="none"
                    textAnchor="middle">
                    <text x="456" y="1274" dx="0">32</text>
                    <text x="715" y="1274" dx="0">64</text>
                    <text x="968" y="1274" dx="0">96</text>
                    <text x="1224" y="1274" dx="0">128</text>
                </g>

                {/* Y labels */}
                <g fontSize="30" fill="black" stroke="none"
                    textAnchor="middle">
                    <text x="200" y="1096" dx="-60" dy="10">128</text>
                    <text x="200" y="968" dx="-60" dy="10">256</text>
                    <text x="200" y="840" dx="-60" dy="10">384</text>
                    <text x="200" y="712" dx="-60" dy="10">512</text>
                    <text x="200" y="584" dx="-60" dy="10">640</text>
                    <text x="200" y="456" dx="-60" dy="10">768</text>
                    <text x="200" y="328" dx="-60" dy="10">896</text>
                    <text x="200" y="200" dx="-60" dy="10">1024</text>
                </g>

                {/* <!-- Mark relevant points --> */}
                <g stroke="black" strokeWidth="3" fill="black">
                    <circle id="pointA" cx="200" cy="1224" r="10" fill='red' stroke='red' />
                    <circle id="pointA" cx="1224" cy="200" r="10" fill='red' stroke='red'/>
                </g>

                {/* curves */}
                <path d="M 200 1224  L 1224 200" stroke="red" strokeWidth="5" fill="none" />
                <path d="M 200 1224  Q 200 200 1224 200" stroke="blue" strokeWidth="5" fill="none" />
                
                <path id="lineAB" d="M 100 350 l 150 -300" stroke="red"
                    strokeWidth="3" fill="none" />
                <path id="lineBC" d="M 250 50 l 150 300" stroke="red"
                    strokeWidth="3" fill="none" />
                <path d="M 175 200 l 150 0" stroke="green" strokeWidth="3"
                    fill="none" />
                <path d="M 100 350 q 150 -300 300 0" stroke="blue"
                    strokeWidth="5" fill="none" />
                {/* <!-- Mark relevant points --> */}
                <g stroke="black" strokeWidth="3" fill="black">
                    <circle id="pointA" cx="100" cy="350" r="3" />
                    <circle id="pointB" cx="250" cy="50" r="3" />
                    <circle id="pointC" cx="400" cy="350" r="3" />
                </g>
                {/* <!-- Label the points --> */}
                <g fontSize="30" fill="black" stroke="none"
                    textAnchor="middle">
                    <text x="100" y="350" dx="-30">A</text>
                    <text x="250" y="50" dy="-10">B</text>
                    <text x="400" y="350" dx="30">C</text>
                </g>
            </svg>
           

        </Box>
    )
}
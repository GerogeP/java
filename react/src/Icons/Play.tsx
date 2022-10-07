import { setRef } from '@mui/material';
import * as React from 'react';

const GetSVG = ((play: boolean, size: number, fill: string) => {
    return (
        !play ?
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={size}
                height={size}
                fill="currentColor"
                // class="bi bi-skip-forward-circle"
                viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="7" fill={fill} />
                <polygon points="6.5, 6 6.5, 10 10.5, 8" fill="white" />
            </svg>
            :
            <svg
                // @click="player_or_pause"
                xmlns="http://www.w3.org/2000/svg"
                width={size}
                height={size}
                fill="currentColor"
                // class="bi bi-pause-circle" 
                viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M5 6.25a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5zm3.5 0a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5z" />
            </svg>)
})
const Play = ((props: any) => {
    // const theme = React.useContext(ThemeContext);
    // const working = React.useContext(workingcontext);

    const [size, setSize] = React.useState(props.size ? props.size : 250);




    return (
        <div        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={size}
                height={size}
                fill="currentColor"
                // class="bi bi-skip-forward-circle"
                viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="7" stroke='#000' fill='rgba(255,255,255,0)' />
                <polygon points="6.1, 5 6.1, 11 11.3, 8" fill="#000" />
            </svg>
        </div>)
})

export default Play
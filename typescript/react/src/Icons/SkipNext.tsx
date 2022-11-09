import * as React from 'react';

const SkipNext = ((props: any) => {
    const [size, setSize] = React.useState(props.size ? props.size : 250);

    return (
        <div        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={size}
                height={size}
                fill="currentColor"
                viewBox="0 0 16 16">

                {/* <circle cx="8" cy="8" r="7" stroke='#000' fill='rgba(255,255,255,0)' /> */}
                <line x1='11.2' y1='4' x2='11.3' y2='12' stroke='#000' />
                <polygon points="4, 5 4, 11 9.3, 8" stroke='#000' fill="#fff" />
            </svg>
        </div>)
})

export default SkipNext
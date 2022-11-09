import * as React from 'react';

const SkipPrevious = ((props: any) => {
    const [size, setSize] = React.useState(props.size ? props.size : 250);

    return (
        <div        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={size}
                height={size}
                fill="currentColor"
                viewBox="0 0 16 16">
                <line x1='5' y1='7' x2='5' y2='9' stroke='#000' stroke-width='2' />
                <polygon points="5, 8 8, 6 8, 10" stroke='#000' fill="#000" />
                <path d='M 10,5 A 8 8 0 0 1 10 11' stroke='#000' fill='#fff' />
            </svg>
        </div>)
})

export default SkipPrevious
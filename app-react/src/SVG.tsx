import * as React from 'react';

export default function SVG() {
    const size = 128;
    console.log(size / 2);

    return (
        <div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width={size}
                height={size}
                fill="currentColor"
                viewBox="0 0 100 100"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    width={size}
                    height={size}
                    viewBox="0 0 100 100"
                    xmlSpace="preserve"
                >
                    <circle cx="36" cy="36" r="35" fill="none" stroke="green" strokeWidth="2" />

                </svg>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    x={size / 4} y={size / 4}
                    width={size / 4} height={size / 4}
                    viewBox="0 0 50 50"
                    xmlSpace="preserve"
                >
                    <g id="heart"  >
                        <path
                            fill="#C03A2B"
                            d="M24.85,10.126c2.018-4.783,6.628-8.125,11.99-8.125c7.223,0,12.425,6.179,13.079,13.543 c0,0,0.353,1.828-0.424,5.119c-1.058,4.482-3.545,8.464-6.898,11.503L24.85,48L7.402,32.165c-3.353-3.038-5.84-7.021-6.898-11.503 c-0.777-3.291-0.424-5.119-0.424-5.119C0.734,8.179,5.936,2,13.159,2C18.522,2,22.832,5.343,24.85,10.126z" />
                        <path
                            fill="#ED7161"
                            d="M6,18.078c-0.553,0-1-0.447-1-1c0-5.514,4.486-10,10-10c0.553,0,1,0.447,1,1s-0.447,1-1,1 c-4.411,0-8,3.589-8,8C7,17.631,6.553,18.078,6,18.078z" />
                    </g>
                </svg>
            </svg>

            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={size}
                height={size}
                fill="currentColor"
                // class="bi bi-skip-forward-circle"
                viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="7" fill="green" />
                <polygon points="8,12  6,10 7,10 7,4 9,4 9,10 10,10" fill="white" />
            </svg>

            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={size}
                height={size}
                fill="currentColor"
                // class="bi bi-skip-forward-circle"
                viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="7" fill="green" />
                <polygon points="6.5, 6 6.5, 10 10.5, 8" fill="white" />
            </svg>

            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={size}
                height={size}
                fill="currentColor"
                // class="bi bi-skip-forward-circle"
                viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" fill="green" />
                <path d="M7 6 L7 10 L11 8z" fill="blue" />
            </svg>

            <svg
                xmlns="http://www.w3.org/2000/svg"
                // xmlns:xlink="http://www.w3.org/1999/xlink"
                version="1.1"
                id="Capa_1" x="0px" y="0px"
                width="30" height="30"
                viewBox="0 0 60 60" enableBackground="new 0 0 150 150"
                xmlSpace="preserve"
            // width={512} height={512}
            >
                <g id="heart"
                >
                    <path
                        fill="#C03A2B"
                        d="M24.85,10.126c2.018-4.783,6.628-8.125,11.99-8.125c7.223,0,12.425,6.179,13.079,13.543 c0,0,0.353,1.828-0.424,5.119c-1.058,4.482-3.545,8.464-6.898,11.503L24.85,48L7.402,32.165c-3.353-3.038-5.84-7.021-6.898-11.503 c-0.777-3.291-0.424-5.119-0.424-5.119C0.734,8.179,5.936,2,13.159,2C18.522,2,22.832,5.343,24.85,10.126z" />
                    <path
                        fill="#ED7161"
                        d="M6,18.078c-0.553,0-1-0.447-1-1c0-5.514,4.486-10,10-10c0.553,0,1,0.447,1,1s-0.447,1-1,1 c-4.411,0-8,3.589-8,8C7,17.631,6.553,18.078,6,18.078z" />
                </g>

                <rect x="0" y="0" width="10" height="10" fill="blue" />
            </svg>
        </div>
    )
}
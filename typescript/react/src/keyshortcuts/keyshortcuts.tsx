import useKeyPress from './useKeyPress';

export default function App() {
    const onKeyPress = (event: any) => {
        console.log(`key pressed: ${event.key}`);
    };

    useKeyPress(['a', 'b', 'c', ' '], onKeyPress);

    return (
        <div>
            <h1>Hello world</h1>
        </div>
    );
}
import React, { useCallback, useEffect } from 'react';

export default function KeyShortcutsTestall() {
    // handle what happens on key press
    const [keyvalue, setKeyvalue] = React.useState('');
    const handleKeyPress = useCallback((event: any) => {
        console.log(`Key pressed: ${event.key}`);
        setKeyvalue('+++++' + event.key + '+++++ is pressed!')
        event.key === ' ' && console.log('space pressed')
    }, []);

    useEffect(() => {
        // attach the event listener
        document.addEventListener('keydown', handleKeyPress);

        // remove the event listener
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, [handleKeyPress]);

    return (
        <div>
            <h1>Hello world, test all shortcuts</h1>
            <div>
                {keyvalue}
            </div>
        </div>
    );
}
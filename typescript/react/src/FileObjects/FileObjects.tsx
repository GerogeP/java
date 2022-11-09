import * as React from 'react';



const FileObjects = (() => {

    const showFileobject = ((event: React.MouseEvent<HTMLInputElement>) => {
        // console.log(event);
        console.log(event.target);
        // console.log(event.target.files);
        // console.log(event.target.files[0]);
    })

    return (
        <div>
            <input id='fileobject' type='file' name='file' onClick={showFileobject} />
        </div>
    )
});

export default FileObjects;
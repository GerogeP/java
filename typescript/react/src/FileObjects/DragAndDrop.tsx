import React from 'react';

const DragAndDrop = ((props: any) => {
  const { data, dispatch } = props;

  const handleDragEnter = ((event: any) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch({ type: 'SET_DROP_DEPTH', dropDepth: data.dropDepth + 1 });
  });

  const handleDragLeave = ((event: any) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch({ type: 'SET_DROP_DEPTH', dropDepth: data.dropDepth - 1 });
    if (data.dropDepth > 0) return
    dispatch({ type: 'SET_IN_DROP_ZONE', inDropZone: false })
  });

  const handleDragOver = ((event: any) => {
    event.preventDefault();
    event.stopPropagation();
    event.dataTransfer.dropEffect = 'copy';
    dispatch({ type: 'SET_IN_DROP_ZONE', inDropZone: true });
  });

  const handleDrop = ((event: any) => {
    event.preventDefault();
    event.stopPropagation();
    console.log('event : ', event);
    // console.log('event.target : ', event.target);
    console.log('event.dataTransfer : ', event.dataTransfer);
    console.log('event.dataTransfer.item : ', event.dataTransfer.item);
    console.log('event.dataTransfer.type : ', event.dataTransfer.type);
    console.log('event.dataTransfer.files : ', event.dataTransfer.files);

    let files = [...event.dataTransfer.files];
    const paths = files.map((file: any) => file.path);
    console.log('paths : ', paths);

    if (files && files.length > 0) {
      const existingFiles = data.fileList.map((f: any) => f.path + f.name)
      files = files.filter(f => !existingFiles.includes(f.name))

      dispatch({ type: 'ADD_FILE_TO_LIST', files });
      event.dataTransfer.clearData();
      dispatch({ type: 'SET_DROP_DEPTH', dropDepth: 0 });
      dispatch({ type: 'SET_IN_DROP_ZONE', inDropZone: false });
    }
  });




  return (
    <div
      className={data.inDropZone ? 'drag-drop-zone inside-drag-area' : 'drag-drop-zone'}
      onDrop={event => handleDrop(event)}
      onDragOver={event => handleDragOver(event)}
      onDragEnter={event => handleDragEnter(event)}
      onDragLeave={event => handleDragLeave(event)}
    >
      <p>Drag files here to upload</p>
    </div>
  );
});

export default DragAndDrop;

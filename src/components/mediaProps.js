export const protectedImageProps = {
  draggable: false,
  onDragStart: (event) => event.preventDefault(),
  onContextMenu: (event) => event.preventDefault(),
}

export const protectedVideoProps = {
  controlsList: 'nodownload noplaybackrate',
  disablePictureInPicture: true,
  onContextMenu: (event) => event.preventDefault(),
}

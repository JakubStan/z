const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];



const PHOTOS= [
    { id: "1", src:'photo1.jpg', width: 2080, height: 2080 },
    { id: "2", src:'photo2.jpg', width: 2080, height: 2080 },
    { id: "2", src:'photo3.jpg', width: 2080, height: 2080 },
    { id: "4", src:'photo4.jpg', width: 2080, height: 2080 },
    { id: "6", src:'photo6.png', width: 2080, height: 2080 },
    { id: "5", src:'photo5.png', width: 2080, height: 2080 },
];

const photos = PHOTOS.map((photo) => ({
    src:photo.src, 
    width: photo.width,
    height: photo.height,
    srcSet: breakpoints.map((breakpoint) => {
        const height = Math.round((photo.height / photo.width) * breakpoint);
        return {
            src:photo.src,
            width: breakpoint,
            height,
        };
    }),
}));

export default photos;
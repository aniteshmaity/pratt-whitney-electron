import React, { useRef, useState, useEffect } from 'react';

const VideoThumbnailGenerator = React.memo(({ videoFile }) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [thumbnail, setThumbnail] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleLoadedMetadata = () => {
    const video = videoRef.current;
    if (video) {
      video.currentTime = 2; // Seek to 1 second for thumbnail
    }
  };

  const handleCanPlay = () => {
  videoRef.current.currentTime = 2;
};

  const handleSeeked = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (!video || !canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const imageDataURL = canvas.toDataURL('image/png');
    setThumbnail(imageDataURL);
       setLoading(false);
  };

  // 🔧 Check if the videoFile is a URL string or a File object
  const videoURL =
    typeof videoFile === 'string'
      ? videoFile
      : URL.createObjectURL(videoFile);

  // 🔁 Cleanup URL object if it's a File to avoid memory leak
  useEffect(() => {
    return () => {
      if (typeof videoFile !== 'string') {
        URL.revokeObjectURL(videoURL);
      }
    };
  }, [videoFile]);

  return (
    <div className="w-full  h-[60px] object-cover" >
      {!thumbnail && (
        <>
          <video
             ref={videoRef}
  src={videoURL}
 playsInline
  preload="auto"
  onCanPlay={handleCanPlay}
  onSeeked={handleSeeked}
  style={{ display: 'none' }}
          />
          <canvas ref={canvasRef} style={{ display: 'none' }} />
        </>
      )}

      {loading ? (
           <div className="w-full h-full bg-gray-300 animate-pulse" />
       
      ) : ( <>
        <img
          src={thumbnail}
          alt="Generated thumbnail"
          className="w-full  h-[60px] object-cover" 
        />
         <div className="absolute inset-0 flex justify-center items-center cursor-pointer"><button className="bg-black bg-opacity-50 p-2 rounded-full text-white"><svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-5.197-3.03A1 1 0 008 9.03v5.94a1 1 0 001.555.832l5.197-3.03a1 1 0 000-1.664z"></path></svg></button></div></>)}
    </div>
  );
});

export default VideoThumbnailGenerator;
import React, { useRef, useState, useEffect } from 'react';

export default function VideoThumbnailGenerator({ videoFile }) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [thumbnail, setThumbnail] = useState(null);

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

      {thumbnail && (
        <img
          src={thumbnail}
          alt="Generated thumbnail"
          className="w-full  h-[60px] object-cover" 
        />
      )}
    </div>
  );
}

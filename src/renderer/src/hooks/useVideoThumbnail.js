import { useEffect, useState } from "react";

const useVideoThumbnail = (videoUrl, seekTime = 0.3) => {
  const [thumbnail, setThumbnail] = useState(null);

  useEffect(() => {
    if (!videoUrl) return;

    console.log("🚀 Creating thumbnail for:", videoUrl);

    const video = document.createElement("video");
    video.crossOrigin = "anonymous"; // Important for CORS
    video.src = videoUrl;
    video.muted = true;
    video.playsInline = true;

    video.addEventListener("loadedmetadata", () => {
      console.log("✅ Metadata loaded");
      video.currentTime = seekTime;
    });

    video.addEventListener("seeked", () => {
      console.log("🎯 Seeked to time:", video.currentTime);
      const canvas = document.createElement("canvas");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      if (canvas.width === 0 || canvas.height === 0) {
        console.error("❌ Video has zero width/height");
        return;
      }

      const ctx = canvas.getContext("2d");
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      const image = canvas.toDataURL("image/png");
      console.log("📸 Thumbnail generated");
      setThumbnail(image);
    });

    video.addEventListener("error", (e) => {
      console.error("❌ Video error", e);
    });

    return () => {
      video.remove();
    };
  }, [videoUrl, seekTime]);

  return thumbnail;
};

export default useVideoThumbnail;

import {useEffect, useRef, useState} from 'react';

type VideoPlayerProps = {
  previewImage: string;
  src: string;
  autoPlay: boolean;
  muted: boolean;
  isActive: boolean;
  width: string;
}

function VideoPlayer({previewImage, src, autoPlay, muted, isActive, width}: VideoPlayerProps): JSX.Element {
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current !== null) {
      muted ? videoRef.current.muted = true : videoRef.current.muted = false;
    }

    return () => {
      if (videoRef.current !== null) {
        videoRef.current.onloadeddata = null;
        videoRef.current = null;
      }
    };
  }, [muted, src]);

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    if (isPlaying) {
      videoRef.current.play();
      return;
    }
    videoRef.current.load();
  });

  useEffect(() => {
    isActive ? setIsPlaying(true) : setIsPlaying(false);
  }, [isActive]);

  return (
    <video src={src} ref={videoRef} poster={previewImage} width={width}/>
  );
}

export default VideoPlayer;

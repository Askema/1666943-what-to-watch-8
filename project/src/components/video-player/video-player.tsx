import {useEffect, useRef, useState} from 'react';

const VIDEO_TIMEOUT = 1000;

type VideoPlayerProps = {
  previewImage: string;
  src: string;
  autoPlay: boolean;
  muted: boolean;
  isActive: boolean;
}

function VideoPlayer({previewImage, src, autoPlay, muted, isActive}: VideoPlayerProps): JSX.Element {
  const [, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current !== null) {
      videoRef.current.onloadeddata = () => setIsLoading(false);
    }

    return () => {
      if (videoRef.current !== null) {
        videoRef.current.onloadeddata = null;
        videoRef.current = null;
      }
    };
  }, [src]);

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    if (isPlaying) {
      setTimeout(() => {
        if (videoRef.current !== null) {
          videoRef.current.play();
        }
      }, VIDEO_TIMEOUT);

      return;
    }

    videoRef.current.load();

  }, [isPlaying]);

  useEffect(() => {
    isActive ? setIsPlaying(true) : setIsPlaying(false);
  }, [isActive]);

  useEffect(() => {
    if (videoRef.current !== null) {
      muted ? videoRef.current.muted = true : videoRef.current.muted = false;
    }

  }, [muted]);

  return (
    <video src={src} ref={videoRef} poster={previewImage} />
  );
}

export default VideoPlayer;

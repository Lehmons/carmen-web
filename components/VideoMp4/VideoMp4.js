import React, { useRef, useState, useEffect } from "react";
import VideoMp4Styles from "./VideoMp4.styled";
import { useInView } from "react-intersection-observer";
import useWindowSize from "~/lib/useWindowSize";
import { motion } from "framer-motion";

export default React.memo(function VideoMp4({
  autoplay = true,
  className = "",
  style = { width: "100%" },
  loop = false,
  muted = false,
  playsinline,
  showControls = false,
  onClick,
  asset,
  onAttached,
  onMetaDataLoaded,
  onPan,
  onPlay,
  onPause,
}) {
  const isMountedRef = useRef(null);
  const { viewportW } = useWindowSize();
  const [isLowPowerMode, setIsLowPowerMode] = useState(false);
  const [ref, inView] = useInView({
    /* Optional options */
    threshold: 0,
    rootMargin: "500px",
    triggerOnce: false,
  });

  const video = useRef();
  const timeout = useRef();
  const container = useRef();
  const lastStartPosition = useRef();
  const lastDuration = useRef();
  const [errors, setErrors] = useState();
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const setup = async () => {
    if (!isMountedRef.current) {
      return;
    }
    addVideoEventListeners(video.current);
  };

  const handleVideoClick = (e) => {
    if (onClick) {
      onClick(e);
    }
  };

  function handleVideoEvent(evt) {
    let data = "";
    switch (evt.type) {
      case "suspend":
      // setIsDataLoaded(false);
      case "durationchange":
        if (evt.target.duration - lastDuration <= 0.5) {
          // some browsers report several duration change events with almost the same value ... avoid spamming video events
          return;
        }
        lastDuration.current = evt.target.duration;
        data = Math.round(evt.target.duration * 1000);
        break;
      case "resize":
        data = evt.target.videoWidth + "/" + evt.target.videoHeight;
        break;
      case "loadedmetadata":
        onMetaDataLoaded?.();
      case "loadeddata":
      case "canplay":
      case "canplaythrough":
      case "ended":
      case "seeking":
      case "seeked":
      case "play":
        setIsLowPowerMode(false);
      case "playing":
        lastStartPosition.current = evt.target.currentTime;
      case "pause":
      case "waiting":
      case "stalled":
      case "suspend":
        setIsLowPowerMode(true);
      case "timeupdate":
        clearTimeout(timeout.current);
        if (viewportW < 750) {
          timeout.current = setTimeout(() => {
            setIsDataLoaded(true);
          }, 1000);
        } else {
          timeout.current = setTimeout(() => {
            setIsDataLoaded(true);
          }, 750);
        }
      case "error":
        data = Math.round(evt.target.currentTime * 1000);
        if (evt.type === "error") {
          let errorTxt;
          const mediaError = evt.currentTarget.error;
          switch (mediaError.code) {
            case mediaError.MEDIA_ERR_ABORTED:
              errorTxt = "You aborted the video playback";
              break;
            case mediaError.MEDIA_ERR_DECODE:
              errorTxt =
                "The video playback was aborted due to a corruption problem or because the video used features your browser did not support";
              handleMediaError();
              break;
            case mediaError.MEDIA_ERR_NETWORK:
              errorTxt =
                "A network error caused the video download to fail part-way";
              break;
            case mediaError.MEDIA_ERR_SRC_NOT_SUPPORTED:
              errorTxt =
                "The video could not be loaded, either because the server or network failed or because the format is not supported";
              break;
          }

          if (mediaError.message) {
            errorTxt += " - " + mediaError.message;
          }

          console.error(errorTxt);
        }
        break;
      default:
        break;
    }
  }

  const addVideoEventListeners = (elem) => {
    elem.removeEventListener("resize", handleVideoEvent);
    elem.removeEventListener("seeking", handleVideoEvent);
    elem.removeEventListener("seeked", handleVideoEvent);
    elem.removeEventListener("pause", handleVideoEvent);
    elem.removeEventListener("play", handleVideoEvent);
    elem.removeEventListener("canplay", handleVideoEvent);
    elem.removeEventListener("canplaythrough", handleVideoEvent);
    elem.removeEventListener("ended", handleVideoEvent);
    elem.removeEventListener("playing", handleVideoEvent);
    elem.removeEventListener("error", handleVideoEvent);
    elem.removeEventListener("loadedmetadata", handleVideoEvent);
    elem.removeEventListener("loadeddata", handleVideoEvent);
    elem.removeEventListener("durationchange", handleVideoEvent);
    elem.addEventListener("resize", handleVideoEvent);
    elem.addEventListener("seeking", handleVideoEvent);
    elem.addEventListener("seeked", handleVideoEvent);
    elem.addEventListener("pause", handleVideoEvent);
    elem.addEventListener("play", handleVideoEvent);
    elem.addEventListener("canplay", handleVideoEvent);
    elem.addEventListener("canplaythrough", handleVideoEvent);
    elem.addEventListener("ended", handleVideoEvent);
    elem.addEventListener("playing", handleVideoEvent);
    elem.addEventListener("error", handleVideoEvent);
    elem.addEventListener("loadedmetadata", handleVideoEvent);
    elem.addEventListener("loadeddata", handleVideoEvent);
    elem.addEventListener("durationchange", handleVideoEvent);
    elem.addEventListener("suspend", handleVideoEvent);
  };

  useEffect(() => {
    isMountedRef.current = true;
    if (isMountedRef.current) {
      setup();
      if (onAttached) {
        onAttached({ video: video.current });
      }
    }
    return () => (isMountedRef.current = false);
  }, []);

  useEffect(() => {
    if (errors) {
      console.error(errors);
    }
    return () => clearTimeout(timeout.current);
  }, [errors]);

  return (
    <VideoMp4Styles
      ref={container}
      className={`${className} video-container ${
        isDataLoaded ? "is-data-loaded" : "is-not-data-loaded"
      } ${isLowPowerMode ? "is-low-power-mode" : "is-not-low-power-mode"}`}
      style={style}
    >
      <motion.section onPan={onPan} ref={ref}>
        <video
          className={`${className || ""}`}
          onClick={handleVideoClick}
          controls={showControls}
          playsInline={playsinline}
          muted={autoplay || muted}
          autoPlay={autoplay}
          poster="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
          ref={video}
          src={`https://stream.mux.com/${asset?.data?.playback_ids?.[0]?.id}/medium.mp4`} // we can lso
          loop={loop}
        ></video>
        {asset?.data?.playback_ids?.[0]?.id ? (
          <img
            src={`https://image.mux.com/${asset?.data?.playback_ids?.[0]?.id}/thumbnail.jpg?time=0`}
            alt="loading"
          />
        ) : null}
      </motion.section>
    </VideoMp4Styles>
  );
});

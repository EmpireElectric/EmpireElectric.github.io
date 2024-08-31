import { useRef } from "react";

function Video(props) {
    const videoRef = useRef()

    const setPlayback = () => {
        videoRef.current.playbackRate = 0.7
    }

    return (
        <>
        <video onPlay={() => {setPlayback()}} ref={videoRef} src={process.env.PUBLIC_URL + '/BannerVideo.mov'} className={"fixed top-0 -z-20 w-auto min-w-full min-h-full max-w-none"} loop autoPlay muted playsInline>
        </video>
        <div className="fixed inset-0 bg-black/70 -z-10"/>
        </>
    );
}

export default Video;



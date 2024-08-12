import {useRef} from "react";

function Video(props) {

    const videoRef = useRef()

    const setPlayback = () => {
        videoRef.current.playbackRate = 0.75
    }

    return (
        <>
            <video className={"hidden md:block 4xl:rounded-lg w-full max-w-screen-3xl mx-auto"} ref={videoRef} onPlay={() => {
                setPlayback()
            }} loop autoPlay muted playsInline>
                <source className={"max-w-screen-3xl"} src={process.env.PUBLIC_URL + '/BannerVideoThin.mov'}
                        type="video/mp4"/>
            </video>
            <video className={"md:hidden w-full"} ref={videoRef} onPlay={() => {
                setPlayback()
            }} loop autoPlay muted playsInline>
                <source src={process.env.PUBLIC_URL + '/BannerVideo.mov'}
                        type="video/mp4"/>
            </video>
        </>
    );
}

export default Video;



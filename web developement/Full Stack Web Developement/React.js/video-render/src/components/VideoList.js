import "./VideoList.css";
import Video from "./Video";
import Button from "./Button";
import useVideos from "../hooks/Videos";
import largeData from '../data/largeData';
import { useCallback, useDeferredValue, useMemo } from "react";
// import axios from 'axios';
import useVideoDispatch from "../hooks/VideoDispatch";

function VideoList({ editVideo }) {
    const videos = useVideos();
    const dispatch = useVideoDispatch();
    const defVideos = useDeferredValue(videos); // use old value of videos until largeData is fully loaded
    function handleClick() {
        dispatch({ type: 'LOAD', payload: largeData });
    }
    // install axios fom npm for it to work
    // const url = "https://my.api.mockaroo.com/videos.json?key=057515a0";
    // useEffect(() => {
    //     async function getVideos() {
    //         const res = await axios.get(url);
    //         dispatch({ type: 'LOAD', payload: res.data });
    //     }
    //     getVideos();
    // }, [dispatch])
    const pause = useCallback(() => console.log("Paused video"), []);
    const play = useCallback(() => console.log("Playing video"), []);
    const playButton = useMemo(() => (
        <Button onPlay={play} onPause={pause}> play </Button>
    ), [pause, play])
    return (
        <div className="videos">
            {
                defVideos.map(video => <Video
                    key={video.id}
                    title={video.title}
                    views={video.views}
                    channel={video.channel}
                    time={video.time}
                    verifiedChannel={video.verifiedChannel}
                    id={video.id}
                    editVideo={editVideo}>
                    {playButton}
                </Video>
                )
            }
            <button onClick={handleClick}>Get More Videos</button>
        </div>
    )
}

export default VideoList;
import { useEffect, useRef, useState } from "react";
import "./AddVideo.css";
import useVideoDispatch from "../hooks/VideoDispatch";

const initialState = {
    title: "",
    channel: "",
    views: "10",
    time: "1 second",
    verifiedChannel: false
}

function AddVideo({ editableVideo }) {
    const [video, setVideo] = useState(initialState);
    const dispatch = useVideoDispatch();
    const titleRef = useRef(null); // useRef as DOM
    function handleClick(e) {
        e.stopPropagation();
        e.preventDefault();
        if (editableVideo) {
            dispatch({ type: 'UPDATE', payload: video });
        } else {
            dispatch({ type: 'ADD', payload: video });
        }
        setVideo(initialState);
    }

    function handleChange(e) {
        setVideo({
            ...video,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => { // executes after rendering
        if (editableVideo) {
            setVideo(editableVideo);
        }
        // titleRef.current.value = "XYZ";
        titleRef.current.focus(); // cursor at entry of website
        // return ()=>{}; // return cleanup function
    }, [editableVideo]) // second argument is the changable entity array
    // when any element of this array changes callback function (first argument) of useEffect executes

    return (
        <form>
            <h4>{editableVideo ? 'Edit a' : 'Add new'} video</h4>
            <input ref={titleRef} type="text" name="title" placeholder="Video Title" onChange={handleChange} value={video.title}></input>
            <input type="text" name="channel" placeholder="Channel Name" onChange={handleChange} value={video.channel}></input>
            <button onClick={handleClick}>{editableVideo ? 'Edit' : 'Add'} Video</button>
        </form>
    )
}

export default AddVideo;
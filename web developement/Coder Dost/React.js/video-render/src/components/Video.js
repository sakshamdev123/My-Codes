import { useContext, memo } from 'react';
import './Video.css';
import ThemeContext from '../context/ThemeContext';
import useVideoDispatch from '../hooks/VideoDispatch';
let NA = "Not Available";
const Video = memo(function Video({ id, channel = { NA }, views = { NA }, time = { NA }, title = { NA },
    verifiedChannel = false, children, editVideo = null }) {
    const theme = useContext(ThemeContext);
    const dispatch = useVideoDispatch(); //Custom hook
    return (
        <div className={`video ${theme}`}>
            <button className="close" onClick={() => dispatch({ type: 'DELETE', payload: id })}>X</button>
            <button className={`edit ${theme}`} onClick={() => editVideo(id)}>Edit</button>
            <img src="pX5L14.jpg" height={150} width={200} alt={NA}></img>
            <div className="videoTitle">{title}</div>
            <div className="channelName">{channel}{verifiedChannel ? '✔️' : null}</div>
            <div className="viewsTime">
                {views} <span>.</span> {time} ago
            </div>
            {children}
        </div>
    );
})

export default Video;
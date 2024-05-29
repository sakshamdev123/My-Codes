import { useContext } from "react";
import VideoDispatchContext from "../context/VideoDispatchContext";

function useVideoDispatch() { // custom hook
    return useContext(VideoDispatchContext);
}

export default useVideoDispatch;
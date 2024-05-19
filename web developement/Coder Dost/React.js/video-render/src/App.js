import { useCallback, useReducer, useState } from 'react';
import './App.css';
import AddVideo from './components/AddVideo';
import VideoList from './components/VideoList';
import ThemeContext from './context/ThemeContext';
import VideosContext from './context/VideosContext';
import videosDB from './data/data';
import VideoDispatchContext from './context/VideoDispatchContext';

function App() {
  const [theme, setTheme] = useState('darkMode');
  const [editableVideo, setEditableVideo] = useState(null);
  const [videos, dispatch] = useReducer(videoReducer, videosDB);
  function videoReducer(videos, action) {
    switch (action.type) {
      case 'LOAD':
        return action.payload;
      case 'ADD':
        return [...videos,
        {
          id: videos.length + 1,
          ...action.payload
        }
        ];
      case 'DELETE':
        return videos.filter(video => video.id !== action.payload);
      case 'UPDATE':
        const index = videos.findIndex(v => v.id === action.payload.id);
        const newVideos = [...videos];
        newVideos.splice(index, 1, action.payload);
        setEditableVideo(null);
        return newVideos;
      default:
        console.log('Error');
        return videos;
    }
  }
  const editVideo = useCallback(function editVideo(id) {
    setEditableVideo(videos.find(video => video.id === id));
  },[videos]);
  return (
    <div className="App">
      <ThemeContext.Provider value={theme}>
        <VideosContext.Provider value={videos}>
          <VideoDispatchContext.Provider value={dispatch}>
            <header className={`App-header ${theme}`}>
              <button className={`button ${theme}`}
                onClick={() => setTheme(theme === 'darkMode' ? 'lightMode' : 'darkMode')}>Mode</button>
              <AddVideo editableVideo={editableVideo}></AddVideo>
              Video List
              <VideoList editVideo={editVideo}></VideoList>
            </header >
          </VideoDispatchContext.Provider>
        </VideosContext.Provider>
      </ThemeContext.Provider>
    </div >
  );
}

export default App;

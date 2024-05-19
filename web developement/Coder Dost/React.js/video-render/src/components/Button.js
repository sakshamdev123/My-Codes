import { useContext, useState, memo } from 'react';
import './Button.css';
import ThemeContext from '../context/ThemeContext';

const Button = memo(function Button({ children, onPlay, onPause }) { // memoised component does not rerender unless its props are changed
    const theme = useContext(ThemeContext);
    const [playingStatus, setPlayingStatus] = useState(false);
    function handleClick(e) {
        e.stopPropagation(); // Stops event bubbling
        playingStatus ? onPause() : onPlay();
        setPlayingStatus(!playingStatus);
    }

    return <button className={theme} onClick={handleClick}>{children} {playingStatus ? 'Playing' : 'Paused'}</button>
});

export default Button;
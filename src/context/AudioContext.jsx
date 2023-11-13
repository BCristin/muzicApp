import { createContext, useState } from 'react';
import tracksList from '../assets/tracksList';
const audio = new Audio();
console.log(audio);
export const AudioContext = createContext({});
export const AudioProvider = ({ children }) => {
	const [currentTrack, setCurrentTrack] = useState(tracksList[0]);
	const [isPlaying, setPlaying] = useState(false);
	const handleToggleAudio = (track) => {
		if (currentTrack.id !== track.id) {
			setCurrentTrack(track);
			setPlaying(true);
			audio.src = track.src;
			audio.currentTime = 0;
			audio.play();
			console.dir(audio);

			return;
		}
		if (isPlaying) {
			audio.pause();
			console.log(audio);

			setPlaying(false);
		} else {
			audio.play();
			console.log(audio);

			setPlaying(true);
		}
	};

	const value = { currentTrack, isPlaying, handleToggleAudio };

	return <AudioContext.Provider value={value}>{children}</AudioContext.Provider>;
};

import React, { FC, ReactNode, createContext, useState } from 'react';
import tracksList from '../assets/tracksList';
const defaultValue = tracksList[0];
const audio = new Audio(defaultValue.src);

interface IAudioContext {
	audio: HTMLAudioElement;
	handleToggleAudio: (track: any) => void;
	isPlaying: boolean;
	currentTrack: {
		id: number;
		src: string;
		preview: string;
		duration: number;
		title: string;
		artists: string;
	};
}

export const AudioContext = createContext<IAudioContext>({
	audio: audio,
	handleToggleAudio: (track) => {},
	isPlaying: false,
	currentTrack: {
		id: 0,
		src: 'string',
		preview: 'string',
		duration: 1,
		title: 'string',
		artists: 'string',
	},
});

interface ChildComponentProps {
	children?: ReactNode | ReactNode[];
}
export const AudioProvider: FC<ChildComponentProps> = ({ children }) => {
	const [currentTrack, setCurrentTrack] = useState(defaultValue);
	// audio.src = tracksList[0].src;

	const [isPlaying, setPlaying] = useState(false);
	const handleToggleAudio = (track) => {
		if (currentTrack.id !== track.id) {
			setCurrentTrack(track);
			setPlaying(true);
			audio.src = track.src;
			audio.currentTime = 0;
			audio.play();

			return;
		}
		if (isPlaying) {
			audio.pause();
			setPlaying(false);
		} else {
			audio.play();
			setPlaying(true);
		}
	};

	const value = { audio, currentTrack, isPlaying, handleToggleAudio };

	return <AudioContext.Provider value={value}>{children}</AudioContext.Provider>;
};

import { Pause, PlayArrow } from '@mui/icons-material';
import { IconButton, Slider } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { AudioContext } from '../../context/AudioContext';
import secondsToMMSS from '../../utils/secondsToMMSS';
import styles from './playbar.module.scss';

const TimeControls = () => {
	const { audio, currentTrack } = useContext(AudioContext);

	const [currentTime, setCurrentTime] = useState(0);
	const { duration } = currentTrack;

	const formattedCurrentTime = secondsToMMSS(currentTime);
	const sliderCurrentTime = Math.round((currentTime / duration) * 1000);

	const handlerChangeCurrentTime = (_, value) => {
		const time = Math.round((value / 1000) * duration);
		setCurrentTime(time);
		audio.currentTime = time;
	};
	useEffect(() => {
		const timeInterval = setInterval(() => {
			setCurrentTime(audio.currentTime);
			console.log('interval');
		}, 1000);
		return () => {
			clearInterval(timeInterval);
		};
	}, []);
	return (
		<>
			<p>{formattedCurrentTime}</p>
			<Slider
				step={10}
				min={0}
				max={1000}
				value={sliderCurrentTime}
				onChange={handlerChangeCurrentTime}
			/>
		</>
	);
};
export const Playbar = () => {
	const { handleToggleAudio, isPlaying, currentTrack } = useContext(AudioContext);

	const { title, artists, preview, duration } = currentTrack;
	const formattedDuration = secondsToMMSS(duration);

	return (
		<div className={styles.playbar}>
			<img src={preview} alt="" className={styles.preview} />
			<IconButton onClick={() => handleToggleAudio(currentTrack)}>
				{isPlaying ? <Pause /> : <PlayArrow />}
			</IconButton>
			<div className={styles.credits}>
				<h4>{title}</h4>
				<p>{artists}</p>
			</div>
			<div className={styles.slider}>
				<TimeControls />
				<p>{formattedDuration}</p>
			</div>
		</div>
	);
};

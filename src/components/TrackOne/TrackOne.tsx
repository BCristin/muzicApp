import { Pause, PlayArrow } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import classNames from 'classnames';
import React, { useContext } from 'react';
import { AudioContext } from '../../context/AudioContext';
import secondsToMMSS from '../../utils/secondsToMMSS';
import styles from './trackOne.module.scss';

export const TrackOne = (track) => {
	const { id, src, preview, title, artists, duration } = track;
	const { handleToggleAudio, isPlaying, currentTrack } = useContext(AudioContext);
	const formattedDuration = secondsToMMSS(duration);
	const isCurrentTrack = currentTrack.id === track.id;
	return (
		<div className={classNames(styles.track, isCurrentTrack ? styles.playing : '')}>
			<IconButton onClick={() => handleToggleAudio(track)}>
				{!isPlaying || !isCurrentTrack ? <PlayArrow /> : <Pause />}
			</IconButton>
			<img src={preview} alt="" className={styles.preview} />
			<div className={styles.credits}>
				<b>{title}</b>
				<p>{artists}</p>
			</div>
			<p>{formattedDuration}</p>
		</div>
	);
};

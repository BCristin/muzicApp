import { Input } from '@mui/material';
import { useState } from 'react';
import tracksList from '../../assets/tracksList';
import { TrackOne } from '../../components/TrackOne/TrackOne';
import styles from './mainPage.module.scss';

const runSearch = (query) => {
	if (!query) {
		return tracksList;
	}
	const lowerCaseQuery = query.toLowerCase();
	return (
		tracksList.filter((track) => track.title.toLowerCase().includes(lowerCaseQuery)) ||
		tracksList.filter((track) => track.artists.toLowerCase().includes(lowerCaseQuery))
	);
};
export const MainPage = () => {
	const [tracks, setTracks] = useState(tracksList);
	const handleChange = (e) => {
		setTracks(runSearch(e.target.value));
	};
	return (
		<div className={styles.search}>
			<Input className={styles.input} onChange={handleChange} placeholder="search track"></Input>
			<div className={styles.list}>
				{tracks.map((track) => {
					return <TrackOne key={track.id} {...track}></TrackOne>;
				})}
			</div>
		</div>
	);
};

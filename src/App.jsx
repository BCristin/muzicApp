import { Playbar } from './components/Playbar/Playbar';
import styles from './global.module.scss';
import { MainPage } from './page/MainPage/MainPage';

export const App = () => {
	return (
		<div className={styles.wrapper}>
			<MainPage></MainPage>
			<Playbar></Playbar>
		</div>
	);
};

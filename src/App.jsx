import styles from './global.module.scss';
import { MainPage } from './page/MainPage/MainPage';

export const App = () => {
	return (
		<div className={styles.wrapper}>
			<MainPage></MainPage>
		</div>
	);
};

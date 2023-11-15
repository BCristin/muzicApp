import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import { AudioProvider } from './context/AudioContext.tsx';

const root = document.getElementById('root');
if (root) {
	ReactDOM.createRoot(root).render(
		<AudioProvider>
			<App />
		</AudioProvider>,
	);
}

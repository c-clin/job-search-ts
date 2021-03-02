import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './styles/main.scss';
import reportWebVitals from './reportWebVitals';
import { JobProvider } from './context/JobContext';

ReactDOM.render(
	<React.StrictMode>
		<JobProvider>
			<App />
		</JobProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

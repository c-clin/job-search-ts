import React from 'react';
import JobBoard from './JobBoard';
import Search from './Search';
import { useJob } from './context/JobContext';
import Header from './Header';

const App: React.FC = () => {
	const { state: jobstate, dispatch } = useJob();
	return (
		<div className="App">
			<Header />
			<Search dispatch={dispatch} />
			<JobBoard jobs={jobstate} />
		</div>
	);
};

export default App;

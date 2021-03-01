import React from 'react';
import JobBoard from './JobBoard';
import { JobProvider } from './context/JobContext';

const App: React.FC = () => {
	return (
		<JobProvider>
			<div className="App">
				<h1>search</h1>
				<JobBoard />
			</div>
		</JobProvider>
	);
};

export default App;

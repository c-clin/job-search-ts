import React from 'react';
import Job from './Job';
import { JobProvider, useJob } from './context/JobContext';

const JobBoard: React.FC = () => {
	const { state: jobstate, dispatch } = useJob();

	return (
		<div>
			<h1>Job board</h1>
			<Job />
		</div>
	);
};

export default JobBoard;

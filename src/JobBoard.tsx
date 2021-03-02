import React from 'react';
import Job from './Job';
import { jobState } from './reducers/jobReducer';

interface JobBoardProps {
	jobs: jobState;
}

const JobBoard: React.FC<JobBoardProps> = ({ jobs }) => {
	return (
		<div className="JobBoard">
			{jobs.loading ? (
				<h2>Loading...</h2>
			) : (
				<div className="JobBoard__container">
					{jobs.jobs.map((job) => (
						<Job key={job.id} job={job} />
					))}
				</div>
			)}
		</div>
	);
};

export default JobBoard;

import React from 'react';
import { JobProps } from './reducers/jobReducer';

interface JobInterface {
	job: JobProps;
}

const Job: React.FC<JobInterface> = ({ job }) => {
	return (
		<div className="Job">
			<img src={job.company_logo} />
			<div className="Job__header">
				<h3></h3>
				<h3>{job.type}</h3>
			</div>
			<h2>{job.title}</h2>
			<h3>{job.company}</h3>

			<h4>{job.location}</h4>
		</div>
	);
};

export default Job;

import React, { createContext, useReducer } from 'react';
import { jobReducer, jobState, jobActions } from '../reducers/jobReducer';

const initialState = {
	loading: false,
	error: null,
	jobs: [],
	status: null
};

interface ContextType {
	state: jobState;
	dispatch: React.Dispatch<any>;
}

const JobContext = createContext<ContextType | null>(null);
JobContext.displayName = 'JobContext';

interface childrenProps {
	children: React.ReactNode;
}

function JobProvider({ children }: childrenProps) {
	const [state, dispatch] = useReducer(jobReducer, initialState);

	const value = { state, dispatch };

	return (
		<JobContext.Provider value={value as ContextType}>
			{children}
		</JobContext.Provider>
	);
}

function useJob() {
	const context = React.useContext(JobContext);
	if (!context) {
		throw Error('useJob must be used within JobProvider');
	}

	return context;
}

export { JobProvider, useJob };

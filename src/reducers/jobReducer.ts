export interface JobProps {
	id: string;
	type: string;
	url: string;
	created_at: string;
	company: string;
	company_url: string;
	location: string;
	title: string;
	description: string;
}

export interface jobState {
	error: null | string;
	jobs: JobProps[];
	status: string | null;
	loading: boolean;
}

export type jobActions =
	| { type: 'start search'; loading: boolean }
	| { type: 'search successful'; jobs: [] }
	| { type: 'search failed'; error: string };

const jobReducer = function useReducer(state: jobState, action: jobActions) {
	switch (action.type) {
		case 'start search':
			return {
				...state,
				loading: true
			};
		case 'search successful':
			return {
				...state
			};
		case 'search failed':
			return {
				...state,
				error: action.error
			};
		default: {
			throw new Error(`Unhandled action type`);
		}
	}
};

export { jobReducer };

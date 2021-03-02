import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface SearchProps {
	dispatch: React.Dispatch<any>;
}

const Search: React.FC<SearchProps> = ({ dispatch }) => {
	const [state, setState] = useState({
		inputTerm: '',
		checked: false
	});
	const { inputTerm, checked } = state;

	const [searchTerm, setSearchTerm] = useState('');

	useEffect(() => {
		dispatch({ type: 'start search', loading: true });
		axios
			.get(
				`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${searchTerm}&full_time=${checked}`
			)
			.then((res) => {
				console.log(res);
				dispatch({ type: 'search successful', jobs: res.data });
			});
	}, [searchTerm]);

	function onSubmit() {
		if (!inputTerm) {
			return;
		}

		setSearchTerm(inputTerm);
	}

	return (
		<div className="Search">
			<div className="search-container">
				<input
					value={inputTerm}
					onChange={(e) => setState({ ...state, inputTerm: e.target.value })}
					className="search-container__input"
					id="search"
					placeholder="Filter by title, companies, expertise.."
				/>
				<div className="search-container__checkbox">
					<input
						type="checkbox"
						checked={checked}
						onChange={(e) => setState({ ...state, checked: e.target.checked })}
					/>
					<span>Full-Time Only</span>
				</div>

				<div className="search-container__button">
					<button onClick={onSubmit}>Search</button>
				</div>
			</div>
		</div>
	);
};

export default Search;

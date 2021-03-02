import React, { useState } from 'react';
import Switch from 'react-switch';

const Header: React.FC = () => {
	const [checked, setChecked] = useState(false);

	return (
		<div className="Header">
			<div className="Header__container">
				<div className="Header__container--title">
					<h1>dev jobs</h1>
				</div>
				<div className="Header__container--switch">
					<div>
						<Switch
							checked={checked}
							onChange={() => setChecked((ch) => !ch)}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;

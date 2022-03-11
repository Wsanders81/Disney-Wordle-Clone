import { useState } from 'react';
import { names } from './constants/names';

import './styles.css';
import GameTable from './components/gameTable';
import Keyboard from './components/keyboard';
function App() {
	const [ tileLetters, setTileLetters ] = useState({
		row1: [],
		row2: [],
		row3: [],
		row4: [],
		row5: []
	});
	let row = 'row1';

	//* this will need to be in localStorage and set to run once a day
	//TODO : Move to helpers and create as function / use localStorage and
	//TODO : create logic to check dates
	const alreadyUsed = new Set();
	let todaysName = names[Math.floor(Math.random() * names.length)];
	if (!alreadyUsed.has(todaysName)) {
		alreadyUsed.add(todaysName);
	}
	else {
		todaysName = names[Math.floor(Math.random() * names.length)];
	}

	function handleKeyboardClick(e) {
		if (tileLetters[row].length >= 5) return;
		let stateCopy = tileLetters;
		stateCopy[row].push(e.target.innerHTML);
		setTileLetters((prevState) => ({
			...stateCopy
		}));
	}
	function handleKeyboardDelete() {
		if (tileLetters[row].length <= 0) return;
		let stateCopy = tileLetters;
		stateCopy[row].pop();
		setTileLetters((prevState) => ({
			...stateCopy
		}));
		
	}
	function handleKeyboardEnter() {
		
		if (tileLetters[row].length !== 5) return;
		switch (row) {
			case 'row1':
				row = 'row2';
				break;
			case 'row2':
				row = 'row3';
				break;
			case 'row3':
				row = 'row4';
				break;
			case 'row4':
				row = 'row5';
				break;
			default:
				return;
		}
    
	}

	return (
		<div className="App">
			<nav className="navbar">
				<div className="logo">logo here</div>
				<div className="title">Wordle</div>
				<div className="right-menu">
					<span>stats</span>
					<span>options</span>
				</div>
			</nav>

			<GameTable tileLetters={tileLetters} />
			<Keyboard
				handleClick={handleKeyboardClick}
				handleDelete={handleKeyboardDelete}
				handleEnter={handleKeyboardEnter}
			/>
		</div>
	);
}

export default App;

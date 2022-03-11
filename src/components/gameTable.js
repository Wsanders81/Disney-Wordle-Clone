import { useState } from 'react';
import GameTile from './gameTile';
export default function GameTable({tileLetters}) {
	
	

	return (
		<div className="game-table-container">
			<div className="game-table">
				<div className="game-table-row">
					<GameTile letter={tileLetters.row1[0]}/>
					<GameTile letter={tileLetters.row1[1]}/>
					<GameTile letter={tileLetters.row1[2]}/>
					<GameTile letter={tileLetters.row1[3]}/>
					<GameTile letter={tileLetters.row1[4]}/>
				</div>
				<div className="game-table-row">
					<GameTile />
					<GameTile />
					<GameTile />
					<GameTile />
					<GameTile />
				</div>
				<div className="game-table-row">
					<GameTile />
					<GameTile />
					<GameTile />
					<GameTile />
					<GameTile />
				</div>
				<div className="game-table-row">
					<GameTile />
					<GameTile />
					<GameTile />
					<GameTile />
					<GameTile />
				</div>
				<div className="game-table-row">
					<GameTile />
					<GameTile />
					<GameTile />
					<GameTile />
					<GameTile />
				</div>
				<div className="game-table-row">
					<GameTile />
					<GameTile />
					<GameTile />
					<GameTile />
					<GameTile />
				</div>
			</div>
		</div>
	);
}

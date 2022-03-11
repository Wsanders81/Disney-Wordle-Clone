export default function GameTile({ letter, status, color }) {
	return letter ? (
		<div className="game-tile">
			<span className="tile-letter">{letter}</span>
		</div>
	) : (
		<div className="game-tile">
			<span className="tile-letter-hidden">0</span>
		</div>
	);
}

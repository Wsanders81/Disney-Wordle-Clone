export default function KeyboardButtonRow({ letters, buttons, handleClick, handleDelete, handleEnter}) {
	return (
		<div className="keys">
			{buttons ? <span onClick={handleEnter} className="enter-key">ENTER</span> : null}
			{letters.map((letter) => {
				return (
					<span onClick={handleClick} key={letter} className="key">
						{letter}
					</span>
				);
			})}
			{buttons ? <span onClick={handleDelete} className="enter-key">DEL</span> : null}
		</div>
	);
}

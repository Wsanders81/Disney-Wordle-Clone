import KeyboardButtonRow from "./keyboardButtonRow"
export default function Keyboard({handleClick, handleDelete, handleEnter}){
    
    return (
        <div className="keyboard">
            <KeyboardButtonRow letters={["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"]} handleClick={handleClick}/>
            <KeyboardButtonRow letters={["A", "S", "D", "F", "G", "H", "J", "K", "L"]} handleClick={handleClick}/>
            <KeyboardButtonRow letters={["Z", "X", "C", "V", "B", "N", "M"]} handleClick={handleClick} handleDelete={handleDelete} handleEnter={handleEnter} buttons={["ENTER", "DEL"]}/>
        </div>
    )
}
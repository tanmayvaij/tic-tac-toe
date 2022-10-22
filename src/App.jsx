import { useState } from "react"

const App = () => {

    const [ blocks, setBlocks ] = useState({
        "1": ".", "2": ".", "3": ".",
        "4": ".", "5": ".", "6": ".",
        "7": ".", "8": ".", "9": "."
    })

    const [ player, setPlayer ] = useState("X")

    const putValue = (n) => {
        if ( blocks[n] == "." ) {
            setBlocks({ ...blocks, [n]: player })
            setPlayer(( player == "X" ) ? "O": "X")
        }
    }

    return (
        <div id="App" className="flex items-center justify-center min-h-[100vh]">
            <div className="shadow-lg bg-gray-800 p-2 rounded-lg">
                <div>
                    <button onClick={()=>putValue(1)} className="bg-white w-24 h-24 m-1">{blocks[1]}</button>
                    <button onClick={()=>putValue(2)} className="bg-white w-24 h-24 m-1">{blocks[2]}</button>
                    <button onClick={()=>putValue(3)} className="bg-white w-24 h-24 m-1">{blocks[3]}</button>
                </div>
                <div>
                    <button onClick={()=>putValue(4)} className="bg-white w-24 h-24 m-1">{blocks[4]}</button>
                    <button onClick={()=>putValue(5)} className="bg-white w-24 h-24 m-1">{blocks[5]}</button>
                    <button onClick={()=>putValue(6)} className="bg-white w-24 h-24 m-1">{blocks[6]}</button>
                </div>
                <div>
                    <button onClick={()=>putValue(7)} className="bg-white w-24 h-24 m-1">{blocks[7]}</button>
                    <button onClick={()=>putValue(8)} className="bg-white w-24 h-24 m-1">{blocks[8]}</button>
                    <button onClick={()=>putValue(9)} className="bg-white w-24 h-24 m-1">{blocks[9]}</button>
                </div>
            </div>
        </div>
    )
}

export default App

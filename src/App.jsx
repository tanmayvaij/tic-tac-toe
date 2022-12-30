import { useEffect, useState } from "react"
import { showWinner } from "./showWinner"

const App = () => {

    const [ btnLock, setBtnLock ] = useState(false)

    const [ winner, setWinner ] = useState("")

    const [btndisplay, setBtndisplay] = useState("invisible")

    const [ blocks, setBlocks ] = useState({
        "1": ".", "2": ".", "3": ".",
        "4": ".", "5": ".", "6": ".",
        "7": ".", "8": ".", "9": "."
    })

    const [ player, setPlayer ] = useState("O")

    const putValue = (n) => {

        if ( blocks[n] == "." ) {

            // Insert X/O in block
            setBlocks({ ...blocks, [n]: player })

        }

    }

    const restart = () => location.reload()

    useEffect(() => {

        // Change player
        setPlayer(( player == "X" ) ? "O": "X")

        const res = showWinner(blocks, player)

        if (res.win) {
            setBtnLock(true)
            setWinner(res.player)
            setBtndisplay("visible")
        }

    }, [blocks])

    return (
        <div id="App" className="flex items-center justify-center flex-col min-h-[100vh]">

            {
                ( btnLock ) ? (
                    <h1 className="font-semibold m-5 text-2xl">Player {winner} wins</h1>
                ) : (
                    <h1 className="font-semibold m-5 text-2xl">Player {player}'s turn</h1>
                )
            }
            
            <div className="shadow-lg bg-gray-800 p-2 rounded-lg">
                <div>
                    <button disabled={btnLock} onClick={()=>putValue(1)} className="bg-white w-24 h-24 m-1">{blocks[1]}</button>
                    <button disabled={btnLock} onClick={()=>putValue(2)} className="bg-white w-24 h-24 m-1">{blocks[2]}</button>
                    <button disabled={btnLock} onClick={()=>putValue(3)} className="bg-white w-24 h-24 m-1">{blocks[3]}</button>
                </div>
                <div>
                    <button disabled={btnLock} onClick={()=>putValue(4)} className="bg-white w-24 h-24 m-1">{blocks[4]}</button>
                    <button disabled={btnLock} onClick={()=>putValue(5)} className="bg-white w-24 h-24 m-1">{blocks[5]}</button>
                    <button disabled={btnLock} onClick={()=>putValue(6)} className="bg-white w-24 h-24 m-1">{blocks[6]}</button>
                </div>
                <div>
                    <button disabled={btnLock} onClick={()=>putValue(7)} className="bg-white w-24 h-24 m-1">{blocks[7]}</button>
                    <button disabled={btnLock} onClick={()=>putValue(8)} className="bg-white w-24 h-24 m-1">{blocks[8]}</button>
                    <button disabled={btnLock} onClick={()=>putValue(9)} className="bg-white w-24 h-24 m-1">{blocks[9]}</button>
                </div>
            </div>

             <button 
                className={`bg-blue-500 ${btndisplay} hover:bg-blue-700 m-5 rounded-md p-2 text-white`}
                onClick={restart}
            >
                New Game
            </button>
            

        </div>
    )
}

export default App

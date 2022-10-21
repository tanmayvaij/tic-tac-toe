import { useState } from "react"

const App = () => {

    const [ blocks, setBlocks ] = useState([
        "", "", "",
        "", "", "",
        "", "", ""
    ])

    const [ player, setPlayer ] = useState("X")

    return (
        <div id="App" className="flex items-center justify-center min-h-[100vh]">
            <div className="shadow-lg">
                <div>
                    <button className="border p-10" onClick={()=>putValueAndChangePlayer(0)}>{blocks[0]}</button>
                    <button className="border p-10">{blocks[1]}</button>
                    <button className="border p-10">{blocks[2]}</button>
                </div>
                <div>
                    <button className="border p-10">{blocks[3]}</button>
                    <button className="border p-10">{blocks[4]}</button>
                    <button className="border p-10">{blocks[5]}</button>
                </div>
                <div>
                    <button className="border p-10">{blocks[6]}</button>
                    <button className="border p-10">{blocks[7]}</button>
                    <button className="border p-10">{blocks[8]}</button>
                </div>
            </div>
        </div>
    )
}

export default App

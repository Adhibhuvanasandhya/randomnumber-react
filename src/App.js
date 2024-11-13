import { useState } from 'react';
import"./style.css"
function App() {
    const [minVal, setMinVal] = useState(0);
    const [maxVal, setMaxVal] = useState(10);
    const [randomNum, setRandomNum] = useState(0);

    const [history, setHistory] = useState([]);

    const handleRandomNum = () => {
        const newRandomNum = Math.floor(Math.random() * (maxVal - minVal + 1) + minVal);
        setRandomNum(newRandomNum);
        setHistory((prevHistory) => [...prevHistory, newRandomNum]);   
    }
     const change = ()=>{
        setRandomNum(null)
        setHistory([])
     }
    return (
        <div className="hero">
            <div className="container">
                <div className="randomNum">
                    <p>
                        Random Numer: <span>{randomNum}</span>
                    </p>
                
                </div>
                <div className="numContainer">
                    <div>
                        <p>Min</p>
                        <input
                            type="number"
                            value={minVal}
                            onChange={(evt) => setMinVal(evt.target.value)}
                        />
                    </div>
                    <div>
                        <p>Max</p>
                        <input
                            type="number"
                            value={maxVal}
                            onChange={(evt) => setMaxVal(evt.target.value)}
                        />
                    </div>
                </div>
                <button onClick={handleRandomNum}>Get Random Numer</button>

                
                
                 <div className="history">
                    <h3 style={{color:"#9cff9c"}}>History:</h3>
                    <ul>
                        {history.map((num, index) => (
                            <li key={index}>{num}</li>
                        ))}
                    </ul>
                    
                </div>
                <button onClick={change}>Reset</button>

            </div>
        </div>
    )

}
export default App
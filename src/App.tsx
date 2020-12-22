import React, {useState} from 'react';
import './App.css';

interface IExample {
    firstNumber: number
    randomSign: string
    secondNumber: number
    result: number
}

function App() {
    let [press, setPress] = useState<boolean>(false)                //kontrol knopki "Start"
    let [answer, setAnswer] = useState('')                          //kontrol stroki "input", moj otvet
    let [shot, setShot] = useState<IExample[]>([])
    // let positivAnswer = 0;
    // let negativAnswer = 0;

    const mySign = ['+', '-', '*']
    let firstNumber = Math.floor(Math.random() * 10)
    let randomSign = mySign[Math.floor(Math.random() * mySign.length)]
    let secondNumber = Math.floor(Math.random() * 10)                        //result - pravilnij otvet sistemy
    let result = () => {
        let num = 0;
        if (randomSign === '+') num = firstNumber + secondNumber;
        if (randomSign === '-') num = firstNumber - secondNumber;
        if (randomSign === '*') num = firstNumber * secondNumber;
        return num;
    }

    // const example = () => {
    //     setShot([...shot, {firstNumber, randomSign, secondNumber, result} ])
    // }

    return (
        <div className='MyApp'>
            {/*<button onClick={example}>Give example</button>*/}
                {press?
                    <>
                    {/*{shot.map( (el:IExample) =>*/}
                                <>
                                    <span><strong> Solve this example: </strong></span>
                                    <hr/>
                                    <label>{firstNumber} </label>
                                    <label>{randomSign} </label>
                                    <label>{secondNumber} </label> <> = </>
                                    <input type = "number" value={answer} onChange={(e) => setAnswer(e.target.value)}/>
                                    <ul><button>Check</button></ul>
                                </>
                    {/*)}*/}
                    </>
                    : <button onClick={() => setPress(true)} hidden={false}> Start </button>
                }
        </div>
    );
}
export default App;

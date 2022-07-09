import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";

function App() {
  const [minnute, setMinute] = useState(0)
  const [sencond, setSecond] = useState(0)
  const [totalSeconds, setTotalSeconds] = useState(0)
  const [countDown, setCountDonwn] = useState('00:00')
  const [timer, setTimer] = useState(0)
  const [running, setRunning] = useState(false)



  function format() {
    let time= totalSeconds
    console.log("here format" , time)
    let seconds = time % 60;
    let minutes = Math.floor(time / 60);
    minutes = minutes.toString().length === 1 ? "0" + minutes : minutes;
    seconds = seconds.toString().length === 1 ? "0" + seconds : seconds;
    let _countDown = minutes + ':' + seconds;
    setCountDonwn(_countDown)
  }

  function onStart(){
    if(running) return;
    setTotalSeconds((Number(minnute)*60)+Number(sencond))
    setRunning(true)
  }

  function onReset(){
    setRunning(0)
    setTotalSeconds(0)
    setCountDonwn('00:00')
    setSecond(0)
  }

  function onChangeStatus(){
    setRunning(!running)
  }

  useEffect(()=>{
    if(!running) return
    setTimeout(() => {
      setTotalSeconds(preState => preState -1)
      format()
    }, 1000);
  },[running])

  useEffect(()=>{
    if(!running || totalSeconds<0) return
    setTimeout(() => {
      setTotalSeconds(preState => preState -1)
      format()
    }, 1000);
  },[totalSeconds])

  return (
    <div className="App">
      <input type={"number"} onChange={e=>setMinute(e.target.value)}/> Minutes
      <input type={"number"} onChange={e=>setSecond(e.target.value)}/> Senconds
      <button onClick={onStart}>Start</button>
      <button onClick={onChangeStatus}>Pause/Resume</button>
      <button onClick={onReset}>Reset</button>

      <h1>{countDown}</h1>
      <h1>totalSeconds: {totalSeconds}</h1>

    </div>
  );
}

export default App;

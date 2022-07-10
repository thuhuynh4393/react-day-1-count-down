import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";

function App() {
  const [minute, setMinute] = useState(0)
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
    setTotalSeconds((Number(minute)*60)+Number(sencond))
    setRunning(true)
  }

  function onReset(){
    clearTimeout(timer);
    setRunning(false)
    setTotalSeconds(0)
    setCountDonwn('00:00')
    setSecond(0)
    setMinute(0)
    clearTimeout(timer);
  }

  function onChangeStatus(){
    if(totalSeconds<=0) return setRunning(false)
    setRunning(!running)
    if(!running){
      clearTimeout(timer);
    }
  }

  function onCountDown(){
    const timerCountDown = setTimeout(() => {
      setTotalSeconds(preState => preState -1)
      format()
    }, 1000);
    setTimer(timerCountDown)
  }

  useEffect(()=>{
    if(!running) return
    onCountDown()
  },[running])

  useEffect(()=>{
    if(!running) return
    if(totalSeconds<0) return setRunning(false)
    
    onCountDown()
  },[totalSeconds])

  return (
    <div className="App">
      <input value={minute} type={"number"} onChange={e=>setMinute(e.target.value)}/> Minutes
      <input value={sencond} type={"number"} onChange={e=>setSecond(e.target.value)}/> Senconds
      <button onClick={onStart}>Start</button>
      <button onClick={onChangeStatus}>Pause/Resume</button>
      <button onClick={onReset}>Reset</button>

      <h1>{countDown}</h1>
      <h1>totalSeconds: {totalSeconds}</h1>

    </div>
  );
}

export default App;

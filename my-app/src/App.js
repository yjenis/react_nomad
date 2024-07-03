import Button from "./Button"
import styles from "./App.module.css"

import { useState, useEffect } from "react";

function App() {
  const [counter,setValue]=useState(0);
  const [keyword, setKeyword]=useState("");
  const onClick=()=>setValue((prev)=>prev+1);
  const onChange=(event)=> setKeyword(event.target.value);
  useEffect(()=>{
    console.log("I run only once.");
  },[keyword]);
  useEffect(()=>{
    console.log("I run when 'keyword' changes.");
  },[]);
  useEffect(()=>{
    console.log("I run when 'counter' changes.");
  },[counter]);
  useEffect(()=>{
    console.log("I run when 'keyword&counter' changes.");
  },[keyword,counter]);
  // console.log('I run all the time')
  // const iRunOnlyOnce=()=>{
  //   console.log('i run only once.')
  // }
  // useEffect(iRunOnlyOnce,[])

  // useEffect(()=>{
  //   console.log("Call the api...")
  // },[]);
  // 특정 코드가 한번만 실행되게 하는 것

  // useEffect(()=>{
  //   if(keyword !==""&&keyword.length>5){
  //   console.log("SEARCH FOR", keyword)}
  // },[keyword])
  
  return (
    <div>
      <input 
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="search here.."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;

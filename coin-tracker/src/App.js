import { useEffect, useState } from "react";

function App(){
  const[loading, setLoading]=useState(true);
  const[coins,setCoins]=useState([])

  useEffect(()=>{
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response)=> response.json())
    .then((json)=>{
      setCoins(json);
      setLoading(false);
    })
  },[]);
  return(
    <div>
      <h1>The Coins!:{coins.length}</h1>
      {loading ? <p>Loading...</p> : (<select>
        {coins.map((coin) => 
          <option>
            {coin.name} ({coin.symbol}):${coin.quotes.USD.price}USD
          </option>)}
      </select>) }

      
      {/* <input placeholder="USD" type="number"></input> */}

       {/* input에서 받은 숫자를 나눠 */}
      {/* {coins.map((coin) => {coin.name} {coin.quotes.USD.price})} */}
      
    </div>
  )
}

export default App;
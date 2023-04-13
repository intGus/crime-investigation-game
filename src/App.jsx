import { useState, useEffect } from 'react'
import './App.css'

function App() {


  function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all?fields=name,capital')
      .then(response => response.json())
      .then(json => setData(getRandom(json, 3)))
      .catch(error => console.error(error));
  }, []);

  let countries = 'loading'
  if (data) {
    countries = data.map((item, index) =>
    <li key={index}>{item.name.official}</li>
    )
  }
  
  return (
    <div className="App">
      {countries}
    </div>
  )
}

export default App

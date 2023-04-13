import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const arr = ['Venezuela', 'Mexico', 'Colombia', 'Peru', 'Chile', 'Argentina', 'Holanda', 'Bolivia', 'Uruguay', 'Sudafrica', 'Ecuador', 'Brasil', 'Canada', 'Dinamarca', 'Noruega', 'Australia', 'Japon', 'China', 'India', 'Pakistan', 'Espana', 'Portugal']
  let len = arr.length,
      taken = new Array(len);

  function getRandom(n) {
    var result = new Array(n)
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
  }

  const [graph, setGraph] = useState({
    base: getRandom(3)
  });
  
  // useEffect(() => {
  //   fetch('https://restcountries.com/v3.1/all?fields=name,capital')
  //     .then(response => response.json())
  //     .then(json => setData(getRandom(json, 3)))
  //     .catch(error => console.error(error));
  // }, []);

  const [current, setCurrent] = useState('base')
  const [output, setOutput] = useState(graph[current])
  
  function travel(node) {
    if (!graph[current].includes(node)) {
      console.log('you can only travel to ' + graph[current])
      return
    }
    if (node in graph) {
      console.log(node + " exists")
    } else {
      setGraph((prevGraph) => {
        return({
          ...prevGraph,
          [node]: [current, ...['prueba1','prueba2','prueba3']]
        })
        
      })
    }

  setCurrent(node)
  // setOutput(graph[node].map(index => index === 'base' ? 'Base' : index))
  console.log('you can travel to: ' + output)
  }


  let countries = 'loading'
  if (graph) {
    countries = graph[current].map((item, index) =>
    <li key={index} onClick={()=>travel(item)}>{item}</li>
    )
  }
  
  return (
    <div className="App">
      {countries}
    </div>
  )
}

export default App

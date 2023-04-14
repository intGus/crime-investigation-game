import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const arr = ['Venezuela', 'Mexico', 'Colombia', 'Peru', 'Chile', 'Argentina', 'Holanda', 'Bolivia', 'Uruguay', 'Sudafrica', 'Ecuador', 'Brasil', 'Canada', 'Dinamarca', 'Noruega', 'Australia', 'Japon', 'China', 'India', 'Pakistan', 'Espana', 'Portugal']
  let len = arr.length

  const [guardian, setGuardian] = useState(new Set())

  const [graph, setGraph] = useState({
    base: []
  });

  function getRandom(n) {
    console.log(guardian.size)
    if (guardian.size - 1 >= len) {
      console.log('no more possible trips')
      return
    }
    const result = [];
    const tempGuardian = new Set([...guardian]);
    console.log({tempGuardian})
    while (result.length < n && tempGuardian.size <= len) {
      const index = Math.floor(len * Math.random());
      console.log({index})
      if (tempGuardian.has(index)) {
        continue;
      }
      tempGuardian.add(index);
      result.push(index);
    }   
    return result;
  }

  useEffect(() => {
    setGraph({
      base: getRandom(3)
    });
  }, []);
  
  useEffect(() => {
    const newGuardian = new Set([...guardian, ...graph[current]])
    setGuardian(newGuardian)
    console.log({newGuardian})
    }, [graph]);

  const [current, setCurrent] = useState('base')
  
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
          [node]: [current, ...getRandom(3)]
        })
        
      })
    }

  setCurrent(node)
  // setOutput(graph[node].map(index => index === 'base' ? 'Base' : index))
  // console.log('you can travel to: ' + output)
  }

  let countries = 'loading'
  if (graph) {
    countries = graph[current].map((item, index) =>
    <li key={index} onClick={()=>travel(item)}>{item === 'base' ? 'Base' : arr[item]}</li>
    )
  }
  
  return (
    <div className="App">
      {countries}
    </div>
  )
}

  // useEffect(() => {
  //   fetch('https://restcountries.com/v3.1/all?fields=name,capital')
  //     .then(response => response.json())
  //     .then(json => setData(getRandom(json, 3)))
  //     .catch(error => console.error(error));
  // }, []);

//   let countries = 'loading'
//   if (data) {
//     countries = data.map((item, index) =>
//     <li key={index}>{item.name.official}</li>
//     )
//   }

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <h1>Hello World!</h1>
    </div>
    <div>
    <button type="submit">jeevan</button>
    <table border="3">
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Age</th>
      </tr>
      <tr>
        <td>Jeevan</td>
        <td>sambath</td>
        <td>20</td>
      </tr>
      <tr>
        <td>John</td>
        <td>Doe</td>
        <td>30</td>
      </tr>
      <tr>
        <td>Jane</td>
        <td>Smith</td>
        <td>25</td>
      </tr>    
    </table>
    </div>
    </>
  )
}

export default App

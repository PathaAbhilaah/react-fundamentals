import React, {useState} from 'react'
import './App.css'

function App() {

  const colors=['red', 'green', 'blue', 'olive', 'gray', 'yellow', 'pink', 'purple', 'lavender', 'white', 'black']
  const [bgcolor, setBgcolor] = useState('white')
  return (
    <>
    <div className='container' style={{backgroundColor: bgcolor}}>
      <div className='colorContainer'>
        {colors.map((color)=>(
          <div key={color} style={{backgroundColor: color}} className='eachColor' onClick={() => setBgcolor(color)}>{color}</div>
        ))}
      </div>
    </div>
    </>
  )
}

export default App

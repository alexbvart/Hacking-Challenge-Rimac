import { useState } from 'react'
import './App.css'
import Accordion from './components/Accordion'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Accordion title='Titulo' > <h2> Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit tempora similique culpa explicabo at possimus fuga? Perspiciatis deleniti suscipit ipsum vitae quidem sit tempore alias eveniet laboriosam, obcaecati possimus ab.</h2> </Accordion>
    </>
  )
}

export default App

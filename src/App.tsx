import './App.css'
import Accordion from './components/Accordion'
import { LoginForm } from './pages/Home/components/Form/LoginForm'

function App() {

  return (
    <>
      <Accordion title='Titulo' > <h2> Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit tempora similique culpa explicabo at possimus fuga? Perspiciatis deleniti suscipit ipsum vitae quidem sit tempore alias eveniet laboriosam, obcaecati possimus ab.</h2> </Accordion>
      <LoginForm></LoginForm>
      <h1 className='aqui-las-clases clase-2 clase-3'></h1>
    </>
  )
}

export default App

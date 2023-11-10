import './App.css'
import {Nav} from "./components"
import { Home, QuickRead } from './sections'

function App() {

  return (
    <main className='bg-primary-background-color min-h-screen'>
      <Nav />

      <div>
        <Home />
        <QuickRead />
      </div>
      
    </main>
  )
}

export default App;

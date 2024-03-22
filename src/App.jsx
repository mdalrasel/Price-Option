import './App.css'
import NavBar from './components/NavBar/NavBar'
import PriceOptions from './components/PriceOptions/PriceOptions'
// import DaisyNav from './components/DaisyNav/DaisyNav'

function App() {

  return (
    <>
      <h1 className="text-3xl font-bold  text-center">
      Hello React !
    </h1>
    <NavBar></NavBar>
    <PriceOptions></PriceOptions>
    {/* <DaisyNav></DaisyNav> */}
    </>
  )
}

export default App

import './App.css'
import LineChart from './components/LineChart/LineChart'
import NavBar from './components/NavBar/NavBar'
import Phones from './components/Phones/Phones'
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
    <LineChart></LineChart>
    <Phones></Phones>
    {/* <DaisyNav></DaisyNav> */}
    </>
  )
}

export default App

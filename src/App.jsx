
import './App.css'
import FooterComponet from './component/FooterComponent'
import MainComponent from './component/MainComponent'

import NavbarComponet from './component/NavbarComponent'

function App() {
  

  return (
    
     <div className="  h-screen flex flex-col justify-between ">
    <NavbarComponet />
    <MainComponent/>
    <FooterComponet />
    </div>
  )
}

export default App

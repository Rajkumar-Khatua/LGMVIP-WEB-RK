import './App.css'
import UserDataDisplay from './components/DisplayDATA/UserDataDisplay'
import Navbar from './components/Navbar/Navbar'
import RegistrationForm from './components/RegistrationFrom/RegistrationFrom'

function App() {
  

  return (
    <>
    <Navbar/>
    <div className='container'>
     <RegistrationForm />
     <UserDataDisplay />
    </div>
    </>
  )
}

export default App

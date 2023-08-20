
import {BrowserRouter , Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import About from './pages/About'
import Header from './components/Header'
import PrivateRoute from './components/PrivateRoute'
export default function App() {
  return (
   
   <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={ <Home/>}></Route>
      <Route path='/signin' element={ <SignIn/>}></Route>
      <Route path='/signup' element={ <SignUp/>}></Route>
      <Route path='/about' element={ <About/>}></Route>
      <Route element = {<PrivateRoute/>} >
            <Route path='/profile' element={ <Profile/>}></Route>
      </Route>
    </Routes>
   </BrowserRouter>
  )
}

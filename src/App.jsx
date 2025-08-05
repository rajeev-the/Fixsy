import React from 'react'
import {Route ,Routes} from 'react-router-dom'
import Start from './pages/Start.jsx'
import Loginuser from './pages/Loginuser.jsx'
import UserSign from './pages/UserSign.jsx'
import Captainlogin from './pages/Captainlogin.jsx'
import CaptainSignup from './pages/CaptainSignup.jsx'
import MainHome from './pages/MainHome.jsx'
import UserProtectWrapper from './pages/UserProtectWrapper.jsx'
import UserLogout from './pages/UserLogout.jsx'
import CaptainLogout from './pages/CaptainLogout.jsx'
import CaptainHome from './pages/CaptainHome.jsx'
import CaptainProtectWrapper from './pages/CaptainProtectWrapper.jsx'
import Riding from './pages/Riding.jsx'
import CaptainRiding from './pages/CaptainRiding.jsx'
import PageTest from './pages/PageTest.jsx'
import AppLayout from './components/AppLayout.jsx'
import ProfilePage from './pages/ProfilePage.jsx'



const App = () => {
  return (
    <div >



<Routes>

  <Route path='/' element={<Start />} />
  <Route path='/login' element={<Loginuser />} />
  <Route path='/signup' element={<UserSign />} />


  <Route path='/captain-riding' element={<CaptainRiding />} />
  <Route path='/captain-login' element={<Captainlogin />} />
  <Route path='/captain-signup' element={<CaptainSignup />} />

        

          <Route path='/profile' element={  <AppLayout showNavbar={true}>

    


     <ProfilePage />
    </AppLayout>} />

  {/* ✅ MainHome with GooeyNav shown */}
  <Route path='/home' element={
    <AppLayout showNavbar={true}>
      <MainHome />
    </AppLayout>
  } />

  <Route path='/riding' element={  <AppLayout showNavbar={true}>

    


     <Riding />
    </AppLayout>} />
  {/* ✅ Captain Home (Protected) - no navbar */}
  <Route path='/captain-home' element={
    <CaptainProtectWrapper>
      <AppLayout showNavbar={false}>
        <CaptainHome />
      </AppLayout>
    </CaptainProtectWrapper>
  } />

  {/* ✅ User logout with wrapper */}
  <Route path='/user/logout' element={
    <UserProtectWrapper>
      <AppLayout showNavbar={false}>
        <UserLogout />
      </AppLayout>
    </UserProtectWrapper>
  } />

  {/* ✅ Captain logout */}
  <Route path='/captain/logout' element={
    <AppLayout showNavbar={false}>
      <CaptainLogout />
    </AppLayout>
  } />

</Routes>


    </div>
    
  )
}

export default App
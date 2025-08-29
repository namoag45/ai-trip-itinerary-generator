import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import CreateTrip from './create-trip/index.jsx'
import Header from './components/custom/Header.jsx'
import Footer from './components/custom/Footer.jsx'
import { Toaster } from './components/ui/sonner'
import { GoogleOAuthProvider } from '@react-oauth/google'
import Viewtrip from './view-trip/[tripId]/index.jsx'
import MyTrips from './my-trips/index.jsx';   

const clientId = import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID;


const router = createBrowserRouter ([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/create-trip',
    element: <CreateTrip />,
  },
  {
    path: '/view-trip/:tripId',
    element: <Viewtrip/>
  },
  {
    path: '/my-trips',
    element: <MyTrips/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={clientId}>
      <Header />
      <Toaster />
      <RouterProvider router = {router} />
      <Footer /> 
    </GoogleOAuthProvider>
  </React.StrictMode>,
)

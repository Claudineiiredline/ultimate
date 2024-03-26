import { Outlet } from 'react-router-dom'
import { NavBar } from '../components/NavBar/NavBar'
import { HomePage } from '../components/HomePage/HomePage'
import { Footer } from '../components/Footer/Footer'

export function DefaultLayout() {
  return (
    <>
    <HomePage />
      <NavBar />
      <Footer />
      <Outlet />
    </>
  )
}
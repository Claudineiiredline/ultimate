import { Outlet } from 'react-router-dom'
import { HomePage } from '../components/HomePage/HomePage'
import { Footer } from '../components/Footer/Footer'

export function DefaultLayout() {
  return (
    <>
    <HomePage />
      <Footer />
      <Outlet />
    </>
  )
}
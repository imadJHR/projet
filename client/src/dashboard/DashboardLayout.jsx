
import MySidebar from './MySidebar'
import { Outlet } from 'react-router-dom'

function DashboardLayout() {
  return (
    <div className='flex gap-4 flex-col md:flex-row'>
      <MySidebar/>
      <Outlet/>
    </div>
  )
}

export default DashboardLayout
import { Sidebar } from 'flowbite-react';
import { BiBuoy } from 'react-icons/bi';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import profile1 from '../assets/BannerBook/profile1.jpg'
import { FaUpload } from "react-icons/fa6";
import { MdManageAccounts } from "react-icons/md"


function MySidebar() {
  return (
    
     <Sidebar className='mt-28'  aria-label="Sidebar with content separator example">
        <Sidebar.Logo href="#" img={profile1} imgAlt="Flowbite logo">
        User
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
         
          <Sidebar.Item href="/admin/dashboard/upload" icon={FaUpload}>
            Upload Book
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage" icon={MdManageAccounts }>
            Manage Books
          </Sidebar.Item>
          
          
          <Sidebar.Item href="/login" icon={HiArrowSmRight}>
            Sign in
          </Sidebar.Item>
          <Sidebar.Item href="logout" icon={HiTable}>
            Log Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        
      </Sidebar.Items>
    </Sidebar>
  )
}

export default MySidebar
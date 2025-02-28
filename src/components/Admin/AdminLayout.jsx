import React from 'react'
import AdminSidebar from './AdminSidebar'
import AdminFooter from './AdminFooter'
import AdminHeader from './AdminHeader'
import AdminDashboard from './AdminDashboard'

const AdminLayout = () => {
  return (
    <>
      <body>
        <div className="wrapper">
          <AdminSidebar></AdminSidebar>
          <div className="main-panel">
            <AdminHeader></AdminHeader>

            <AdminDashboard></AdminDashboard>
            <AdminFooter></AdminFooter>
          </div>


        </div>

      </body>
    </>
  )
}

export default AdminLayout
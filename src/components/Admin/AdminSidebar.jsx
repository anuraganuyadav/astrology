import React from 'react'

const AdminSidebar = () => {
  return (
    <>
      {/* <!-- Sidebar --> */}
      <div className="sidebar" data-background-color="dark">
        <div className="sidebar-logo">
          {/* <!-- Logo Header --> */}
          <div className="logo-header" data-background-color="dark">
            <a href="index.html" className="logo">
              <img
                src="Admin/img/kaiadmin/logo_light.svg"
                alt="navbar brand"
                className="navbar-brand"
                height="20"
              />
            </a>
            <div className="nav-toggle">
              <button className="btn btn-toggle toggle-sidebar">
                <i className="gg-menu-right"></i>
              </button>
              <button className="btn btn-toggle sidenav-toggler">
                <i className="gg-menu-left"></i>
              </button>
            </div>
            <button className="topbar-toggler more">
              <i className="gg-more-vertical-alt"></i>
            </button>
          </div>
          {/* <!-- End Logo Header --> */}
        </div>
        <div className="sidebar-wrapper scrollbar scrollbar-inner">
          <div className="sidebar-content">
            <ul className="nav nav-secondary">
              <li className="nav-item active">
                <a
                  data-bs-toggle="collapse"
                  href="#dashboard"
                  className="collapsed"
                  aria-expanded="false"
                >
                  <i className="fas fa-home"></i>
                  <p>Dashboard</p>
                  <span className="caret"></span>
                </a>
                <div className="collapse" id="dashboard">
                  <ul className="nav nav-collapse">
                    <li>
                      <a href="../demo1/index.html">
                        <span className="sub-item">Dashboard 1</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-section">
                <span className="sidebar-mini-icon">
                  <i className="fa fa-ellipsis-h"></i>
                </span>
                <h4 className="text-section">Components</h4>
              </li>

              <li className="nav-item">
                <a data-bs-toggle="collapse" href="#forms">
                  <i className="fas fa-pen-square"></i>
                  <p></p>
                  <span className="caret"></span>
                </a>
                <div className="collapse" id="forms">
                  <ul className="nav nav-collapse">
                    <li>
                      <a href="forms/forms.html">
                        <span className="sub-item">Basic Form</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- End Sidebar --> */}
    </>
  )
}

export default AdminSidebar
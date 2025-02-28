import React from 'react'

const AdminDashboard = () => {
  return (
    <>
      <div className="container">
        <div className="page-inner">
          <div
            className="d-flex align-items-left align-items-md-center flex-column flex-md-row pt-2 pb-4"
          >
            <div>
              <h3 className="fw-bold mb-3">Dashboard</h3>

            </div>

          </div>
          <div className="row">
            <div className="col-sm-6 col-md-3">
              <div className="card card-stats card-round">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-icon">
                      <div
                        className="icon-big text-center icon-primary bubble-shadow-small"
                      >
                        <i className="fas fa-users"></i>
                      </div>
                    </div>
                    <div className="col col-stats ms-3 ms-sm-0">
                      <div className="numbers">
                        <p className="card-category">Visitors</p>
                        <h4 className="card-title">1,294</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="card card-stats card-round">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-icon">
                      <div
                        className="icon-big text-center icon-info bubble-shadow-small"
                      >
                        <i className="fas fa-user-check"></i>
                      </div>
                    </div>
                    <div className="col col-stats ms-3 ms-sm-0">
                      <div className="numbers">
                        <p className="card-category">Subscribers</p>
                        <h4 className="card-title">1303</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="card card-stats card-round">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-icon">
                      <div
                        className="icon-big text-center icon-success bubble-shadow-small"
                      >
                        <i className="fas fa-luggage-cart"></i>
                      </div>
                    </div>
                    <div className="col col-stats ms-3 ms-sm-0">
                      <div className="numbers">
                        <p className="card-category">Sales</p>
                        <h4 className="card-title">$ 1,345</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="card card-stats card-round">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-icon">
                      <div
                        className="icon-big text-center icon-secondary bubble-shadow-small"
                      >
                        <i className="far fa-check-circle"></i>
                      </div>
                    </div>
                    <div className="col col-stats ms-3 ms-sm-0">
                      <div className="numbers">
                        <p className="card-category">Order</p>
                        <h4 className="card-title">576</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <table class="table">
                <thead class="thead-dark">
                  <tr>
                    <th scope="col">Sr.No</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>

                </tbody>
              </table>



            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default AdminDashboard
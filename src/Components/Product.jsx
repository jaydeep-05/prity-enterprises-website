import React from 'react'

const Product = () => {
  return (
    <>
    <div className='container' style={{padding:"15px", margin:"auto"}}>

    <div className="row">
            <div className="col-12">
                <h2 className="d-flex justify-content-center"  style={{fontWeight: 'bolder'}} >Products</h2>
            </div>
            
            <div className="col-12">
                <div className="row d-flex justify-content-around">
                    <div className="col-lg-4 col-md-6 col-sm-12"><img src="/static/images/industrial-centrifuge-filter-bag-500x500.webp" className="img-thumbnail" alt="Centrifuge Bag" width="400px" />
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12"><img src="/static/images/filter-press-cloth.webp" className="img-thumbnail" alt="filter press cloth" width="400px"  />
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12"><img src="/static/images/fluid-bed-dryer-bag.webp" className="img-thumbnail" alt="" width="400px" height="200px" />
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12"><img src="/static/images/ANFD.png" className="img-thumbnail" alt="" width="400px" height="400px" />
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12"><img src="/static/images/sparkler-filter.webp" className="img-thumbnail" alt="" width="400px" />
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12"><img src="/static/images/dust-collector-filter-bag.png" className="img-thumbnail" alt="" width="400px" />
                    </div>
                </div>
            </div>

        </div>
    </div>
    </>
  )
}

export default Product
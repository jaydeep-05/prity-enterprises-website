import React from 'react'

const Carousel = () => {
  return (
    <div className='container'>
            <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="../src/assets/carousel1.webp" className="d-block w-100" alt="..." height="500px" width="300px"/>
                    <div className="carousel-caption d-none d-md-block">
                        <h1 style={{color:'red'}}>Pharmaceutical Industry</h1>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="../src/assets/carousel2.jpg" className="d-block w-100" alt="..." height="500px" width="300px"/>
                    <div className="carousel-caption d-none d-md-block">
                        <h1 style={{color:'black'}}>Chemical Industry</h1>
                       
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="../src/assets/carousel3.webp" className="d-block w-100" alt="..." height="500px" width="300px"/>
                    <div className="carousel-caption d-none d-md-block">
                        <h1 style={{color:'black'}}>ETP</h1>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
  )
}

export default Carousel
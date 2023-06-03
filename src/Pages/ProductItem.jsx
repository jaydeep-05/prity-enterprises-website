import React from 'react'
import Navbar from '../Components/Navbar'
import { Link } from "react-router-dom";
const ProductItem = () => {
  return (
   <>
   <nav className="navbar navbar-expand-lg">
            <img src="/static/images/Logo.JPG" alt="Bootstrap" width="75" height="75" style={{padding: '10px'}}/>
            <div className="container-fluid">
            <Link to="/" className='navbar-brand'>PRITY ENTERPRISES</Link>
            </div>
    </nav>
    <div class="container">
  <h1 style={{textAlign:'center'}}>Our Products</h1>
<div className="container catalogue">

  <table class="table">
    <tbody>
      <tr>
        <td className='product-img-container'>
          <img src="/static/images/industrial-centrifuge-filter-bag-500x500.webp" alt="Product Image" className="product-image" />
        </td>
        <td>
          <h5 className='product-head'>Centrifuge Bag</h5>
          <p className='product-desc'>
            Type: Basket Type, Lifting Type. <br />
            Media: PP,Polyester,Nylon,Cotton & Antistatic media<br />
            Sizes: As per equipment size 12" to 60"<br />
            Micron: up to 1 Micron
          </p>
        </td>
      </tr>
      <tr>
        <td className='product-img-container'>
          <img src="/static/images/fluid-bed-dryer-bag.webp" alt="Product Image" className="product-image"/>
        </td>
        <td>
          <h5 className='product-head'>FBD/FBP Bags</h5>
          <p className='product-desc'>
            Type: As per OEM Drg, GMP, Combo, Wooster etc. <br />
            Media: P. C Satin, Double Saitn, Poly Propline, Polyester,Antistatic Polyester, Antistatic Poly Propline. <br />
            Sizes: As per equipment size <br />
          </p>
        </td>
      </tr>
      <tr>
        <td className='product-img-container'>
          <img src="/static/images/filter-press.webp" alt="Product Image" className="product-image"/>
        </td>
        <td>
          <h5 className='product-head'>FILTER PRESS MEDIA</h5>
          <p className='product-desc'>
            Type: Plate & Frame and Recessed Type <br />
            Media: PP, Polyester, Nylon, Cotton & Special Coated Fabrics.<br />
            Sizes: As per equipment size <br />
          </p>
        </td>
      </tr>
      <tr>
        <td className='product-img-container'>
          <img src="/static/images/sparkler-filter.webp" alt="Product Image" className="product-image"/>
        </td>
        <td>
          <h5 className='product-head'>SPARKLER FILTERS PADS </h5>
          <p className='product-desc'>
            Type: Round, Square <br />
            Media: Cellulose Paper, Woven, Non-woven,Poly Propline, Polyester Woven, Cotton.<br />
            Sizes: As per equipment size<br />
            Application: Char-Coal, Activated Carbon & Catalyst Filtration.
          </p>
        </td>
      </tr>
      <tr>
        <td className='product-img-container'>
          <img src="/static/images/neutsch.webp" alt="Product Image" className="product-image"/>
        </td>
        <td>
          <h5 className='product-head'>NEUTCH FILTER BAG</h5>
          <p className='product-desc'>
            Type: Round Type, Square Type. <br />
            Media: PP, Polyester, Nylon, Cotton & Antistatic media<br />
            Sizes: As per equipment size 12" to 60"<br />
            Micron: up to 1 Micron
          </p>
        </td>
      </tr>
      <tr>
        <td className='product-img-container'>
          <img src="/static/images/dust-collector-filter-bag.png" alt="Product Image" className="product-image"/>
        </td>
        <td>
          <h5 className='product-head'>DUST COLLECTOR BAGS</h5>
          <p className='product-desc'>
            Type: Collar, Snap-Band fitting,Suitable for Pulse Jet, Reverse Jet, Shaking M/C.  <br />
            Media:Polyester non woven, PTFE Fiber Glass,Homo Polymer, Acrylic, Ryton, Nomex,OWR Coated Polyester non woven.<br />
            Sizes: As per equipment size <br />
          </p>
        </td>
      </tr>
      <tr>
        <td className='product-img-container'>
          <img src="/static/images/cartridge-filter.JPG" alt="Product Image" className="product-image"/>
        </td>
        <td>
          <h5 className='product-head'>Cartrdge Filter</h5>
          <p className='product-desc'>
            Type: Plated Type, Non-plated Type, Wire mesh type. <br />
            MOC: SS, M.S., Casting, Silicon Moulding.<br />
            Media: S.S. mesh, Cellouse Cotted Paper Media, Antistatic Media,Glass fiber Media, NT Paper Media. <br />
            Micron: up to 0.2 Micron
          </p>
        </td>
      </tr>
      <tr>
        <td className='product-img-container'>
          <img src="/static/images/sshousing.webp" alt="Product Image" className="product-image"/>
        </td>
        <td>
          <h5 className='product-head'>S.S. Housing & Housing Filter</h5>
          <p className='product-desc'>
            Type: Spun bonded, Mlded, Wound,Pleated in nominal. <br />
            MOC: PP, PC, SS<br />
            Media: S.S. mesh, P.P. mesh<br />
            Micron: up to 0.5 Micron
          </p>
        </td>
      </tr>
      <tr>
        <td className='product-img-container'>
          <img src="/static/images/pulveriser.webp" alt="Product Image" className="product-image"/>
        </td>
        <td>
          <h5 className='product-head'>PULLVELIZER BAG</h5>
          <p className='product-desc'>
            Type: One Side Open,Both Side Open. <br />
            Media: Polyester Woven Cloth, Cotton Woven Cloth<br />
            Sizes: As per equipment size<br />
          </p>
        </td>
      </tr>
      <tr>
        <td className='product-img-container'>
          <img src="/static/images/cage.webp" alt="Product Image" className="product-image"/>
        </td>
        <td>
          <h5 className='product-head'>Cage</h5>
          <p className='product-desc'>
            Type: Collar Type, Snap Band Type, U- Type <br />
            MOC: 5.5., M.S., G.I.a<br />
            Sizes: As per equipment size <br />
          </p>
        </td>
      </tr>
      <tr>
        <td className='product-img-container'>
          <img src="/static/images/ppfilter.jpg" alt="Product Image" className="product-image"/>
        </td>
        <td>
          <h5 className='product-head'>PP Pleated Filter Cartridge</h5>
          <p className='product-desc'>
            MOC: Polypropylene(PP) <br />
            Fitting: DOE, SOE, Code7<br />
            Size: 2.5" X 10", 20", 30", 40" <br />
            Micron: 0.1um,0.45um,25um
          </p>
        </td>
      </tr>


    </tbody>
  </table>
</div>
</div>

  
  
   
   </>
  )
}

export default ProductItem
import React from 'react'
let items=["bags","Jeans","Shoes"]
function Sidebar() {
    return (       
        <div className='sidebar bg-sb'>
            <div className='categories' >
                <div className='container'>
                    <h5 className='text-center'>PRODUCT CATEGORIES</h5>
                    <hr></hr>
                    <div className='category ms-5'>
                        <p>Bags</p>
                        <p>Jeans</p>
                        <p>Shoes</p>
                        <p>Sweaters</p>
                        <p>Tops</p>
                        <p>Women</p>
                        <p>Men</p>
                    </div>

                </div>

            </div>
            <div className='categories' >
                <div className='container'>
                    <h5 className='text-center'>PRODUCT CATEGORIES</h5>
                    <hr></hr>
                    <div className='category ms-5'>
                        <p>Bags</p>
                        <p>Jeans</p>
                        <p>Shoes</p>
                        <p>Sweaters</p>
                        <p>Tops</p>
                        <p>Women</p>
                        <p>Men</p>
                    </div>

                </div>

            </div>
            <ul class="dropdown-menu">
  <li><h6 class="dropdown-header">Dropdown header</h6></li>
  <li><a class="dropdown-item" href="#">Action</a></li>
  <li><a class="dropdown-item" href="#">Another action</a></li>
</ul>
            <div className='categories' >
                <div className='container'>
                    <h5 className='text-center'>PRODUCT CATEGORIES a</h5>
                    <hr></hr>
                    <div className='category ms-5'>
                        <ul>
                            {items.map((value, index) => {
                                return(<> 
                                <li key={index}><a class="dropdown-item" to="./">{value}</a></li>

                                </>
                                )

                            })}
                        </ul>
                    </div>

                  

                </div>

            </div>
          
        </div>
    )
}

export default Sidebar


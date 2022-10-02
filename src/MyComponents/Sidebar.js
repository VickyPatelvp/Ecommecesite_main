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
           
            <div className='categories' >
                <div className='container'>
                    <h5 className='text-center'>PRODUCT CATEGORIES</h5>
                    <hr></hr>
                    <div className='category ms-5'>
                        <ul>
                            {items.map((value, index) => {
                                return <li key={index}>{value}</li>
                            })}
                        </ul>
                    </div>

                </div>

            </div>
          
        </div>
    )
}

export default Sidebar


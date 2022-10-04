import React from 'react';
import Product from './Product';
import Sidebar from './Sidebar';


function Products() {
    let products = [
        {
            id: 1,
            name: "a",
            price: "1000"
        },
        {
            id: 2,
            name: "b",
            price: "1000"
        },
        {
            id: 3,
            name: "c",
            price: "1000"
        },
        {
            id: 4,
            name: "d",
            price: "1000"
        },
        {
            id: 5,
            name: "e",
            price: "1000"
        }
    ]

    return (
        <div className="row"> 
            <div className='col-3 bg-sb pt-5'>
                <Sidebar />
            </div>
            <div className='col-8'>



                <div className='row mt-5'>


                    {
                        products.map((product => {

                            return (
                                <Product product={product} />

                            )

                        }))
                    }

                </div>
            </div>
        </div>


    )
}

export default Products
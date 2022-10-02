import React from 'react'
import Staff from './Staff'
import AddProduct from './AddProduct'

export default function Adminpanel() {
  return (
    <div  className='row'>
        <div className='col-12 text-bold headingtext bg-gray-dark '><h2 className='p-2'>DashBoard</h2> </div>
        <div className='col-3 bg-green vh-1000'>
            <div className=' row text-center'>
                <div className='col-12 text-center border-1 bg-gray borderradius-4'>
                <button className='text-center border-none w-100 m-2 '>
                    <h4 className='p-2 text-black'> Staff</h4>
                    </button>
                </div>
                <div className='col-12 text-center border-1 bg-gray'>
                <button className='text-center border-none w-100  m-2'>
                    <h4 className='p-2 text-black'>Products</h4>
                    </button>
                    </div>
                <div className='col-12 text-center border-1 bg-gray'>
                <button className='text-center border-none w-100 m-2'>
                    <h4 className='p-2 text-black '>Manage Products</h4>
                    </button>
                </div>  
                <div className='col-12 text-center border-1 bg-gray'>
                <button className='text-center border-none w-100 m-2'>
                    <h4 className='p-2 text-black'>Customer Details</h4>
                    </button>
                </div>
               
                 <div className='col-12 text-center border-1 bg-gray'>
                <button className='text-center border-none w-100 m-2'>
                    <h4 className='p-2 text-black'>Orders</h4>
                    </button>
                </div>
                <div className='col-12 text-center border-1 bg-gray'>
                <button className='text-center border-none w-100 m-2'>
                    <h4 className='p-2 text-black'>Payments</h4>
                    </button>
                </div>
                <div className='col-12 text-center border-1 bg-gray'>
                <button className='text-center border-none w-100 m-2'>
                    <h4 className='p-2 text-black'>Logout</h4>
                    </button>
                </div>
            

            </div>
        </div>
        <div className='col-9'>
            {/* <Staff/> */}
            <AddProduct/>
        </div>

      
    </div>
  )
}


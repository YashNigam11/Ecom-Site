import React from 'react'
import { useSelector } from 'react-redux'


function Cart() {
  return (
    <div>
        <div className="row">
            <div className="col-md-4">
                <img src={product.image} alt={product.title} height='200px' width='180px'/>
            </div>
            <div className="col-md-4">
                <h3>{product.title}</h3>
                <p className='lead fw-bold'>
                    ${product.price} X {product.qty} = ${product.qty * product.price}
                </p>
            </div>
            <button className='btn -btn-outline-dark me-4' onClick={()=>handleButton(product)}>
                <div className="fa fa-minus"></div>
            </button>
            <button className='btn -btn-outline-dark ' onClick={()=>handleButton(product)}>
                <div className="fa fa-plus"></div>
            </button>
        </div>
    </div>
  )
}

export default Cart
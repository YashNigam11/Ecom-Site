import React, { useState, useEffect , useContext} from "react";
import { NavLink, useParams } from "react-router-dom";
// import Skeleton from "react-loading-skeleton";
import { useDispatch} from "react-redux";
import { addCart } from "./redux/action";
import { cartItems } from "./App";


export default function Prod() {
  const {items,setItems} = useContext(cartItems)
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  // console.log(productId)

  // const dispatch= useDispatch()
  // const addProduct = (product) =>{
  //   dispatch(addCart(product));

  // }
  const addProduct= (product)=>{
    setItems((prev)=>[...prev,product])
  }
  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await res.json());
      setLoading(false);
    };
    getProduct();
  }, []);

  const Loading = () => {
    return <>
    Loading............
    </>
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.title}
            height="400px"
            width="400px"
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">{product.category}</h4>
          <h1 className="display-5">{product.title}</h1>
          <p className="lead">
            Rating {product.rating  &&  product.rating.rate}
            <i className="fa fa-star"></i>
          </p>
          <h3 className="display-6 fw-bold my-4">${product.price}</h3>
          <p className="lead">{product.description}</p>
          <button className="btn btn-outline-dark px-4 py-2" onClick={()=>addProduct(product)}>Add to Cart</button>
          <NavLink to='/cart' className="btn btn-outline-dark ms-2 px-3 py-2">Go to Cart</NavLink>
        </div>
      </>
    );
  };
  // console.log(ShowProduct());
  return (
    <div>
      <div className="container py-5">
        <div className="row py-5">{loading ? <Loading /> : <ShowProduct />}</div>
      </div>
    </div>
  );
}

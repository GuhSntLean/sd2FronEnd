import './styles.css';

import Stepheader from '../../component/Stepheader/Stepheader';
import ProductsList from '../../component/ProductsList/ProductsList';
import { useEffect, useState } from 'react';
import { Product } from './types';
import { fetchProducts } from '../../config/Api';

function Orders(){
  const[products, setProducts] = useState<Product []>([]);
  
  useEffect( ()=>{
    fetchProducts()
    .then(response => setProducts(response.data))
    .catch(error => console.log(error))
  },[]);


  return(
    <div className="orders-container">
      <Stepheader/>
      <ProductsList products={products}/>
    </div>
  );
}

export default Orders;
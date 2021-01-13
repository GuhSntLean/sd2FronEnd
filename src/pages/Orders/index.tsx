import './styles.css';

import Stepheader from '../../component/Stepheader/Stepheader';
import ProductsList from '../../component/ProductsList/ProductsList';
import { useEffect, useState } from 'react';
import { OrderLocationdata, Product } from './types';
import { fetchProducts } from '../../config/Api';
import OrderLocation from '../../component/OrderLocation/OrderLocation';

function Orders(){
  const[products, setProducts] = useState<Product []>([]);
  const[orderLocation, setOrderLocation] = useState<OrderLocationdata>();
  
  useEffect(()=>{
    fetchProducts()
    .then(response => setProducts(response.data))
    .catch(error => console.log(error))
  },[]);


  return(
    <div className="orders-container">
      <Stepheader/>
      <ProductsList products={products}/>
      <OrderLocation onChangeLocation={location => setOrderLocation(location)}/>
    </div>
  );
}

export default Orders;
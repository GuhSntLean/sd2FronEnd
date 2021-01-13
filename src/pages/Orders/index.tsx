import './styles.css';

import Stepheader from '../../component/Stepheader/Stepheader';
import ProductsList from '../../component/ProductsList/ProductsList';
import { useEffect, useState } from 'react';
import { OrderLocationdata, Product } from './types';
import { fetchProducts } from '../../config/Api';
import OrderLocation from '../../component/OrderLocation/OrderLocation';
import OrderSummary from '../../component/OrderSummary';
import Footer from '../../component/Footer';
import { checkIsSelected } from '../../component/ProductCard/helpers';

function Orders(){
  const[products, setProducts] = useState<Product []>([]);
  const[selectedProducts, setSelectedProducts] = useState<Product []>([]);
  const[orderLocation, setOrderLocation] = useState<OrderLocationdata>();

  useEffect(()=>{
    fetchProducts()
    .then(response => setProducts(response.data))
    .catch(error => console.log(error))
  },[]);

  const handleSelectProduct = (product: Product) => {
    const isAlreadySelected = checkIsSelected(selectedProducts, product);
    if(isAlreadySelected){
      const selected = selectedProducts.filter(item => item.id !== product.id);
      setSelectedProducts(selected);
    }else{
      setSelectedProducts(previous => [...previous, product]);
    }
  }

  return(
    <>
      <div className="orders-container">
        <Stepheader/>
        <ProductsList 
          products={products}
          onSelectProduct={handleSelectProduct}
          selectedProducts={selectedProducts}
        />
        <OrderLocation 
          onChangeLocation={location => setOrderLocation(location)}
        />
        <OrderSummary /> 
      </div>
      <Footer/>
    </>
  );
}

export default Orders;
import './styles.css';

import Stepheader from '../../component/Stepheader/Stepheader';
import ProductsList from '../../component/ProductsList/ProductsList';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { OrderLocationData, Product } from './types';
import { fetchProducts, saveOrder } from '../../config/Api';
import OrderLocation from '../../component/OrderLocation/OrderLocation';
import OrderSummary from '../../component/OrderSummary';
import Footer from '../../component/Footer';
import { checkIsSelected } from '../../component/ProductCard/helpers';

function Orders(){
  const[products, setProducts] = useState<Product []>([]);
  const[selectedProducts, setSelectedProducts] = useState<Product []>([]);
  const[orderLocation, setOrderLocation] = useState<OrderLocationData>();
  const totalPrice = selectedProducts.reduce((sum, item) => {return sum + item.price}, 0);

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

  const handleSumit = () => {
    const productsIds = selectedProducts.map(({id}) => ({id}));
    const payload = {
      ...orderLocation!,
      products : productsIds
    }

    saveOrder(payload)
    .then((response) => {
      toast.error(`Pedido realizado com sucesso Nº ${response.data.id}`);
      setSelectedProducts([]);
    })
    .catch(() => {
      toast.warning('Erro ao realizar o pedido');
    })

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
        <OrderSummary 
          amount={selectedProducts.length} 
          totalPrice={totalPrice} 
          onSubmit = {handleSumit}/> 
      </div>
      <Footer/>
    </>
  );
}

export default Orders;
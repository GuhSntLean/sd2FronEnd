import './styles.css';

import Stepheader from '../../component/Stepheader/Stepheader';
import ProductsList from '../../component/ProductsList/ProductsList';

function Orders(){
  return(
    <div className="orders-container">
      <Stepheader/>
      <ProductsList/>
    </div>
  )  
}

export default Orders;
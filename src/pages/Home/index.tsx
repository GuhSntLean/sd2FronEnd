import './styles.css';
import {ReactComponent as MainImage} from '../../assets/image-main.svg';


function Home(){
  return(
    <div className="home-container">
      <div className="home-content">
        <div className="home-actions">
          <h1 className="home-title">
            Faça seu pedido
            <br/> que entregamos
            <br/> para você!
          </h1>
          <h3 className="home-subtitle">
            Escolha o seu pedido e em pouco minutos<br/>
            levaremos ate você
          </h3>
          <a href="orders" className="home-btn-order">
            Fazer pedido
          </a>
        </div>
        <div className="home-image">
            <MainImage/>
        </div>
      </div>
    </div>
  )
}

export default Home;
import './styles.css';

import { ReactComponent as Instagram } from '../../assets/Instagram.svg';
import { ReactComponent as Youtube } from '../../assets/Youtube.svg';
import { ReactComponent as Linkedin } from '../../assets/Linkedin.svg';

function Footer(){
  return(
    <footer className="main-footer"> 
      App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
      <div className="footer-icons"> 
        <a href="home" target="_new">
          <Instagram/>
        </a>
        <a href="home" target="_new">
          <Youtube/>
        </a>
        <a href="home" target="_new">
          <Linkedin/>
        </a>
      </div>
    </footer>
  )
}

export default Footer;
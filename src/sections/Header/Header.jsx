import './Header.css';
import ellosImg from '../../../Img/ellos.png';

function Header() {
  return (
    <header>

      <div className='header-left'>

        <img src={ellosImg} alt="Raíces Dúo" className="header-img" />

      </div>



      <div className='header-right'>

        <h1>Raíces Dúo</h1>

      </div>


    </header>
  );
}

export default Header;
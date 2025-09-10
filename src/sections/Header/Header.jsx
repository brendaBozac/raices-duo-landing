import './Header.css';
import ellosImg from '../../../Img/ellos.png';
import logoHeader from '../../../Img/raices-logo-header.png';

function Header() {
  return (
    <header>
      <div className='header-left'>
        <img src={ellosImg} alt="Maryta Villalón y César Degiovanni" className="header-img" />
      </div>

      <div className='header-right'>
        {/* Logo visible */}
        <img src={logoHeader} alt="Raíces Dúo Logo" className="header-logo" />
        {/* H1 oculto para SEO */}
        <h1 className="visually-hidden">Raíces Dúo</h1>
      </div>
    </header>
  );
}

export default Header;

import 'react';
import { Link } from 'react-router-dom';
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify } from 'react-icons/bs';

function Header() {
  return (
    <header className="header">
      
      <div className="menu-icon">
        <BsJustify className="icon" />
      </div>
      
      <div className="header-left">
        <BsSearch className="icon" />
      </div>
      
      <div className="header-right">
        {/* Link the Bell icon to the Alert page */}
        <Link to="/Alert">
          <BsFillBellFill className="icon" />
        </Link>

        <Link to="/Profile">
        <BsPersonCircle className="icon" />
        </Link>

        <Link to="#">
        <BsFillEnvelopeFill className="icon" />
        </Link>
        
      </div>

    </header>
  );
}

export default Header;

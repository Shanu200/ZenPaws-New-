import 'react'; 
import { BsGrid1X2Fill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs';
import { Link } from 'react-router-dom'; 

function Item() {
    console.log('Item component rendered'); 
  

  return (
    <main className="main-container">
      <div className="main-title">
        <h1>ITEMS</h1>
      </div>

      <div className="main-card">
        <div className="card">
            <Link to="/Home">
            <div className="card-inner">
                <h3>DASHBOARD</h3>
                <BsGrid1X2Fill className="card-icon" />
            </div>
            </Link>
        </div>

        <div className="card">
          <Link to="/Categories">
            <div className="card-inner">
              <h3>CATEGORIES</h3>
              <BsFillGrid3X3GapFill className="card-icon" />
            </div>
            <h2>5</h2>
            </Link>
        </div>

        <div className="card">
          <Link to="/Customer"> {/* Link to the Customer page */}
            <div className="card-inner">
              <h3>CUSTOMERS</h3>
              <BsPeopleFill className="card-icon" />
            </div>
            <h2>75</h2>
          </Link>
        </div>

        <div className="card">
          <Link to="/Alert">
            <div className="card-inner">
              <h3>ALERTS</h3>
              <BsFillBellFill className="card-icon" />
            </div>
            <h2>10</h2>
          </Link>
        </div>
      </div>

      
    </main>
  );
}

export default Item;

import 'react'; 
import { BsFillArchiveFill, BsPeopleFill, BsGrid1X2Fill, BsFillBellFill } from 'react-icons/bs';
import { Link } from 'react-router-dom'; 

function Categories() {
    console.log('Categories component rendered'); 

    return (
        <main className="main-container">
            <div className="main-title">
                <h1>CATEGORIES</h1>
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
                    <Link to="/Products"> {/* Updated from <a href="#"> to <Link> */}
                        <div className="card-inner">
                            <h3>PRODUCTS</h3>
                            <BsFillArchiveFill className="card-icon" />
                        </div>
                        <h2>30</h2>
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
                    <div className="card-inner">
                        <h3>ALERTS</h3>
                        <BsFillBellFill className="card-icon" />
                    </div>
                    <h2>10</h2>
                </div>
            </div>
        </main>
    );
}

export default Categories;

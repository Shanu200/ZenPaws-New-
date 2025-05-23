import 'react'; 
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs';
import { Link } from 'react-router-dom'; 
import { 
  BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer 
} from 'recharts';

function Home() {
    console.log('Home component rendered'); 
  const data = [
    { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
  ];

  return (
    <main className="main-container">
      <div className="main-title">
        <h1>DASHBOARD</h1>
      </div>

      <div className="main-card">
        <div className="card">
          <Link to="/Item">
            <div className="card-inner">
              <h3>ITEMS</h3>
              <BsFillArchiveFill className="card-icon" />
            </div>
            <h2>30</h2>
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

      {/* Charts */}
      <div className="charts">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#7C444F" activeBar={<Rectangle fill="#FB9EC6" stroke="#FB9EC6" />} />
            <Bar dataKey="uv" fill="#E82561" activeBar={<Rectangle fill="#FBB4A5" stroke="#FBB4A5" />} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
}

export default Home;

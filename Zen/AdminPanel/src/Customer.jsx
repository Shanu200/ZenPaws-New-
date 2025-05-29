import { useState } from 'react';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsGrid1X2Fill, BsFillBellFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import DataTable from 'react-data-table-component';


function Customer() {
    console.log('Customer component rendered');
    
    const customStyles = {
      table: {
          style: {
              backgroundColor: "#a85f6e", // Table background color
              color: "#ffffff", // Text color
          }
      },
      headRow: {
          style: {
              backgroundColor: "#49282f", // Header background color
              color: "#ffffff",
              fontSize: "17px",
          }
      },
  };
  const columns = [
    { name: 'Full Name', selector: row => row.name, sortable: true },
    { name: 'Email', selector: row => row.email, sortable: true },
    { name: 'Contact', selector: row => row.contact },
    { name: 'Date', selector: row => row.date, sortable: true },
    {
        name: 'Edit',
        cell: row => (
            <button 
                className="btn btn-edit"
                onClick={() => alert(`Edit ${row.name}`)}
            >
                Edit
            </button>
        )
    },
    {
        name: 'Delete',
        cell: row => (
            <button 
                className="btn btn-delete"
                onClick={() => alert(`Delete ${row.name}`)}
            >
                Delete
            </button>
        )
    }
];


    const data = [
        { id: 1, name: 'Nisadi Wijerathna', email: 'nisadi@gmail.com', contact: '0770366935', date: '04.01.2025' },
        { id: 2, name: 'Sanduni Vihara', email: 'vihara@gmail.com', contact: '0764805656', date: '04.02.2025' },
        { id: 3, name: 'Imasha Kalpani', email: 'kalpani@gmail.com', contact: '0775987735', date: '04.05.2025' },
        { id: 4, name: 'Pasindu Mathsara', email: 'mathsara@gmail.com', contact: '0770379950', date: '04.04.2025' },
        { id: 5, name: 'Pramila Shanuka', email: 'pramila@gmail.com', contact: '0760889782', date: '04.02.2025' },
        { id: 6, name: 'Maya Perera', email: 'maya@gmail.com', contact: '0715799964', date: '04.02.2025' },
        { id: 7, name: 'Radiv Silva', email: 'radiv@gmail.com', contact: '0726681573', date: '04.02.2025' },
        { id: 8, name: 'Athor Colins', email: 'athor@gmail.com', contact: '0715964573', date: '14.07.2025' },
        { id: 9, name: 'Mogana Megan', email: 'mogana@gmail.com', contact: '0726648963', date: '14.02.2025'},
        { id: 10, name: 'Merlin Coller', email: 'merlin@gmail.com', contact: '0724882583', date: '25.02.2025'},
        { id: 11, name: 'Krish Yadev', email: 'krish@gmail.com', contact: '0722881567', date: '19.05.2025'}
    ];

    const [records, setRecords] = useState(data);

    function handleFilter(event) {
        const searchValue = event.target.value.toLowerCase();
        const filteredRecords = data.filter(row =>
            row.name.toLowerCase().includes(searchValue) ||
            row.email.toLowerCase().includes(searchValue) ||
            row.contact.includes(searchValue) ||
            row.date.includes(searchValue)
        );
        setRecords(filteredRecords);
    }

    return (
        <main className="main-container">
            <div className="main-title">
                <h1>CUSTOMERS</h1>
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
                    <Link to="/Alert">
                    <div className="card-inner">
                        <h3>ALERTS</h3>
                        <BsFillBellFill className="card-icon" />
                    </div>
                    <h2>10</h2>
                    </Link>
                </div>
            </div>

            <br /><br />

            <div className="container mt-5">
                <div className="text-end mb-3">
                    <input 
                        type="text" 
                        className="form-control w-25 d-inline" 
                        placeholder="Search customers..." 
                        onChange={handleFilter} 
                    />
                </div>
                <DataTable
                    columns={columns}
                    data={records}
                    selectableRows
                    fixedHeader
                    pagination
                    highlightOnHover
                    responsive
                    striped
                    pointerOnHover
                    customStyles={customStyles}
                />
            </div>
        </main>
    );
}

export default Customer;

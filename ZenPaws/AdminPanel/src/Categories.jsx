import { useState } from 'react';
import { BsFillArchiveFill, BsPeopleFill, BsGrid1X2Fill, BsFillBellFill, BsPencilSquare, BsTrash, BsFillEyeFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import DataTable from 'react-data-table-component';
import category_dog from './assets/category_dog.jpg';
import category_cat from './assets/category_cat.jpg';
import category_rabbit from './assets/category_rabbit.jpg';
import category_fish from './assets/category_fish.jpg';
import category_hamster from './assets/category_hamster.jpg';

function Categories() {
    console.log('Categories component rendered');

    const customStyles = {
        table: { 
            style: { backgroundColor: "#a85f6e", color: "#ffff" } 
        },
        headRow: { 
            style: { 
                backgroundColor: "#49282f", 
                color: "#ffffff", 
                fontSize: "17px", 
                textAlign: "center"
            } 
        },
        rows: {
            style: { textAlign: "center" }
        },
        cells: {
            style: { textAlign: "center" } 
        },
        headCells: {
            style: { 
                textAlign: "center", 
                justifyContent: "center"
            }
        }
    };
    
    const [expandedRows, setExpandedRows] = useState({});
    const [records, setRecords] = useState([
        { id: 1, category: 'Dogs', total: '30', image:category_dog, description: 'The dog is a domesticated descendant of the gray wolf. Also called the domestic dog, it was selectively bred from an extinct population of wolves during the Late Pleistocene by hunter-gatherers. The dog was the first species to be domesticated by humans, over 14,000 years ago and before the development of agriculture.' },
        { id: 2, category: 'Cats', total: '40', image:category_cat, description: 'The cat, also referred to as the domestic cat, is a small domesticated carnivorous mammal. It is the only domesticated species of the family Felidae. Advances in archaeology and genetics have shown that the domestication of the cat occurred in the Near East around 7500 BC.' },
        { id: 3, category: 'Rabbits', total: '12', image:category_rabbit, description: 'Rabbits are small mammals in the family Leporidae, which is in the order Lagomorpha. They are familiar throughout the world as a small herbivore, a prey animal, a domesticated form of livestock, and a pet, having a widespread effect on ecologies and cultures.' },
        { id: 4, category: 'Hamsters', total: '10', image:category_hamster, description: 'Hamsters are rodents belonging to the subfamily Cricetinae, which contains 19 species classified in seven genera. They have become established as popular small pets. The best-known species of hamster is the golden or Syrian hamster, which is the type most commonly kept as a pet.' },
        { id: 5, category: 'Fish', total: '45', image:category_fish, description: 'A fish is an aquatic, anamniotic, gill-bearing vertebrate animal with swimming fins and a hard skull, but lacking limbs with digits.' }
    ]);

    const toggleExpand = (id) => {
        setExpandedRows(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const handleFilter = (event) => {
        const searchValue = event.target.value.toLowerCase();
        setRecords(records.filter(row =>
            row.category.toLowerCase().includes(searchValue) ||
            row.description.toLowerCase().includes(searchValue)
        ));
    };

    const columns = [
        { 
            name: 'Image', 
            selector: row => row.image, 
            width: '100px',
            cell: row => (
                <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                    <img 
                        src={row.image} 
                        alt={row.category} 
                        style={{ width: '40px', height: '40px', borderRadius: '5px' }} 
                    />
                </div>
            ) 
        },
        { 
            name: 'Category', 
            selector: row => row.category, 
            width: '150px', 
            sortable: true,
            cell: row => <div style={{ width: "100%", textAlign: "center" }}>{row.category}</div>
        },
        { 
            name: 'Total Pets', 
            selector: row => row.total, 
            width: '150px',  
            sortable: true,
            cell: row => <div style={{ width: "100%", textAlign: "center" }}>{row.total}</div>
        },
        { 
            name: 'Description', 
            cell: row => (
                <div style={{ textAlign: "left", width: "100%" }}>
                    {row.description.length > 100 ? row.description.slice(0, 100) + '...' : row.description}
                    {row.description.length > 100 && (
                        <button 
                            className="btn btn-link p-0" 
                            onClick={() => toggleExpand(row.id)}
                            style={{ 
                                color: '#7C444F', 
                                textDecoration: 'none', 
                                marginLeft: '5px', 
                                border: 'none', 
                                background: 'none', 
                                padding: '0', 
                                cursor: 'pointer' 
                            }}
                        >
                            {expandedRows[row.id] ? 'Read Less' : 'Read More'}
                        </button>
                    )}
                </div>
            ) 
        },
        {
            name: 'Actions',
            cell: () => (
                <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', width: "100%" }}>
                    <button className="btn btn-warning btn-sm"><BsPencilSquare /></button>
                    <button className="btn btn-danger btn-sm"><BsTrash /></button>
                    <button className="btn btn-info btn-sm"><BsFillEyeFill /></button>
                </div>
            )
        }
    ];
    
    

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
                    <Link to="/Products">
                        <div className="card-inner">
                            <h3>PRODUCTS</h3>
                            <BsFillArchiveFill className="card-icon" />
                        </div>
                        <h2>30</h2>
                    </Link>
                </div>

                <div className="card">
                    <Link to="/Customer">
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

            <br /><br />

            <div className="container mt-5">
                <div className="text-end mb-3">
                    <input
                        type="text"
                        className="form-control w-25 d-inline"
                        placeholder="Search categories..."
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

export default Categories;

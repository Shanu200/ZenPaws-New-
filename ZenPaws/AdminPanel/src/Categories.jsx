import { useState } from 'react';
import { BsFillArchiveFill, BsPeopleFill, BsGrid1X2Fill, BsFillBellFill, BsPencilSquare, BsTrash, BsFillEyeFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import DataTable from 'react-data-table-component';

function Categories() {
    console.log('Categories component rendered');

    const customStyles = {
        table: { style: { backgroundColor: "#a85f6e", color: "#ffffff" } },
        headRow: { style: { backgroundColor: "#49282f", color: "#ffffff", fontSize: "17px" } }
    };

    const [expandedRows, setExpandedRows] = useState({});
    const [editMode, setEditMode] = useState(null);
    const [records, setRecords] = useState([
        { id: 1, category: 'Dogs', total: '30', description: 'The dog is a domesticated descendant of the gray wolf. Also called the domestic dog, it was selectively bred from an extinct population of wolves during the Late Pleistocene by hunter-gatherers. The dog was the first species to be domesticated by humans, over 14,000 years ago and before the development of agriculture.' },
        { id: 2, category: 'Cats', total: '40', description: 'The cat, also referred to as the domestic cat, is a small domesticated carnivorous mammal. It is the only domesticated species of the family Felidae. Advances in archaeology and genetics have shown that the domestication of the cat occurred in the Near East around 7500 BC.' },
        { id: 3, category: 'Rabbits', total: '12', description: 'Rabbits are small mammals in the family Leporidae, which is in the order Lagomorpha. They are familiar throughout the world as a small herbivore, a prey animal, a domesticated form of livestock, and a pet, having a widespread effect on ecologies and cultures.' },
        { id: 4, category: 'Hamsters', total: '10', description: 'Hamsters are rodents belonging to the subfamily Cricetinae, which contains 19 species classified in seven genera. They have become established as popular small pets. The best-known species of hamster is the golden or Syrian hamster, which is the type most commonly kept as a pet.' },
        { id: 5, category: 'Fish', total: '45', description: 'A fish is an aquatic, anamniotic, gill-bearing vertebrate animal with swimming fins and a hard skull, but lacking limbs with digits.' }
    ]);

    const toggleExpand = (id) => {
        setExpandedRows(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const handleEdit = (id, field, value) => {
        setRecords(records.map(row => row.id === id ? { ...row, [field]: value } : row));
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
            name: 'Category',
            selector: row => row.category,
            sortable: true,
            cell: row => (
                editMode === row.id ?
                    <input
                        type="text"
                        value={row.category}
                        onChange={(e) => handleEdit(row.id, 'category', e.target.value)}
                        onBlur={() => setEditMode(null)}
                        autoFocus
                    />
                    :
                    <span onDoubleClick={() => setEditMode(row.id)}>{row.category}</span>
            )
        },
        { name: 'Total Pets', selector: row => row.total, sortable: true },
        {
            name: 'Description',
            cell: row => (
                <div>
                    {expandedRows[row.id] ? row.description : `${row.description.slice(0, 100)}...`}
                    <button
                        className="btn btn-link p-0"
                        onClick={() => toggleExpand(row.id)}
                        style={{ color: '#fff', textDecoration: 'underline', marginLeft: '5px' }}
                    >
                        {expandedRows[row.id] ? 'Read Less' : 'Read More'}
                    </button>
                </div>
            )
        },
        {
            name: 'Actions',
            cell: row => (
                <div style={{ display: 'flex', gap: '10px' }}>
                    <button className="btn btn-warning btn-sm" onClick={() => setEditMode(row.id)}>
                        <BsPencilSquare />
                    </button>
                    <button className="btn btn-danger btn-sm" onClick={() => alert(`Delete ${row.category}`)}>
                        <BsTrash />
                    </button>
                    <button className="btn btn-info btn-sm" onClick={() => alert(`View ${row.category}`)}>
                        <BsFillEyeFill />
                    </button>
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

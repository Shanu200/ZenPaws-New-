import 'react';
import {
  BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsListCheck, BsListColumns, BsFillGearFill
} from 'react-icons/bs';

import logo1 from './assets/logo1.jpg'; // Correct the path based on the actual folder structure

function SideBar() {
  return (
    <aside id="sidebar">
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <img src={logo1} alt="ZenPaws Logo" className="icon_header" />
          ZenPaws
        </div>
        <span className="icon close-icon">X</span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <a href="Home">
            <BsGrid1X2Fill className="icon" /> Dashboard
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="Item">
            <BsFillArchiveFill className="icon" /> Items
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="Categories">
            <BsFillGrid3X3GapFill className="icon" /> Categories
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="Customer">
            <BsPeopleFill className="icon" /> Customers
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#">
            <BsListColumns className="icon" /> Orders
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="Alert">
            <BsListCheck className="icon" /> Alert
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#">
            <BsFillGearFill className="icon" /> Settings
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default SideBar;

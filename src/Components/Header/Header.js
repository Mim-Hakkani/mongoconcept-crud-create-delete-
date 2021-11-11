import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav >
          <ul style={{listStyle:'none'}}>
            
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/adduser">AddUsers</Link>
            </li>
            <li>
              <Link to="/updateuser">UpdateUsers</Link>
            </li>
            <li>
              <Link to="/deleteuser">DeleteUsers</Link>
            </li>
          </ul>
        </nav>
        </div>
    );
};

export default Header;
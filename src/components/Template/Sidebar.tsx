import React from 'react';

const Sidebar = () => {
  return (
    <>
    <nav id="sidebar" className="bg-light">
      <div className="p-4">
        <h4>Nama Situs Anda</h4>
        <ul className="list-unstyled components">
          <li className="active">
            <a href="#">Beranda</a>
          </li>
          <li>
            <a href="#">Tentang Kami</a>
          </li>
          <li>
            <a href="#">Layanan</a>
          </li>
          <li>
            <a href="#">Kontak</a>
          </li>
        </ul>
      </div>
    </nav>
    </>
  );
}

export default Sidebar;

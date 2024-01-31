import { useState } from 'react';

import { HiOutlineMenu } from 'react-icons/hi';
import { AiOutlineCloseCircle } from 'react-icons/ai';

import '../../styles/components/Menu.scss';

import MenuLinks from './MenuLinks';

function Menu() {
  const [showMenu, setShowMenu] = useState(false);

  function handleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <>
      <button id="menu_icon" className="btn" onClick={handleMenu}>
        <HiOutlineMenu />
      </button>

      {showMenu && (
        <div id="menu_modal">
          <div className="menu_container">
            <button className="btn" onClick={handleMenu}>
              <AiOutlineCloseCircle />
            </button>
            <MenuLinks handleMenu={handleMenu} />
          </div>
        </div>
      )}
    </>
  );
}

export default Menu;

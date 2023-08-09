import { HiOutlineMenu } from "react-icons/hi";
import { useState } from 'react';

import "../../styles/components/Menu.scss";

import NavbarTopLink from './NavbarTopLink'
import NavbarBottom from "./NavbarBottom";

function Menu() {
    const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
        <div>
        <button id="menu_icon" onClick={handleModal}>
            <HiOutlineMenu />
        </button>

        {showModal && (
            <div className="modal show fade menu_modal" tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" onClick={handleModal}>
                                <span>&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <NavbarBottom />
                            <ul className="navbar-nav">
                                <NavbarTopLink />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )}
    </div>
    </>
  )
}

export default Menu
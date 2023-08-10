import { HiOutlineMenu } from "react-icons/hi";
import { useState } from 'react';

import "../../styles/components/Menu.scss";

import MenuLinks from './MenuLinks'

function Menu() {
    const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
        <button id="menu_icon" onClick={handleModal}>
            <HiOutlineMenu />
        </button>

        {showModal && (
            <div className="modal show fade menu_modal" tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="close" onClick={handleModal}>
                                <span>&times;</span>
                            </button>
                            <MenuLinks handleModal={handleModal} />
                        </div>
                    </div>
                </div>
            </div>
        )}
    </>
  )
}

export default Menu
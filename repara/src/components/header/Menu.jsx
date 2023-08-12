import { HiOutlineMenu } from "react-icons/hi";
import { AiOutlineCloseCircle } from "react-icons/ai";

import "../../styles/components/Menu.scss";

import MenuLinks from './MenuLinks'

function Menu() {

  return (
    <>
        <button id="menu_icon" className="btn" data-bs-toggle="modal"data-bs-target="#modal">
            <HiOutlineMenu />
        </button>

        <div id="modal" className="modal fade menu_modal">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button id="menu_close" className="btn" data-bs-toggle="modal"data-bs-target="#modal">
                            <AiOutlineCloseCircle />
                        </button>
                    </div>

                    <div className="modal-body">
                        <MenuLinks/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Menu
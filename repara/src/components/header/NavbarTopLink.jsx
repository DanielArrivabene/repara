/* eslint-disable react/prop-types */

function NavbarTopLink(props) {
    return (
        <li className="navbar_top__item nav-item">
            <p>{props.icon} {props.label}:</p>
            <a className="nav-link" href={props.href}>{props.data}</a>
        </li>
    )
}

export default NavbarTopLink
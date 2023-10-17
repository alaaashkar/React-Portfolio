import React, { useState } from 'react';
import './Sidebar.scss';
import cn from 'classnames';
import Logo from '../../assets/images/logo-no-background.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faSkype } from '@fortawesome/free-brands-svg-icons';
import 'animate.css';

export const Sidebar = () => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const [menuIsClicked, setMenuIsClicked] = useState(false);

  const handleMenuClick = () => {
    setIsMenuToggled(!isMenuToggled);
    setMenuIsClicked(true);
  };

  console.log(menuIsClicked);


  return (
    <>
      <div className="nav-bar">
        <Link to="/">
          <img className="logo" src={Logo} alt="logo" />
        </Link>

        <div className="nav">
          <Link to="/">
            <FontAwesomeIcon className="nav__icon" icon={faHouse} />
          </Link>
          <Link to="/about">
            <FontAwesomeIcon className="nav__icon" icon={faUser} />
          </Link>
          <Link to="/contact">
            <FontAwesomeIcon className="nav__icon" icon={faEnvelope} />
          </Link>
        </div>

        <ul className="nav-socialLinks">
          <li>
            <a href="https://www.linkedin.com/in/alaa-ashkar/" target="__blank">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a href="https://github.com/alaaashkar" target="__blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li>
            <a href="skype:live:.cid.106a99bd431dd4d1" target="__blank">
              <FontAwesomeIcon icon={faSkype} />
            </a>
          </li>
        </ul>

        {/* Button to toggle the sidebar on small screens */}
        <button className="menu-button" onClick={handleMenuClick}>
          <FontAwesomeIcon className="menu-burger" icon={faBars} />
        </button>
      </div>

      {menuIsClicked && (
        <div
          className={cn('nav-bar-open', {
            'animate__animated animate__slideInRight': isMenuToggled,
            'animate__animated animate__slideOutRight': !isMenuToggled,
          })}
        >
          <Link to="/">
            <FontAwesomeIcon className="nav__icon" icon={faHouse} />
          </Link>

          <Link to="/about">
            <FontAwesomeIcon className="nav__icon" icon={faUser} />
          </Link>

          <Link to="/contact">
            <FontAwesomeIcon className="nav__icon" icon={faEnvelope} />
          </Link>

          <li>
            <a href="https://www.linkedin.com/in/alaa-ashkar/" target="__blank">
              <FontAwesomeIcon className="nav__icon" icon={faLinkedin} />
            </a>
          </li>

          <li>
            <a href="https://github.com/alaaashkar" target="__blank">
              <FontAwesomeIcon className="nav__icon" icon={faGithub} />
            </a>
          </li>

          <li>
            <a href="skype:live:.cid.106a99bd431dd4d1" target="__blank">
              <FontAwesomeIcon className="nav__icon" icon={faSkype} />
            </a>
          </li>
        </div>
      )}

    </>
  );
};

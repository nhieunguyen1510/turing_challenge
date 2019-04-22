import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import map from 'ramda/src/map';
import styled from 'styled-components';

import Img from 'components/Img';
import searchIcon from 'assets/icons/icons-search-black.png';
import bagIcon from 'assets/icons/icons-bag.png';
import messages from './messages';
import menus from './menus';

const renderMenus = map((menu) => (<li key={menu.id} className="text-15 font-montserrat font-bold px-25"><FormattedMessage {...menu} /></li>));

const Number = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  padding: 0.4rem;
  transform: translate(50%, -50%);
`;

class Header extends React.Component {
  render() {
    const cartItemQuantity = 6;

    return (
      <header>
        <div className="container flex items-center py-18">
          <Link className="text-24 font-montserrat font-bold tracking-17 text-pink leading-normal" to="/">
            <FormattedMessage {...messages.home} />
          </Link>
          <nav className="flex-1">
            <ul className="flex pl-50">
              {renderMenus(menus)}
            </ul>
          </nav>
          <div className="w-20 mr-32">
            <Img src={searchIcon} ratio={1} />
          </div>
          <div className="w-20">
            <Img src={bagIcon} ratio={1}>
              <Number className="absolute pin-t pin-r text-center leading-none font-semibold text-white text-16 font-montserrat bg-pink rounded-1/2">
                {cartItemQuantity}
              </Number>
            </Img>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;

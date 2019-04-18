import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import map from 'ramda/src/map';

import Img from 'components/Img';
import searchIcon from 'images/icons/icons-search-black.png';
import bagIcon from 'images/icons/icons-bag.png';
import messages from './messages';
import menus from './menus';

const renderMenus = map((menu) => (<li key={menu.id} className="text-15 font-montserrat font-bold px-25"><FormattedMessage {...menu} /></li>));

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="container flex items-center">
          <Link className="text-24 font-montserrat font-bold tracking-17 text-pink" to="/">
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
            <Img src={bagIcon} ratio={1} />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;

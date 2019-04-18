/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'turing.components.Header';

export default defineMessages({
  home: {
    id: `${scope}.home`,
    defaultMessage: 'SHOPMATE',
  },
  menus: [
    {
      id: `${scope}.menus.women`,
      defaultMessage: 'Women',
    },
    {
      id: `${scope}.menus.men`,
      defaultMessage: 'Men',
    },
    {
      id: `${scope}.menus.kids`,
      defaultMessage: 'Kids',
    },
    {
      id: `${scope}.menus.shoes`,
      defaultMessage: 'Shoes',
    },
    {
      id: `${scope}.menus.brands`,
      defaultMessage: 'Brands',
    },
  ],
});

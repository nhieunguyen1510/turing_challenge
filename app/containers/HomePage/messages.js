/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.HomePage';

export default defineMessages({
  banner: {
    titles: [{
      id: `${scope}.banner.title[0]`,
      defaultMessage: 'Background',
    }, {
      id: `${scope}.banner.title[1]`,
      defaultMessage: 'development',
    }],
    seperator: {
      id: `${scope}.banner.seperator`,
      defaultMessage: ' and ',
    },
    description: {
      id: `${scope}.banner.description`,
      defaultMessage: 'Convergent the dictates of the consumer: background and development',
    },
    button: {
      id: `${scope}.banner.button`,
      defaultMessage: 'View All',
    }
  },
  firstProduct: {
    button: {
      id: `${scope}.firstProduct.button`,
      defaultMessage: 'Shop Now',
    },
  },
});

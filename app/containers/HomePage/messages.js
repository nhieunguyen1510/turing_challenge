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
  startProjectHeader: {
    id: `${scope}.start_project.header`,
    defaultMessage: 'Start your next react project in seconds',
  },
  startProjectMessage: {
    id: `${scope}.start_project.message`,
    defaultMessage:
      'A highly scalable, offline-first foundation with the best DX and a focus on performance and best practices',
  },
  trymeHeader: {
    id: `${scope}.tryme.header`,
    defaultMessage: 'Try me!',
  },
  trymeMessage: {
    id: `${scope}.tryme.message`,
    defaultMessage: 'Show Github repositories by',
  },
  trymeAtPrefix: {
    id: `${scope}.tryme.atPrefix`,
    defaultMessage: '@',
  },
});

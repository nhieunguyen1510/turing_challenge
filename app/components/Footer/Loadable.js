/**
 * Asynchronously loads the component for Footer
 */
import loadable from 'loadable-components';

import LoadingIndicator from 'components/LoadingIndicator';

export default loadable(() => import('./index'), {
  LoadingComponent: () => null,
});

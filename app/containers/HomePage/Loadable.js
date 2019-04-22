/**
 * Asynchronously loads the component for HomePage
 */
import React from 'react';
import loadable from 'loadable-components';

import LoadingIndicator from 'components/LoadingIndicator';

export default loadable(() => import('./index'), {
  LoadingComponent: () => <LoadingIndicator paddingTop="50%" />,
});

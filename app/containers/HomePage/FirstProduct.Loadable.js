import React from 'react';
import loadable from 'loadable-components';

import LoadingIndicator from 'components/LoadingIndicator';

export default loadable(() => import('./FirstProduct'), {
  render: ({ Component, loading, ownProps }) => {
    if (loading || !ownProps.product) return <LoadingIndicator paddingTop="40%" />;
    return <Component {...ownProps} />;
  },
});

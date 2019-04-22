/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import Banner from './Banner';
import FirstProduct from './FirstProduct.Loadable';
import { makeSelectProduct, makeSelectLoading } from './selectors';
import reducer from './reducer';
import saga from './saga';

export class HomePage extends React.PureComponent {

  render() {
    const { product } = this.props;
    
    return (
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta
            name="description"
            content="Turing ecommerce home page"
          />
        </Helmet>
        <Banner />
        <FirstProduct product={product} />
      </article>
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  ...FirstProduct.propTypes,
};

const mapStateToProps = createStructuredSelector({
  product: makeSelectProduct(),
  loading: makeSelectLoading(),
});

const withConnect = connect(
  mapStateToProps,
);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);

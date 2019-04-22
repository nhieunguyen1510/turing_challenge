import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import Img from 'components/Img';
// import H1 from 'components/H1';
import H2 from 'components/H2';
import Button from 'components/Button';
// import bannerImg from 'assets/images/homepage-banner.png';
import messages from './messages';

function FirstProduct({
  product,
}) {
  const {
    thumbnail,
    name,
    description,
  } = product;
  
  return (
    <section className="bg-grey-lighter py-25">
      <div className="container bg-white">
        <div className="-mx-10 flex items-center">
          <div className="w-1/3 px-10">
            <div className="p-20">
              <Img ratio={1} src={thumbnail} isProductSrc />
            </div>
          </div>
          <div className="w-2/3 px-10">
            <H2 className="mb-25">{name}</H2>
            <p className="font-montserrat text-16 leading-normal mb-20">{description}</p>
            <Button textColor="white" backgroundColor="pink" size="medium">
              <FormattedMessage {...messages.firstProduct.button } />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

FirstProduct.propTypes = {
  product: PropTypes.oneOfType([
    PropTypes.shape({
      thumbnail: PropTypes.string,
      name: PropTypes.string,
      description: PropTypes.string,
    }),
    PropTypes.oneOf([null]),
  ]),
};

export default FirstProduct;

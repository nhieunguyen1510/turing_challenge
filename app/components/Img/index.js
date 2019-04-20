/**
 *
 * Img.js
 *
 * Renders an image, enforcing the usage of the alt="" tag
 */

import React from 'react';
import PropTypes from 'prop-types';
import invariant from 'invariant';
import and from 'ramda/src/and';
import prop from 'ramda/src/prop';
import includes from 'ramda/src/includes';
import __ from 'ramda/src/__';
import isString from 'lodash/isString';
import styled from 'styled-components';

const ImgWrapper = styled.div`
  padding-top: ${prop('height')};
`;

const ImgInner = styled.div`
  background-image: url('${prop('src')}');
`;

const toPercentage = (fraction) => `${fraction * 100}%`;

const acceptedDivisionSymbols = ['/', ':'];

const toFraction = (ratio) => {
  if (isString(ratio)) {
    const divisionSymbol = acceptedDivisionSymbols.find(includes(__, ratio));
    if (divisionSymbol) {
      const [dividend, divisor] = ratio.split(divisionSymbol);
      return Number(dividend) / Number(divisor);
    } else {
      invariant(
        true,
        `Division symbols must be ':' or '/'`,
      );
    }
  } else if (ratio <= 1) {
    return ratio;
  }
  invariant(
    true,
    `Ratio number must be <= 1`,
  );
  return 1;
}

function Img({
  className,
  src,
  alt,
  ratio,
  children,
}) {
  if (ratio) {
    const {
      wrapper = '',
      image = 'bg-cover bg-no-repeat bg-center',
    } = className;
    
    return <ImgWrapper height={toPercentage(toFraction(ratio))} className={`relative ${wrapper}`}>
      <ImgInner src={src} className={`absolute w-full h-full pin-t ${image}`} />
      {children}
    </ImgWrapper>;
  }
  return <img className={className} src={src} alt={alt} />;
}

Img.propTypes = {
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  alt: PropTypes.string,
  ratio: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      wrapper: PropTypes.string,
      image: PropTypes.string,
    })
  ]),
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
  ]),
};

Img.defaultProps = {
  className: '',
}

export default Img;

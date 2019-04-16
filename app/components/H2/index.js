import React from 'react';
import PropTypes from 'prop-types';

function H2({
  children,
  id,
  className,
}) {
  return <h2 className="font-montserrat font-bold text-16 text-grey-dark leading-normal">{{children}}</h2>
}

H2.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
  ]),
  id: PropTypes.string,
  className: PropTypes.string,
};

export default H2;

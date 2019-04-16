import React from 'react';
import PropTypes from 'prop-types';

function H3({
  children,
  id,
  className,
}) {
  return <h3
    id={id}
    className={`font-montserrat font-bold text-16 text-grey-dark leading-normal ${className}`}
  >{{children}}</h3>
}

H3.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
  ]),
  id: PropTypes.string,
  className: PropTypes.string,
};

export default H3;

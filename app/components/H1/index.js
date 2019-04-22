import React from 'react';
import PropTypes from 'prop-types';

function H1({
  children,
  id,
  className,
}) {
  return <h1 id={id} className={`font-playfair-display font-bold text-48 leading-normal ${className}`}>{children}</h1>
}

H1.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.element,
    PropTypes.array,
  ]),
  id: PropTypes.string,
  className: PropTypes.string,
};

H1.defaultProps = {
  className: '',
};

export default H1;

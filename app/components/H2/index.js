import React from 'react';
import PropTypes from 'prop-types';

function H2({
  children,
  id,
  className,
}) {
  return <h2 className={`font-montserrat font-bold text-24 leading-normal ${className}`}>{children}</h2>
}

H2.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
  ]),
  id: PropTypes.string,
  className: PropTypes.string,
};

H2.defaultProps = {
  className: '',
};

export default H2;

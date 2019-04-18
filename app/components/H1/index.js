import React from 'react';
import PropTypes from 'prop-types';

function H1({
  children,
  id,
  className,
}) {
  return <h1 className="font-playfair-display font-bold text-48 text-grey-dark leading-normal">{children}</h1>
}

H1.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
  ]),
  id: PropTypes.string,
  className: PropTypes.string,
};

export default H1;

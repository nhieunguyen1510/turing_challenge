/**
 *
 * Button.js
 *
 * A common button, if you pass it a prop "route" it'll render a link to a react-router route
 * otherwise it'll render a link with an onclick
 */

import React, { Children } from 'react';
import PropTypes from 'prop-types';

import A from './A';
import StyledButton from './StyledButton';

const buttonStyles = 'font-monserrat font-bold text-15 py-15 px-50';

function Button({
  href,
  onClick,
  children,
  className,
  textColor,
  backgroundColor,
  size,
}) {
  const btnClasses = `${buttonStyles} text-${textColor} bg-${backgroundColor} ${className}`;
  // Render an anchor tag if href exists
  const button = href ? (
    <A className={btnClasses} href={href} onClick={onClick}>
      {Children.toArray(children)}
    </A>
  ) : (
    <StyledButton className={btnClasses} onClick={onClick}>
      {Children.toArray(children)}
    </StyledButton>
  );

  return button;
}

Button.propTypes = {
  href: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  textColor: PropTypes.oneOf(['pink', 'white']),
  backgroundColor: PropTypes.oneOf(['pink', 'white']),
  size: PropTypes.oneOf(['small', 'medium', 'big']),
};

Button.defaultProps = {
  href: '',
  onClick: () => null,
  className: '',
  textColor: 'pink',
  backgroundColor: 'pink',
  size: 'small',
};

export default Button;

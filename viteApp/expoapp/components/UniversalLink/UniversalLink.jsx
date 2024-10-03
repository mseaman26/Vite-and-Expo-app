import React from 'react';
import { Link } from 'react-router-dom';

const UniversalLink = ({ href, children, ...props }) => {
  return (
    <Link to={href} {...props}>
      {children}
    </Link>
  );
};

export default UniversalLink;
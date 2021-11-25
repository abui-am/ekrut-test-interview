import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';

export const Card = ({ children, disableElevation, dense }) => {
  return (
    <div
      className={clsx(
        'mb-6 bg-white rounded-md',
        disableElevation ? 'border' : 'shadow-lg',
        dense ? 'p-4' : 'p-6'
      )}
    >
      {children}
    </div>
  );
};

Card.propTypes = {
  disableElevation: PropTypes.bool,
  dense: PropTypes.bool
};

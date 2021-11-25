import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({
  children,
  withBigSize,
  fullWidth,
  color = 'default',
  Icon,
  ...props
}) => {
  return (
    <button
      className={clsx(
        'rounded-md font-bold whitespace-nowrap relative transition-colors disabled:cursor-auto',
        color === 'error'
          ? 'bg-red-600 hover:bg-red-700 text-white disabled:bg-red-400'
          : 'bg-blue-600 hover:bg-blue-700 text-white disabled:bg-blue-400 shadow-md',
        fullWidth ? 'w-full' : '',
        withBigSize ? 'h-12 px-5 py-2 text-lg' : 'h-11 px-4 py-1',
        Icon ? 'pl-9 flex justify-center items-center' : ''
      )}
      {...props}
    >
      {Icon && (
        <div
          className={clsx(
            'text-white',
            'absolute flex items-center left-3 top-0 bottom-0 m-auto'
          )}
        >
          {Icon}
        </div>
      )}
      {children}
    </button>
  );
};

Button.propTypes = {
  withBigSize: PropTypes.bool,
  fullWidth: PropTypes.bool,
  Icon: PropTypes.any,
  color: PropTypes.oneOf(['error', 'default'])
};

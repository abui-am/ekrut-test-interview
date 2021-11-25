import clsx from 'clsx';
import PropTypes from 'prop-types';
export const TextField = ({ value, label, ...inputProps }) => {
  return (
    <>
      <label className="font-bold mb-2 block">{label}</label>
      <input
        value={value}
        type="text"
        className={clsx(
          'h-11 w-full rounded-md px-3 outline-none border border-gray-300 border-inn',
          'focus:ring-blue-600 focus:ring-current focus:border-transparent focus:outline-none focus:ring-2',
          'transition-all duration-150 ease-in',
          'mb-4'
        )}
        {...inputProps}
      />
    </>
  );
};

TextField.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string
};

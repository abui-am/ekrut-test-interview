import clsx from 'clsx';
import { Calendar } from 'react-bootstrap-icons';
import ReactDatePicker from 'react-datepicker';
import PropTypes from 'prop-types';

const DatePickerComponent = ({ className, label, ...props }) => {
  return (
    <>
      <label className="font-bold mb-2 block">{label}</label>
      <div className="relative customDatePickerWidth mb-4">
        <ReactDatePicker
          {...props}
          className={clsx(
            'pl-11 border border-gray-300',
            'h-11 w-full rounded-md px-3 outline-none',
            'focus:ring-blue-600 focus:ring-inset focus:border-transparent focus:outline-none focus:ring-2',
            'transition-all duration-150 ease-in',
            className
          )}
        />
        <div className="absolute flex items-center left-3 top-0 bottom-0 m-auto text-blueGray-400">
          <Calendar />
        </div>
      </div>
    </>
  );
};

DatePickerComponent.propTypes = {
  label: PropTypes.string
};

export default DatePickerComponent;

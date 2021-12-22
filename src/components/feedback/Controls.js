import PropTypes from 'prop-types';
import { Button } from './Controls.styled';

export default function ControlItem({ options, onIncrement }) {
  return (
    <>
      {Object.keys(options).map(option => (
        <Button
          key={option}
          type="button"
          onClick={() => onIncrement(option)}
          style={{ textTransform: 'capitalize' }}
        >
          {option}
        </Button>
      ))}
    </>
  );
}
ControlItem.propTypes = {
  options: PropTypes.object,
  onIncrement: PropTypes.func,
};

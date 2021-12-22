import PropTypes from 'prop-types';
import { StatisticItem } from './Statistics.styled';

export default function Statistics({ options, total, positivePercentage }) {
  return (
    <>
      {Object.keys(options).map(option => (
        <StatisticItem key={option} style={{ textTransform: 'capitalize' }}>
          {option}: {options[option]}
        </StatisticItem>
      ))}
      <StatisticItem>Total: {total}</StatisticItem>
      <StatisticItem>Positive feedback: {positivePercentage}%</StatisticItem>
    </>
  );
}
Statistics.propTypes = {
  options: PropTypes.object,
  total: PropTypes.number,
  positivePercentage: PropTypes.string,
};

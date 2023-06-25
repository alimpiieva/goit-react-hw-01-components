import React from 'react';
import PropTypes from 'prop-types';
import {
  Section,
  StatList,
  StatItem,
  Label,
  Percentage,
  Title
} from './Statistics.styled';

const Statistics = ({ title, stats }) => (
  <Section>
    {title && <Title>{title}</Title>}

    <StatList>
      {stats.map(({ id, label, percentage }) => (
        <StatItem key={id}>
          <Label>{label} :</Label>
          <Percentage>{percentage} % ;</Percentage>
        </StatItem>
      ))}
    </StatList>
  </Section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired
    })
  ).isRequired
};

export default Statistics;

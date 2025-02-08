import React from 'react'
import withCounter from '../hoc/withCounter';

const Heading = (props) => {
    const { count, incrementCount, headingText} = props;
  return (
    <h1 onMouseOver={incrementCount}>{headingText} Hovered: {count} times</h1>
  )
}

export default withCounter(Heading);

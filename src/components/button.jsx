import React from 'react'
import withCounter from '../hoc/withCounter';

const Button = (props) => {
    const { count, incrementCount, btnText} = props;

  return (
    <button onClick={incrementCount}>{btnText} Clicked: {count} times</button>
  )
}

export default withCounter(Button);

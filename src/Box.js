import React from 'react'
import Block from './Block'

const Box = props => <Block {...props} />

Box.defaultProps = {
  bg: 'white',
  border: true,
  round: 1
}

Box.propTypes = Block.propTypes

export default Box

import React from 'react'
import LabelGroup from '../LabelGroup'
import Label from '../Label'
import {render} from '../utils/testing'
import {COMMON} from '../constants'
import {render as HTMLRender, cleanup} from "@testing-library/react";
import {axe, toHaveNoViolations} from 'jest-axe'
import 'babel-polyfill'
expect.extend(toHaveNoViolations)

const comp = (
  <LabelGroup>
    <Label>Default label</Label>
    <Label>Darker gray label</Label>
    <Label outline>Default outline label</Label>
  </LabelGroup>
)

describe('BranchName', () => {
  it('has default theme', () => {
    expect(LabelGroup).toSetDefaultTheme()
  })

  it('should have no axe violations', async () => {
    const {container} = HTMLRender(comp)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
    cleanup()
  })

  it('respects the "as" prop', () => {
    expect(render(<LabelGroup as="div" />).type).toEqual('div')
  })

  it('implements common system props', () => {
    expect(LabelGroup).toImplementSystemProps(COMMON)
  })

  it('matches snapshot', () => {
    expect(render(comp)).toMatchSnapshot()
  })
})

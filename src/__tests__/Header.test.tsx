import React from 'react'
import {Header} from '..'
import {render, behavesAsComponent, checkExports} from '../utils/testing'
import {render as HTMLRender, cleanup} from '@testing-library/react'
import {axe, toHaveNoViolations} from 'jest-axe'
import 'babel-polyfill'
expect.extend(toHaveNoViolations)

describe('Header', () => {
  behavesAsComponent({Component: Header})

  checkExports('Header', {
    default: Header
  })

  describe('Header.Item', () => {
    behavesAsComponent({Component: Header.Item})
  })

  describe('Header.Link', () => {
    behavesAsComponent({Component: Header.Link})
  })

  it('should have no axe violations', async () => {
    const {container} = HTMLRender(
      <Header>
        <Header.Item full>
          <Header.Link href="#">One</Header.Link>
        </Header.Item>
        <Header.Item>
          <Header.Link href="#">Two</Header.Link>
        </Header.Item>
        <Header.Item>Three</Header.Item>
      </Header>
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
    cleanup()
  })

  it('renders a <div> and <a>', () => {
    expect(render(<Header />).type).toEqual('div')
    expect(render(<Header.Link />).type).toEqual('a')
  })

  it('sets aria-label appropriately', () => {
    expect(render(<Header aria-label="foo" />).props['aria-label']).toEqual('foo')
  })
})

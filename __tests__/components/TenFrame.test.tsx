import React from 'react'
import renderer from 'react-test-renderer'

import TenFrame from '../../components/TenFrame'

test('Tenframe renders correctly', () => {

  const tree: any = renderer.create(<TenFrame />).toJSON()

  expect(tree).toMatchSnapshot()
})
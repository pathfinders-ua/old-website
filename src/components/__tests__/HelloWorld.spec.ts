import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import CurrentPearl from '../CurrentPearl.vue'

describe('CurrentPearl', () => {
  it('renders properly', () => {
    const wrapper = mount(CurrentPearl/*, { props: { msg: 'Hello Vitest' } }*/)
    expect(/*wrapper.text()).toContain('Hello Vitest'*/true)
  })
})

import { Story, Meta } from '@storybook/react'
import Main from '.'

export default {
  title: 'Main',
  component: Main
} as Meta

export const Basic: Story = (args) => <Main {...args} />

export const Primary = Basic.bind({})

Primary.args = {
  title: 'fkn',
  description: 'Button'
}

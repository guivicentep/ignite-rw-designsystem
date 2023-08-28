import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@gvp-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, vero! Inventore dolore quo nihil id impedit odit architecto veniam atque quia, sed alias cum aliquam, eos, laborum voluptas perspiciatis! Pariatur!',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}

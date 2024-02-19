import { Meta, Story } from '@storybook/react';
import { Icon } from '@iconify/react';
import imagedog from '../../assets/images/Imagedog.svg';

import { BlueprintCard, Props } from './index';

const meta: Meta = {
  title: 'Atoms/BlueprintCard',
  component: BlueprintCard,
};

export default meta;

const Template: Story<Props> = (args) => <BlueprintCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageLink: imagedog,
  name: 'Color Dog',
  blueprintid: 5,
  tsupply: 10000000,
  mintprice: 0.000153,
  mintlimit: 100,
};

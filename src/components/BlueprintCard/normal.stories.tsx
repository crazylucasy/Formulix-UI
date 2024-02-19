import { Meta, Story } from '@storybook/react';
import { Icon } from '@iconify/react';
import imagedog from '../../assets/images/Imagedog.svg';
import robot from '../../assets/images/robot.svg';

import { NormalBlueprintCard, Props } from './normal';

const meta: Meta = {
  title: 'Atoms/NormalBlueprintCard',
  component: NormalBlueprintCard,
};

export default meta;

const Template: Story<Props> = (args) => <NormalBlueprintCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageLink: robot,
  name: 'Robot',
  blueprintid: 5,
  tsupply: 10000000,
  address: '0x55d398326f99059ff775485246999027b3197955',
};

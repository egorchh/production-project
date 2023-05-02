import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoryContainer } from 'shared/config/storybook/ui/StoryContainer/StoryContainer';
import { BottomSheet } from './BottomSheet';

export default {
    title: 'shared/BottomSheet',
    component: BottomSheet,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {},
} as ComponentMeta<typeof BottomSheet>;

const Template: ComponentStory<typeof BottomSheet> = (args) => (
    <StoryContainer>
        <BottomSheet {...args} />
    </StoryContainer>
);

export const Primary = Template.bind({});
Primary.args = {};

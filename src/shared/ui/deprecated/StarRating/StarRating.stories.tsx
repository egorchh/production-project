import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoryContainer } from '../../../config/storybook/ui/StoryContainer/StoryContainer';
import { StarRating } from './StarRating';

export default {
    title: 'shared/deprecated/StarRating',
    component: StarRating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {},
} as ComponentMeta<typeof StarRating>;

const Template: ComponentStory<typeof StarRating> = (args) => (
    <StoryContainer>
        <StarRating {...args} />
    </StoryContainer>
);

export const Primary = Template.bind({});
Primary.args = {};

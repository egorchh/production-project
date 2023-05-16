import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { RatingCard } from './RatingCard';
import { StoryContainer } from '@/shared/config/storybook/ui/StoryContainer/StoryContainer';

export default {
    title: 'entities/Rating/RatingCard',
    component: RatingCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {},
} as ComponentMeta<typeof RatingCard>;

const Template: ComponentStory<typeof RatingCard> = (args) => (
    <StoryContainer>
        <RatingCard {...args} />
    </StoryContainer>
);

export const Primary = Template.bind({});
Primary.args = {
    title: 'Как вам статья?',
    feedbackTitle: 'Пожалуйста, оставьте отзыв',
};

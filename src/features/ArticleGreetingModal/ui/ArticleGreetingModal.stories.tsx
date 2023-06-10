import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleGreetingModal } from './ArticleGreetingModal';
import { StoryContainer } from '@/shared/config/storybook/ui/StoryContainer/StoryContainer';

export default {
    title: 'shared/ArticleGreetingModal',
    component: ArticleGreetingModal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {},
} as ComponentMeta<typeof ArticleGreetingModal>;

const Template: ComponentStory<typeof ArticleGreetingModal> = () => (
    <StoryContainer>
        <ArticleGreetingModal />
    </StoryContainer>
);

export const Primary = Template.bind({});
Primary.args = {};

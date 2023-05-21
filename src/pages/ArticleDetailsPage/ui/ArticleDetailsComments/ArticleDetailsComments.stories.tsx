import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoryContainer } from '@/shared/config/storybook/ui/StoryContainer/StoryContainer';
import { ArticleDetailsComments } from './ArticleDetailsComments';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
    title: 'pages/Article/ArticleDetailsComments',
    component: ArticleDetailsComments,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {},
} as ComponentMeta<typeof ArticleDetailsComments>;

const Template: ComponentStory<typeof ArticleDetailsComments> = (args) => (
    <StoryContainer>
        <ArticleDetailsComments {...args} />
    </StoryContainer>
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({})];

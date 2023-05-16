import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { StoryContainer } from '@/shared/config/storybook/ui/StoryContainer/StoryContainer';

export default {
    title: 'pages/Article/ArticleDetailsPageHeader',
    component: ArticleDetailsPageHeader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {},
} as ComponentMeta<typeof ArticleDetailsPageHeader>;

const Template: ComponentStory<typeof ArticleDetailsPageHeader> = (args) => (
    <StoryContainer>
        <ArticleDetailsPageHeader {...args} />
    </StoryContainer>
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({
    articleDetails: {
        data: {
            id: '1',
            img: '',
            createdAt: '',
            views: 123,
            user: { id: '1', username: '123' },
            blocks: [],
            type: [],
            title: '123',
            subtitle: 'sdad',
        },
    },
    user: {
        authData: { id: '1' },
    },
})];

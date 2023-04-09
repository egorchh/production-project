import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import ArticleDetailsPage from './ArticleDetailsPage';
import { articleData } from './__fixtures__';

export default {
    title: 'pages/Article/ArticleDetailsPage',
    component: ArticleDetailsPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {},
} as ComponentMeta<typeof ArticleDetailsPage>;

const Template: ComponentStory<typeof ArticleDetailsPage> = (args) => (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        padding: '40px',
    }}
    >
        <ArticleDetailsPage {...args} />
    </div>
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator(
    {
        articleDetails: {
            data: articleData,
        },
    },
)];

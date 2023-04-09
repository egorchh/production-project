import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { articleData } from 'entities/Article/ui/ArticleDetails/__fixtures__';
import { ArticleDetails } from './ArticleDetails';

export default {
    title: 'entities/Article/ArticleDetails',
    component: ArticleDetails,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {},
} as ComponentMeta<typeof ArticleDetails>;

const Template: ComponentStory<typeof ArticleDetails> = (args) => (
    <div style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh',
    }}
    >
        <ArticleDetails {...args} />
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

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [StoreDecorator(
    {
        articleDetails: {
            isLoading: true,
        },
    },
)];

export const Error = Template.bind({});
Error.args = {};
Error.decorators = [StoreDecorator(
    {
        articleDetails: {
            error: 'some',
        },
    },
)];

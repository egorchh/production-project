import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleListView } from 'entities/Article';
import { articleData } from '../ArticleDetails/__fixtures__';
import { ArticleListItem } from './ArticleListItem';

export default {
    title: 'entities/Article/ArticleListItem',
    component: ArticleListItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {},
} as ComponentMeta<typeof ArticleListItem>;

const Template: ComponentStory<typeof ArticleListItem> = (args) => (
    <div style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh',
    }}
    >
        <ArticleListItem {...args} />
    </div>
);

export const PrimaryPlate = Template.bind({});
PrimaryPlate.args = {
    article: {
        ...articleData,
    },
    view: ArticleListView.PLATE,
};

export const PrimaryList = Template.bind({});
PrimaryList.args = {
    article: {
        ...articleData,
    },
    view: ArticleListView.LIST,
};

import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { articleData } from 'entities/Article/ui/ArticleDetails/__fixtures__';
import { ArticleListView } from 'entities/Article';
import { ArticleList } from './ArticleList';

export default {
    title: 'entities/Article/ArticleList',
    component: ArticleList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {},
} as ComponentMeta<typeof ArticleList>;

const Template: ComponentStory<typeof ArticleList> = (args) => (
    <div style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh',
    }}
    >
        <ArticleList {...args} />
    </div>
);

export const ArticlesPlate = Template.bind({});
ArticlesPlate.args = {
    articles: new Array(9).fill(0).map(() => ({
        ...articleData,
    })),
    view: ArticleListView.PLATE,
};

export const ArticlesList = Template.bind({});
ArticlesList.args = {
    articles: new Array(9).fill(0).map(() => ({
        ...articleData,
    })),
    view: ArticleListView.LIST,
};

export const ArticlesPlateLoading = Template.bind({});
ArticlesPlateLoading.args = {
    articles: new Array(9).fill(0).map(() => ({
        ...articleData,
    })),
    view: ArticleListView.PLATE,
    isLoading: true,
};

export const ArticlesListLoading = Template.bind({});
ArticlesListLoading.args = {
    articles: new Array(9).fill(0).map(() => ({
        ...articleData,
    })),
    view: ArticleListView.LIST,
    isLoading: true,
};

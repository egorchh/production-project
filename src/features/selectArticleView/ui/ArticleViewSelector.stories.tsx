import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleListView } from 'entities/Article';
import { ArticleViewSelector } from './ArticleViewSelector';

export default {
    title: 'features/ArticleViewSelector',
    component: ArticleViewSelector,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {},
} as ComponentMeta<typeof ArticleViewSelector>;

const Template: ComponentStory<typeof ArticleViewSelector> = (args) => (
    <div style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh',
    }}
    >
        <ArticleViewSelector {...args} />
    </div>
);

export const Primary = Template.bind({});
Primary.args = {};

export const PrimaryPlate = Template.bind({});
PrimaryPlate.args = {
    view: ArticleListView.PLATE,
};

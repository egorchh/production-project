import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleSortSelector } from './ArticleSortSelector';

export default {
    title: 'features/Article/ArticleSortSelector',
    component: ArticleSortSelector,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {},
} as ComponentMeta<typeof ArticleSortSelector>;

const Template: ComponentStory<typeof ArticleSortSelector> = (args) => (
    <div style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh',
    }}
    >
        <ArticleSortSelector {...args} />
    </div>
);

export const Primary = Template.bind({});
Primary.args = {};

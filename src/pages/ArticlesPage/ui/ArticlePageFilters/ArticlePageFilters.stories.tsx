import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticlePageFilters } from './ArticlePageFilters';

export default {
    title: 'pages/Article/ArticlePageFilters',
    component: ArticlePageFilters,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {},
} as ComponentMeta<typeof ArticlePageFilters>;

const Template: ComponentStory<typeof ArticlePageFilters> = (args) => (
    <div style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh',
    }}
    >
        <ArticlePageFilters {...args} />
    </div>
);

export const Primary = Template.bind({});
Primary.args = {};

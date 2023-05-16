import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleTypeTabs } from './ArticleTypeTabs';

export default {
    title: 'entities/Article/ArticleTypeTabs',
    component: ArticleTypeTabs,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {},
} as ComponentMeta<typeof ArticleTypeTabs>;

const Template: ComponentStory<typeof ArticleTypeTabs> = (args) => (
    <div style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh',
    }}
    >
        <ArticleTypeTabs {...args} />
    </div>
);

export const Primary = Template.bind({});
Primary.args = {};

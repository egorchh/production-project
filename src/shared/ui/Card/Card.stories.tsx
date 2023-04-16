import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Select } from '../Select/Select';
import { Card, CardTheme } from './Card';

export default {
    title: 'shared/Card',
    component: Card,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {},
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => (
    <div style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh',
    }}
    >
        <Card {...args} />
    </div>
);

export const Normal = Template.bind({});
Normal.args = {
    children: <Select label="some select" />,
};

export const Outlined = Template.bind({});
Outlined.args = {
    children: <Select label="some select" />,
    theme: CardTheme.OUTLINED,
};

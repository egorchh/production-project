import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Select } from '../Select/Select';
import { Card, CardTheme } from './Card';
import { StoryContainer } from '../../../config/storybook/ui/StoryContainer/StoryContainer';

export default {
    title: 'shared/Card',
    component: Card,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {},
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => (
    <StoryContainer>
        <Card {...args} />
    </StoryContainer>
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

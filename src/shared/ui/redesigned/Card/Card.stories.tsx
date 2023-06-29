import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Select } from '../../deprecated/Select/Select';
import { Card } from './Card';
import { StoryContainer } from '../../../config/storybook/ui/StoryContainer/StoryContainer';

export default {
    title: 'shared/redesigned/Card',
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
    variant: 'outlined',
};

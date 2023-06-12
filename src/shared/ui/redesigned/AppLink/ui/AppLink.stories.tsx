import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AppLink } from './AppLink';
import { StoryContainer } from '../../../../config/storybook/ui/StoryContainer/StoryContainer';

export default {
    title: 'shared/redesigned/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => (
    <StoryContainer>
        <AppLink {...args} />
    </StoryContainer>
);

export const Normal = Template.bind({});
Normal.args = {
    children: 'Text',
    variant: 'primary',
};

export const Error = Template.bind({});
Error.args = {
    children: 'Text',
    variant: 'red',
};

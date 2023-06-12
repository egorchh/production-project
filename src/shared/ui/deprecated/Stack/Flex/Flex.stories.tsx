import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Avatar } from '../../Avatar/Avatar';
import { Flex } from './Flex';
import { StoryContainer } from '@/shared/config/storybook/ui/StoryContainer/StoryContainer';

export default {
    title: 'shared/deprecated/Stack/Flex',
    component: Flex,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {},
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => (
    <StoryContainer>
        <Flex {...args} />
    </StoryContainer>
);

export const WithSingleElement = Template.bind({});
WithSingleElement.args = {
    children: (
        <Avatar />
    ),
    fullHeight: true,
};

export const WithManyElements = Template.bind({});
WithManyElements.args = {
    children: (
        <>
            <Avatar />
            <Avatar />
            <Avatar />
            <Avatar />
            <Avatar />
            <Avatar />
            <Avatar />
            <Avatar />
            <Avatar />
            <Avatar />
            <Avatar />
            <Avatar />
        </>
    ),
    fullHeight: true,
};

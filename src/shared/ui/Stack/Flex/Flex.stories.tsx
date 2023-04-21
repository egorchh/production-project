import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Avatar } from '../../Avatar/Avatar';
import { Flex } from './Flex';

export default {
    title: 'shared/Stack/Flex',
    component: Flex,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {},
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => (
    <div style={{ height: '100vh' }}>
        <Flex {...args} />
    </div>
);

export const WithSingleElement = Template.bind({});
WithSingleElement.args = {
    children: (
        <>
            <Avatar />
            <Avatar />
            <Avatar />
        </>
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

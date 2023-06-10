import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MainLayout } from './MainLayout';
import { StoryContainer } from '@/shared/config/storybook/ui/StoryContainer/StoryContainer';

export default {
    title: 'shared/MainLayout',
    component: MainLayout,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {},
} as ComponentMeta<typeof MainLayout>;

const Template: ComponentStory<typeof MainLayout> = (args) => (
    <StoryContainer>
        <MainLayout {...args} />
    </StoryContainer>
);

export const Primary = Template.bind({});
Primary.args = {};

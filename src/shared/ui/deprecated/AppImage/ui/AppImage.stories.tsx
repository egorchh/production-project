import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AppImage } from './AppImage';
import { StoryContainer } from '@/shared/config/storybook/ui/StoryContainer/StoryContainer';

export default {
    title: 'shared/AppImage',
    component: AppImage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {},
} as ComponentMeta<typeof AppImage>;

const Template: ComponentStory<typeof AppImage> = (args) => (
    <StoryContainer>
        <AppImage {...args} />
    </StoryContainer>
);

export const Primary = Template.bind({});
Primary.args = {};

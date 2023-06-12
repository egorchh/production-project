import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Avatar } from './Avatar';
import { StoryContainer } from '../../../config/storybook/ui/StoryContainer/StoryContainer';

export default {
    title: 'shared/deprecated/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => (
    <StoryContainer>
        <Avatar {...args} />
    </StoryContainer>
);

export const Primary = Template.bind({});
Primary.args = {
    size: 70,
    src: 'https://s13.stc.yc.kpcdn.net/share/i/instagram/B44solahwlo/wr-1280.webp',
    alt: 'User avatar',
};

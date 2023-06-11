import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { AppLoader } from './AppLoader';
import { StoryContainer } from '../../../../config/storybook/ui/StoryContainer/StoryContainer';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Loader',
    component: AppLoader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AppLoader>;

const Template: ComponentStory<typeof AppLoader> = (args) => (
    <StoryContainer>
        <AppLoader {...args} />
    </StoryContainer>
);

export const Dark = Template.bind({});
Dark.args = {};

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [ThemeDecorator(Theme.DARK)];

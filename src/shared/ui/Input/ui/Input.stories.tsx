import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider/lib/ThemeContext';
import { StoryContainer } from '../../../config/storybook/ui/StoryContainer/StoryContainer';
import { Input } from './Input';

export default {
    title: 'shared/Input',
    component: Input,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => (
    <StoryContainer>
        <Input {...args} />
    </StoryContainer>
);

export const Primary = Template.bind({});
Primary.args = {
    placeholder: 'Hello',
};

export const Dark = Template.bind({});
Dark.args = {
    placeholder: 'Some text...',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

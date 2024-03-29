import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoryContainer } from '../../../../config/storybook/ui/StoryContainer/StoryContainer';
import { Input } from './Input';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/deprecated/Input',
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

import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { AppButton } from './AppButton';
import { StoryContainer } from '../../../../config/storybook/ui/StoryContainer/StoryContainer';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/redesigned/AppButton',
    component: AppButton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        children: 'Click',
    },
} as ComponentMeta<typeof AppButton>;

const Template: ComponentStory<typeof AppButton> = (args) => (
    <StoryContainer>
        <AppButton {...args} />
    </StoryContainer>
);

export const Clear = Template.bind({});
Clear.args = {
    variant: 'clear',
};

export const Outline = Template.bind({});
Outline.args = {
    variant: 'outline',
};

export const OutlineSizeM = Template.bind({});
OutlineSizeM.args = {
    variant: 'outline',
    size: 'm',
};

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
    variant: 'outline',
    size: 'l',
};

export const OutlineSizeXL = Template.bind({});
OutlineSizeXL.args = {
    variant: 'outline',
    size: 'xl',
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    variant: 'outline',
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundTheme = Template.bind({});
BackgroundTheme.args = {
    variant: 'outline',
};

export const Square = Template.bind({});
Square.args = {
    children: '>',
    variant: 'outline',
    square: true,
};

export const SquareM = Template.bind({});
SquareM.args = {
    children: '>',
    variant: 'outline',
    square: true,
    size: 'm',
};

export const SquareL = Template.bind({});
SquareL.args = {
    children: '>',
    variant: 'outline',
    square: true,
    size: 'l',
};

export const SquareXL = Template.bind({});
SquareXL.args = {
    children: '>',
    variant: 'outline',
    square: true,
    size: 'xl',
};

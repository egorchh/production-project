import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { AppButton, AppButtonSize, AppButtonTheme } from './AppButton';

export default {
    title: 'shared/AppButton',
    component: AppButton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        children: 'Click',
    },
} as ComponentMeta<typeof AppButton>;

const Template: ComponentStory<typeof AppButton> = (args) => (
    <div style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh',
    }}
    >
        <AppButton {...args} />
    </div>
);

export const Primary = Template.bind({});
Primary.args = {};

export const Clear = Template.bind({});
Clear.args = {
    theme: AppButtonTheme.CLEAR,
};

export const Outline = Template.bind({});
Outline.args = {
    theme: AppButtonTheme.OUTLINE,
};

export const OutlineSizeM = Template.bind({});
OutlineSizeM.args = {
    theme: AppButtonTheme.OUTLINE,
    size: AppButtonSize.M,
};

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
    theme: AppButtonTheme.OUTLINE,
    size: AppButtonSize.L,
};

export const OutlineSizeXL = Template.bind({});
OutlineSizeXL.args = {
    theme: AppButtonTheme.OUTLINE,
    size: AppButtonSize.XL,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    theme: AppButtonTheme.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundTheme = Template.bind({});
BackgroundTheme.args = {
    theme: AppButtonTheme.BACKGROUND,
};

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
    theme: AppButtonTheme.BACKGROUND_INVERTED,
};

export const Square = Template.bind({});
Square.args = {
    children: '>',
    theme: AppButtonTheme.OUTLINE,
    square: true,
};

export const SquareM = Template.bind({});
SquareM.args = {
    children: '>',
    theme: AppButtonTheme.OUTLINE,
    square: true,
    size: AppButtonSize.M,
};

export const SquareL = Template.bind({});
SquareL.args = {
    children: '>',
    theme: AppButtonTheme.OUTLINE,
    square: true,
    size: AppButtonSize.L,
};

export const SquareXL = Template.bind({});
SquareXL.args = {
    children: '>',
    theme: AppButtonTheme.OUTLINE,
    square: true,
    size: AppButtonSize.XL,
};

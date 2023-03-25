import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { Skeleton } from './Skeleton';

export default {
    title: 'shared/Skeleton',
    component: Skeleton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {},
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => (
    <div style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh',
    }}
    >
        <Skeleton {...args} />
    </div>
);

export const Primary = Template.bind({});
Primary.args = {
    height: 300,
    width: '50%',
};

export const Circle = Template.bind({});
Circle.args = {
    borderRadius: '50%',
    width: 100,
    height: 100,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    height: 300,
    width: '50%',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const CircleDark = Template.bind({});
CircleDark.args = {
    borderRadius: '50%',
    width: 100,
    height: 100,
};
CircleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimaryPink = Template.bind({});
PrimaryPink.args = {
    height: 300,
    width: '50%',
};
PrimaryPink.decorators = [ThemeDecorator(Theme.PINK)];

export const CirclePink = Template.bind({});
CirclePink.args = {
    borderRadius: '50%',
    width: 100,
    height: 100,
};
CirclePink.decorators = [ThemeDecorator(Theme.PINK)];

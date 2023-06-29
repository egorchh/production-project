import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Navbar } from './Navbar';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'widgets/deprecated/Navbar',
    component: Navbar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [StoreDecorator({})];

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({}), ThemeDecorator(Theme.DARK)];

export const AuthNavbar = Template.bind({});
AuthNavbar.args = {};
AuthNavbar.decorators = [StoreDecorator({
    user: { authData: {} },
}), ThemeDecorator(Theme.DARK)];

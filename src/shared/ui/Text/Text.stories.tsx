import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { Text, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => (
    <div style={{
        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '100vh',
    }}
    >
        <Text {...args} />
    </div>
);

export const Primary = Template.bind({});
Primary.args = {
    title: 'Title: New York!',
    text: 'Text: Some text...',
};

export const Error = Template.bind({});
Error.args = {
    title: 'Title: New York!',
    text: 'Text: Some text...',
    theme: TextTheme.ERROR,
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
    title: 'Title: New York!',
};

export const onlyText = Template.bind({});
onlyText.args = {
    text: 'Text: Some text...',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Title: New York!',
    text: 'Text: Some text...',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
    title: 'Title: New York!',
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTextDark = Template.bind({});
onlyTextDark.args = {
    text: 'Text: Some text...',
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

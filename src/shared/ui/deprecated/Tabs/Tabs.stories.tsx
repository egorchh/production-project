import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { StoryContainer } from '../../../config/storybook/ui/StoryContainer/StoryContainer';
import { Tabs } from './Tabs';

export default {
    title: 'shared/deprecated/Tabs',
    component: Tabs,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {},
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => (
    <StoryContainer>
        <Tabs {...args} />
    </StoryContainer>
);

export const Primary = Template.bind({});
Primary.args = {
    tabs: [
        {
            value: 'tab 1',
            content: 'tab content',
        },
        {
            value: 'tab 2',
            content: 'tab content',
        },
        {
            value: 'tab 3',
            content: 'tab content',
        },
    ],
    value: 'tab 2',
    onClick: action('onClick'),
};

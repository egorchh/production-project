import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoryContainer } from '@/shared/config/storybook/ui/StoryContainer/StoryContainer';
import { Text } from '../../../Text/Text';
import { MenuDropdown } from './MenuDropdown';

export default {
    title: 'shared/deprecated/Popups/MenuDropdown',
    component: MenuDropdown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {},
} as ComponentMeta<typeof MenuDropdown>;

const Template: ComponentStory<typeof MenuDropdown> = (args) => (
    <StoryContainer>
        <MenuDropdown {...args} />
    </StoryContainer>
);

export const Primary = Template.bind({});
Primary.args = {
    trigger: (
        <Text text="Триггер" />
    ),
    items: [
        {
            content: 'one',
        },
        {
            content: 'two',
        },
        {
            content: 'three',
        },
    ],
};

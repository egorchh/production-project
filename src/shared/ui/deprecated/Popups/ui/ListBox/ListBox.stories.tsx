import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoryContainer } from '@/shared/config/storybook/ui/StoryContainer/StoryContainer';
import { ListBox } from './ListBox';

export default {
    title: 'shared/deprecated/Popups/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        options: [
            { value: 'Durward Reynolds', unavailable: false },
            { value: 'Kenton Towne', unavailable: false },
            { value: 'Therese Wunsch', unavailable: false },
            { value: 'Benedict Kessler', unavailable: true },
            { value: 'Katelyn Rohan', unavailable: false },
        ],
    },
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => (
    <StoryContainer>
        <ListBox {...args} />
    </StoryContainer>
);

export const Primary = Template.bind({});
Primary.args = {
    defaultValue: 'Default value',
};

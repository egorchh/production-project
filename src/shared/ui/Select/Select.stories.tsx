import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Select } from './Select';
import { StoryContainer } from '../../config/storybook/ui/StoryContainer/StoryContainer';

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => (
    <StoryContainer>
        <Select {...args} />
    </StoryContainer>
);

export const Primary = Template.bind({});
Primary.args = {
    label: 'Блюда на обед:',
    options: [
        {
            value: 'Борщ',
            content: 'Борщ',
        },
        {
            value: 'Плов',
            content: 'Плов',
        },
        {
            value: 'Пельмени',
            content: 'Пельмени',
        },
    ],
};

import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Select } from './Select';

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => (
    <div style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', width: '300px',
    }}
    >
        <Select {...args} />
    </div>
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

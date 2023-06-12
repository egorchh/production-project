import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import withMock from 'storybook-addon-mock';
import { StoryContainer } from '@/shared/config/storybook/ui/StoryContainer/StoryContainer';
import { BottomSheet } from './BottomSheet';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
// eslint-disable-next-line feature-sliced-design-validator/layer-imports
import { Notification } from '@/entities/Notification';

const notification: Notification = {
    id: '1',
    title: 'Уведомление',
    description: 'Вам пришло новое письмо',
};

export default {
    title: 'shared/deprecated/BottomSheet',
    component: BottomSheet,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {},
    decorators: [withMock],
    mockData: [
        {
            url: `${__API__}/notifications`,
            method: 'GET',
            status: 200,
            response: [
                { ...notification, id: '1' },
                { ...notification, id: '2' },
                { ...notification, id: '3' },
                { ...notification, id: '4' },
            ],
        },
    ],
} as ComponentMeta<typeof BottomSheet>;

const Template: ComponentStory<typeof BottomSheet> = (args) => (
    <StoryContainer>
        <BottomSheet {...args} />
    </StoryContainer>
);

export const Primary = Template.bind({});
Primary.args = {
    children: (
        <div>Some notification</div>
    ),
};
Primary.decorators = [StoreDecorator({})];

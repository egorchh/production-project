import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import withMock from 'storybook-addon-mock';
import { StoryContainer } from '@/shared/config/storybook/ui/StoryContainer/StoryContainer';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { NotificationList } from './NotificationList';
import { Notification } from '../../model/types/notification';

const notification: Notification = {
    id: '1',
    title: 'Уведомление',
    description: 'Вам пришло новое письмо',
};

export default {
    title: 'entities/Notifications/NotificationList',
    component: NotificationList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {},
    decorators: [withMock],
    parameters: {
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
    },
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = (args) => (
    <StoryContainer>
        <NotificationList {...args} />
    </StoryContainer>
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({})];

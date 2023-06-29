import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import withMock from 'storybook-addon-mock';
import { StoryContainer } from '@/shared/config/storybook/ui/StoryContainer/StoryContainer';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Notification } from '@/entities/Notification';
import { NotificationButton } from './NotificationButton';

const notification: Notification = {
    id: '1',
    title: 'Уведомление',
    description: 'Вам пришло новое письмо',
};

export default {
    title: 'features/redesigned/NotificationButton',
    component: NotificationButton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
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
    args: {},
} as ComponentMeta<typeof NotificationButton>;

const Template: ComponentStory<typeof NotificationButton> = (args) => (
    <StoryContainer>
        <NotificationButton {...args} />
    </StoryContainer>
);

export const Primary = Template.bind({});
Primary.args = {
    dropdownDirection: 'left',
};
Primary.decorators = [StoreDecorator({})];

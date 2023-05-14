import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoryContainer } from '@/shared/config/storybook/ui/StoryContainer/StoryContainer';
import { NotificationItem } from './NotificationItem';

export default {
    title: 'entities/Notifications/NotificationItem',
    component: NotificationItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {},
} as ComponentMeta<typeof NotificationItem>;

const Template: ComponentStory<typeof NotificationItem> = (args) => (
    <StoryContainer>
        <NotificationItem {...args} />
    </StoryContainer>
);

export const Primary = Template.bind({});
Primary.args = {
    notification: {
        id: '1',
        title: 'Уведомление',
        description: 'Вам пришло новое письмо',
    },
};

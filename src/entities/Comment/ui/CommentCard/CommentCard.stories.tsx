import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CommentCard } from './CommentCard';

export default {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {},
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => (
    <div style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh',
    }}
    >
        <CommentCard {...args} />
    </div>
);

export const Primary = Template.bind({});
Primary.args = {
    comment: {
        id: '2',
        text: 'Привет, ребят',
        user: {
            id: '1',
            username: 'Player2',
        },
    },
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};

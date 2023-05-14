import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { CommentList } from './CommentList';

export default {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {},
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => (
    <div style={{
        display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center', minHeight: '100vh',
    }}
    >
        <CommentList {...args} />
    </div>
);

export const Primary = Template.bind({});
Primary.args = {
    comments: [
        {
            id: '2',
            text: 'Привет, ребят',
            user: {
                id: '1',
                username: 'Player2',
            },
        },
        {
            id: '1',
            user: {
                id: '2',
                username: 'Player1',
            },
            text: 'Привет, я тут новенький',
        },
    ],
};
Primary.decorators = [StoreDecorator({})];

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
Primary.decorators = [StoreDecorator({})];

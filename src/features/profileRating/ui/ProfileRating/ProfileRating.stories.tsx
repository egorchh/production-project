import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import withMock from 'storybook-addon-mock';
import ProfileRating from './ProfileRating';
import { StoryContainer } from '@/shared/config/storybook/ui/StoryContainer/StoryContainer';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
    title: 'features/Rating/ProfileRating',
    component: ProfileRating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {},
    decorators: [withMock],
} as ComponentMeta<typeof ProfileRating>;

const Template: ComponentStory<typeof ProfileRating> = (args) => (
    <StoryContainer>
        <ProfileRating {...args} />
    </StoryContainer>
);

export const Primary = Template.bind({});
Primary.args = {
    profileId: '1',
};
Primary.decorators = [StoreDecorator({
    user: {
        authData: { id: '1' },
    },
})];
Primary.parameters = {
    mockData: [
        {
            url: `${__API__}/profile-ratings?userId=1&profileId=1`,
            method: 'GET',
            status: 200,
            response: [
                {
                    rate: 4,
                },
            ],
        },
    ],
};

export const WithoutRating = Template.bind({});
WithoutRating.args = {
    profileId: '1',
};
WithoutRating.decorators = [StoreDecorator({
    user: {
        authData: { id: '1' },
    },
})];
WithoutRating.parameters = {
    mockData: [
        {
            url: `${__API__}/article-ratings?userId=1&articleId=1`,
            method: 'GET',
            status: 200,
            response: [],
        },
    ],
};

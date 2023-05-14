import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
    <ProfileCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    data: {
        first: 'Egor3',
        lastname: 'Podolskiy213',
        age: 212,
        currency: 'EUR' as Currency,
        country: 'Belarus' as Country,
        city: 'Saint-Petersburg',
        username: 'Глаasdasd',
        avatar: 'https://s13.stc.yc.kpcdn.net/share/i/instagram/B44solahwlo/wr-1280.webp',
    },
};
Primary.decorators = [StoreDecorator({})];

export const withError = Template.bind({});
withError.args = {
    error: 'error',
};
withError.decorators = [StoreDecorator({})];

export const Loading = Template.bind({});
Loading.args = {
    loading: true,
};
Loading.decorators = [StoreDecorator({})];

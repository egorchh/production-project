import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoryContainer } from '@/shared/config/storybook/ui/StoryContainer/StoryContainer';
import NotificationsIcon from '@/shared/assets/icons/notifications.svg';
import { Text } from '../../../Text/Text';
import { AppButton, AppButtonTheme } from '../../../AppButton';
import { Icon } from '../../../Icon/Icon';
import { VStack } from '../../../Stack';
import { Popover } from './Popover';

export default {
    title: 'shared/Popups/Popover',
    component: Popover,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {},
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => (
    <StoryContainer>
        <Popover {...args} />
    </StoryContainer>
);

export const Primary = Template.bind({});
Primary.args = {
    children: (
        <VStack gap="12">
            <Text text="one" />
            <Text text="two" />
            <Text text="three" />
        </VStack>
    ),
    trigger: (
        <AppButton theme={AppButtonTheme.CLEAR}>
            <Icon Svg={NotificationsIcon} invertedColor />
        </AppButton>
    ),
};

import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Modal } from './Modal';
import { StoryContainer } from '../../config/storybook/ui/StoryContainer/StoryContainer';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        children: 'Контент',
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => (
    <StoryContainer>
        <Modal {...args} />
    </StoryContainer>
);

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet expedita nam quas soluta totam. Adipisci beatae eligendi et fugiat nam! Accusamus alias corporis doloremque dolorum ea ipsa iusto quas quisquam veniam! Eligendi enim ex magni quasi qui quibusdam repellat. Aliquid architecto at, culpa cum deserunt distinctio est eum id laudantium minima nihil nostrum numquam, odio odit porro, quas quibusdam repellat repudiandae rerum sint sit unde vel velit? Aliquam animi cum deleniti earum enim fugiat id, illo in inventore ipsa iure minima molestias numquam quisquam sed similique temporibus voluptatem. Amet dicta distinctio ea ipsa nemo, possimus sit soluta ut. Consequuntur, molestias.',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet expedita nam quas soluta totam. Adipisci beatae eligendi et fugiat nam! Accusamus alias corporis doloremque dolorum ea ipsa iusto quas quisquam veniam! Eligendi enim ex magni quasi qui quibusdam repellat. Aliquid architecto at, culpa cum deserunt distinctio est eum id laudantium minima nihil nostrum numquam, odio odit porro, quas quibusdam repellat repudiandae rerum sint sit unde vel velit? Aliquam animi cum deleniti earum enim fugiat id, illo in inventore ipsa iure minima molestias numquam quisquam sed similique temporibus voluptatem. Amet dicta distinctio ea ipsa nemo, possimus sit soluta ut. Consequuntur, molestias.',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

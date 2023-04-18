import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Code } from './Code';
import { StoryContainer } from '../../config/storybook/StoryContainer/StoryContainer';

export default {
    title: 'shared/Code',
    component: Code,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {},
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => (
    <StoryContainer>
        <Code {...args} />
    </StoryContainer>
);

export const Primary = Template.bind({});
Primary.args = {
    text:
        `
            while(true) {
                learnJavaScript();
            }
        `,
};

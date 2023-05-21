## Storybook

В проекте практически для каждого компонента описываются стори-кейсы (их список расширяется).
Запросы на сервер мокаются с помощью ```storybook-addon-mock```.

Файл со сторикейсами создает рядом с компонентом с расширением *.stories.tsx*.

Запустить сторибук можно командой:
- `npm run storybook`

Собрать билд сторибука:
- `npm run storybook:build`

Пример:

```typescript jsx
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { AppButton, AppButtonSize, AppButtonTheme } from './AppButton';
import { StoryContainer } from '../../../config/storybook/ui/StoryContainer/StoryContainer';
import { Theme } from '@/shared/const/theme';

export default {
   title: 'shared/AppButton',
   component: AppButton,
   argTypes: {
      backgroundColor: { control: 'color' },
   },
   args: {
      children: 'Click',
   },
} as ComponentMeta<typeof AppButton>;

const Template: ComponentStory<typeof AppButton> = (args) => (
        <StoryContainer>
           <AppButton {...args} />
        </StoryContainer>
);

export const Primary = Template.bind({});
Primary.args = {};

export const Clear = Template.bind({});
Clear.args = {
   theme: AppButtonTheme.CLEAR,
};
```

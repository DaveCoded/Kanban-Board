import { ComponentStory, ComponentMeta } from '@storybook/react';
import { darkTheme, lightTheme } from '@theme';
import '@globalCSS';
import { PropsWithChildren, useContext } from 'react';
import { DarkModeContext, DarkModeProvider } from '../../context/DarkModeContext';

import { Card } from './card';

export default {
    title: 'Card',
    component: Card
} as ComponentMeta<typeof Card>;

const CardWrapper = ({ children }: PropsWithChildren) => {
    return <div style={{ width: '280px' }}>{children}</div>;
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Card> = args => (
    // <DarkModeProvider>
    <CardWrapper>
        <Card {...args} />
    </CardWrapper>
    // </DarkModeProvider>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    title: 'Hello',
    subtasks: {
        completed: 1,
        total: 3
    }
};

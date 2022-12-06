import { ComponentStory, ComponentMeta } from '@storybook/react';
import { darkTheme, lightTheme } from '@theme';
import '@globalCSS';
import { PropsWithChildren, useContext } from 'react';
import { DarkModeContext, DarkModeProvider } from '../../context/DarkModeContext';

import { Card } from './card';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Card',
    component: Card
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Card>;

const CardWrapper = ({ children }: PropsWithChildren) => {
    const { toggleDarkMode, darkMode } = useContext(DarkModeContext) || {};

    if (!toggleDarkMode) return <div>Damn!</div>;

    console.log({ darkMode });

    return (
        <div className={darkMode ? darkTheme : lightTheme}>
            <div style={{ width: '280px' }}>{children}</div>
            <div>
                <button onClick={() => toggleDarkMode()}>Toggle dark mode</button>
            </div>
        </div>
    );
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Card> = args => (
    <DarkModeProvider>
        <CardWrapper>
            <Card {...args} />
        </CardWrapper>
    </DarkModeProvider>
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

// export const Secondary = Template.bind({});
// Secondary.args = {
//     label: 'Card'
// };

// export const Large = Template.bind({});
// Large.args = {
//     size: 'large',
//     label: 'Card'
// };

// export const Small = Template.bind({});
// Small.args = {
//     size: 'small',
//     label: 'Card'
// };

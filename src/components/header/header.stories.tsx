import { ComponentStory, ComponentMeta } from '@storybook/react';
import '@globalCSS';
import { PropsWithChildren } from 'react';

import { Header } from './header';

export default {
    title: 'Header',
    component: Header
} as ComponentMeta<typeof Header>;

const HeaderWrapper = ({ children }: PropsWithChildren) => {
    return <div style={{ border: '1px solid black' }}>{children}</div>;
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Header> = args => (
    <HeaderWrapper>
        <Header {...args} />
    </HeaderWrapper>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    boardName: 'Platform Launch',
    isSidebarOpen: true,
    darkMode: false
};

import { ComponentStory, ComponentMeta } from '@storybook/react';
import '@globalCSS';
import { PropsWithChildren } from 'react';

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
    <CardWrapper>
        <Card {...args} />
    </CardWrapper>
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

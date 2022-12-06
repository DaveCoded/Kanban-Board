import { cardClass, titleClass, subTasksClass } from './card.css';

type Subtasks = {
    total: number;
    completed: number;
};

interface CardProps {
    title: string;
    subtasks: Subtasks;
}

export const Card = ({ title, subtasks }: CardProps) => {
    return (
        <div className={cardClass}>
            <h2 className={titleClass}>{title}</h2>
            <p className={subTasksClass}>
                {subtasks.completed} of {subtasks.total} subtasks
            </p>
        </div>
    );
};

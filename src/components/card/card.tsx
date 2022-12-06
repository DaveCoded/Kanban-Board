import { card, title as titleClass, description as descriptionClass } from './card.css';

interface CardProps {
    title: string;
    description: string;
}

/**
 * Primary UI component for user interaction
 */
export const Card = ({ title, description }: CardProps) => {
    return (
        <div className={card}>
            <h2 className={titleClass}>{title}</h2>
            <h3 className={descriptionClass}>{description}</h3>
        </div>
    );
};

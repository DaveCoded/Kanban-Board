import { headingMedium, headingXL } from '../../styles/typography.css';
import { LogoDark } from '../logo/logo-dark';
import { LogoLight } from '../logo/logo-light';
import { Button } from '../';
import { buttonWrapper, layoutWrapper, verticalDivider } from './header.css';

interface HeaderProps {
    boardName: string;
    isSidebarOpen: boolean;
    darkMode: boolean;
}

export const Header = ({ boardName, isSidebarOpen, darkMode = false }: HeaderProps) => {
    return (
        <div className={layoutWrapper}>
            {/* todo: include mobile logo. Show/hide with display: none; at breakpoints */}
            {darkMode ? <LogoLight /> : <LogoDark />}
            {isSidebarOpen ? null : <div className={verticalDivider} />}
            <h1 className={headingXL}>{boardName}</h1>
            <div className={buttonWrapper}>
                <Button>
                    <span className={headingMedium}>
                        <span>+</span> Add new task
                    </span>
                </Button>
                {/* context menu */}
            </div>
        </div>
    );
};

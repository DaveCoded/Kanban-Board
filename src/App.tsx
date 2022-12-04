import { style } from '@vanilla-extract/css';
import { themeClass, vars } from './theme.css';

const heading = style({
    color: vars.color.brand
});

function App() {
    return (
        <div className={themeClass}>
            <h1 className={heading}>Start from scratch</h1>
        </div>
    );
}

export default App;

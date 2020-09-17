import { COLORS } from './colors';
import { getInitialColorMode } from './getInitialColorMode';
import { setColorModeVars } from './setColorModeVars';

const ClientColorModeTag = () => {
    const codeToRunOnClient = `(function () {
        const getInitialColorMode = ${getInitialColorMode};
        const setColorModeVars = ${setColorModeVars};
        const colors = ${JSON.stringify(COLORS)};

        const mode = getInitialColorMode();

        setColorModeVars(mode, colors);
    })()`;

    return (
        <script
            dangerouslySetInnerHTML={{
                __html: codeToRunOnClient,
            }}
        />
    );
};

export { ClientColorModeTag };

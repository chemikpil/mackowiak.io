import { useTheme } from '~/theme/ThemeProvider';

export default function Index() {
    const [, setTheme] = useTheme();

    return (
        <div className="text text-slate-900 dark:text-white">
            <button onClick={setTheme}>Toggle Theme</button>
            Home page
        </div>
    );
}

import { createRoot } from 'react-dom/client';
import App from './App';
import { ThemeContextProvider } from './utils/Hooks/useTheme';
import { Analytics } from '@vercel/analytics/react';
const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<>
		<ThemeContextProvider>
			<App />
		</ThemeContextProvider>
		<Analytics />
	</>
);

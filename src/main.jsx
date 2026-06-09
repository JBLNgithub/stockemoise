import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PersistantAuth from './services/PersistantAuth.jsx'
import ContextProviders from './contexts/ContextProviders.jsx'


createRoot(document.getElementById('root')).render(
	<StrictMode>
		<ContextProviders>
			<PersistantAuth>
				<App />
			</PersistantAuth>
		</ContextProviders>
	</StrictMode>,
)

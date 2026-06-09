import {AuthProvider} from "./Auth"
import { ControlPanelProvider } from "./controlPanelContexts";


const ContextProvider = ({children}) => {

	return (
		<AuthProvider>
			<ControlPanelProvider>
				{children}
			</ControlPanelProvider>
		</AuthProvider>
	);
};

export default ContextProvider;

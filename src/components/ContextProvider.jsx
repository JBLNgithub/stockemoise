import { useState } from "react";
import {
	OnAllConcerts,
	OnAllNews,
	OnConcert,
	OnNews,
} from "../contexts/controlPanelContexts";
import {AuthProvider} from "../contexts/Auth";

const ContextProvider = ({ children }) => {
	const onAllConcerts = useState(false);
	const onAllNews = useState(false);
	const onConcert = useState(false);
	const onNews = useState(false);

	return (
		<AuthProvider>
			<OnNews.Provider value={onNews}>
				<OnConcert.Provider value={onConcert}>
					<OnAllNews.Provider value={onAllNews}>
						<OnAllConcerts.Provider value={onAllConcerts}>
							{children}
						</OnAllConcerts.Provider>
					</OnAllNews.Provider>
				</OnConcert.Provider>
			</OnNews.Provider>
		</AuthProvider>
	);
};

export default ContextProvider;

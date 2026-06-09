import RedirectButton from "../../RedirectButton";


export default function OnHome() {
	return (
		<>
			<RedirectButton
				label="Changer de mot de passe"
				path={`/changer-mot-de-passe`}
			/>
		</>
	);
}
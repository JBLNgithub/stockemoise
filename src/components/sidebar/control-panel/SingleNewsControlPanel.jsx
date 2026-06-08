import RedirectButton from "../../RedirectButton";
import ActionButton from "../../ActionButton";
import { useParams, useNavigate } from "react-router-dom";
import topThePage from "../../../utils/topThePage";
import { toast } from "react-toastify";
import deleteNews from "../../../api/news/delete";
import usePrivateAPI from "../../../hooks/usePrivateAPI";


const SingleNewsControlPanel = () => {
	const { id } = useParams();
	const privateAPI = usePrivateAPI()
	const navigate = useNavigate();

	const deleteHandler = async(e) => {
		e.preventDefault();

		let res
		const deleteConfirmation = window.confirm("Supprimer l'actualité définitivement ?")
		if (deleteConfirmation) res = (await privateAPI(deleteNews, {id})).res

		if (res.ok) {
			topThePage();
			toast.success("Actualité supprimée");
			navigate("/actualites");
		}
	};

	return (
		<>
			<RedirectButton
				label="modifier l'actualité"
				path={`/actualites/modifier/${id}`}
			/>
			<RedirectButton
				label="modifier l'image d'en-tête"
				path={`/actualites/modifier-image/${id}`}
			/>
			<ActionButton
				label="supprimer l'actualité"
				action={deleteHandler}
			/>
		</>
	);
};

export default SingleNewsControlPanel;

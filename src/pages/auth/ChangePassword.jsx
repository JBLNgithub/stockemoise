import { useState } from "react"
import { useNavigate } from "react-router-dom";
import usePrivateAPI from '../../hooks/usePrivateAPI'
import ChangePasswordAPI from '../../api/auth/changePassword'
import useLogout from '../../hooks/useLogout'
import { toast } from 'react-toastify'
import FormTextInput from "../../components/FormTextInput"
import { FaLock } from "react-icons/fa";


export default function ChangePassword(){
	const privateAPI = usePrivateAPI()
	const logout = useLogout()
	const navigate = useNavigate()

	const [password, setPassword] = useState('')
	const [newPassword, setNewPassword] = useState('')
	const [newPassword_confirmation, setNewPassword_confirmation] = useState('')
	const [message, setMessage] = useState('')

	const handleSubmit = async(e) => {
		e.preventDefault()

		const {res, data} = await privateAPI(ChangePasswordAPI, {password, newPassword, newPassword_confirmation})

		if(res.ok) {
			toast.success('Mot de passe changé !')
			await logout()
			navigate('/connexion')
		}
		else {
			setMessage(data?.message || res.statusText)
		}
	}

	return(
		<div className="bg-neutral-800 text-neutral-200 rounded-2xl px-10 py-5">
			<h2 className="text-center font-bold text-3xl mb-8">Changer de mot de passe</h2>

			<form onSubmit={handleSubmit}>
				<FormTextInput
					icon={FaLock}
					type="password"
					placeholder="mot de passe"
					required
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<FormTextInput
					icon={FaLock}
					type="password"
					placeholder="nouveau mot de passe"
					required
					value={newPassword}
					onChange={(e) => setNewPassword(e.target.value)}
				/>
				<FormTextInput
					icon={FaLock}
					type="password"
					placeholder="confirmer nouveau mot de passe"
					required
					value={newPassword_confirmation}
					onChange={(e) => setNewPassword_confirmation(e.target.value)}
				/>
				{message && (
					<p className="text-red-400 text-center bg-neutral-800">	{/* TODO : IMPROVE QUALITY MESSAGE */}
						{message}
					</p>
				)}
				<button
					type="submit"
					className="bg-blue-800 hover:bg-blue-400 hover:text-neutral-800 py-2 px-4 rounded-full"
				>
					Changer de mot de passe!
				</button>
			</form>
		</div>

	)
}
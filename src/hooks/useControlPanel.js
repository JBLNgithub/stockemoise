import {useContext} from 'react'
import ControlPanelContext from '../contexts/controlPanelContexts'


export default function useAuth() {
	return useContext(ControlPanelContext)
}
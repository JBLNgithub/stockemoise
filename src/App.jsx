import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Navigate} from 'react-router-dom'
import MainLayout from './Layouts/MainLayout'
import MustBeEitherLoggedInOrNot from './services/MustBeEitherLoggedInOrNot'
import HomePage from './pages/HomePage'
import ActualitesPage from './pages/ActualitesPage'
import HarmoniePage from './pages/HarmoniePage'
import LocationSallePage from './pages/LocationSallePage'
import StockUpPage from './pages/StockUpPage'
import CoursDeMusiquePage from './pages/CoursDeMusiquePage'
import LocationInstrumentPage from './pages/LocationInstrumentPage'
import PlanningPage from './pages/PlanningPage'
import ContactPage from './pages/ContactPage'
import ArticlePage from './pages/article/Article'
import NewsPage from './pages/article/News'
import ConcertPage from './pages/article/Concert'
import LoginPage from './pages/auth/Login'
import ChangePassword from './pages/auth/ChangePassword'
import AddConcertPage from './pages/edits/AddConcertPage'
import UpdateConcertPage from './pages/edits/UpdateConcertPage'
import AddNewsPage from './pages/edits/AddNewsPage'
import UpdateNewsPage from './pages/edits/UpdateNewsPage'
import UpdateCoverPage from './pages/edits/UpdateCoverPage'
import NotFoundPage from './pages/NotFoundPage'



const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<MainLayout />}>
		<Route index element={<HomePage />} />
		<Route path='/actualites' element={<ActualitesPage />} />
		<Route path='/actualites/:id' element={<NewsPage />} />
		<Route path='/harmonie' element={<HarmoniePage />} />
		<Route path='/location-salle' element={<LocationSallePage />} />
		<Route path='/stock-up' element={<StockUpPage />} />
		<Route path='/cours-de-musique' element={<CoursDeMusiquePage />} />
		<Route path='/location-instrument' element={<LocationInstrumentPage />} />
		<Route path='/planning' element={<PlanningPage />} />
		<Route path='/concerts/:id' element={<ConcertPage />} />
		<Route path='/contact' element={<ContactPage />} />
		<Route path='/article/:id' element={<ArticlePage />} />

		{/* Must not be logged in */}
		<Route element={<MustBeEitherLoggedInOrNot mustBeLoggedIn={false} />}>
		    <Route path='/connexion' element={<LoginPage />} />
		</Route>

		{/* Must be logged in */}
		<Route element={<MustBeEitherLoggedInOrNot mustBeLoggedIn={true} />}>
		    <Route path='/concerts/ajouter' element={<AddConcertPage />} />
		    <Route path='/concerts/modifier/:id' element={<UpdateConcertPage />} />
		    <Route path='/concerts/modifier-image/:id' element={<UpdateCoverPage type='concert' />} />
		    <Route path='/actualites/ajouter' element={<AddNewsPage />} />
		    <Route path='/actualites/modifier/:id' element={<UpdateNewsPage />} />
		    <Route path='/actualites/modifier-image/:id' element={<UpdateCoverPage type='news' />} />
		    <Route path='/changer-mot-de-passe' element={<ChangePassword />} />
		</Route>

		<Route path='/*' element={<NotFoundPage />} />
	</Route>)
)

const App = () => {
	return (
		<RouterProvider router={router} />
	)
}

export default App
import React from 'react'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Navigate} from 'react-router-dom'
import MainLayout from './Layouts/MainLayout'
import HomePage from './pages/HomePage'
import ActualitesPage from './pages/ActualitesPage'
import HarmoniePage from './pages/HarmoniePage'
import LocationSallePage from './pages/LocationSallePage'
import StockUpPage from './pages/StockUpPage'
import CoursDeMusiquePage from './pages/CoursDeMusiquePage'
import LocationInstrumentPage from './pages/LocationInstrumentPage'
import PlanningPage from './pages/PlanningPage'
import ContactPage from './pages/ContactPage'
import NotFoundPage from './pages/NotFoundPage'
import ArticlePage from './pages/ArticlePage'
import NewsPage from './pages/NewsPage'
import ConcertPage from './pages/ConcertPage'
import LoginPage from './pages/LoginPage'
import AddConcertPage from './pages/edits/AddConcertPage'


const App = () => {
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
    <Route path='/connexion' element={<LoginPage />} />

    {/* TODO : protect routes => only for Logged In users */}
    <Route path='/concerts/ajouter' element={<AddConcertPage />} />

    {/*this is specifically for gh-pages*/}
    <Route path='/stockemoise' element={<Navigate to='/' replace />} />

    <Route path='/*' element={<NotFoundPage />} />
  </Route>)
)

  return (
    <RouterProvider router={router} />
  )
}

export default App
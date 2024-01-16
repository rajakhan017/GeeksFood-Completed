import About from './About/About'
import Error from './Error'
import Food from './Food/Food'
import FoodItem from './Food/FoodItem'
import Layout from './Layout'
import Main from './Main/Main'
import Quotes from './Quotes/Quotes'
import Restaurants from './Restaurants/Restaurants'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <Main />,
			},
			{
				path: '/quote',
				element: <Quotes />,
			},
			{
				path: '/restaurant',
				element: <Restaurants />,
			},
			{
				path: '/food',
				element: <Food />,
			},
			{
				path: '/food/:id',
				element: <FoodItem />,
			},

			{
				path: '/contact',
				element: <About />,
			},
		],
		errorElement: <Error />,
	},
])

const App = () => {
	return (
		<div className='relative'>
			<RouterProvider router={router} />
		</div>
	)
}

export default App

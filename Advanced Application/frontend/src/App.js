import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/Root';
import HomePage from './pages/Home';
import EventsPage, { loader as eventsLoader } from './pages/Events';
import EventDetailPage, {
	loader as eventDetailLoader,
	action as deleteEventAction
} from './pages/EventDetail';
import NewEventPage from './pages/NewEvent';
import EditEventPage from './pages/EditEvent';
import ErrorPage from './pages/Error';
import { action as manipulateEventAction } from './components/EventForm';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/', element: <HomePage />, children: [
					{ path: '/events', element: <EventsPage />, loader: eventsLoader },
					{
						path: '/events/:eventId',
						id: 'event-detail',
						loader: eventDetailLoader,
						children: [
							{
								path: '',
								element: <EventDetailPage />,
								action: deleteEventAction,
							},
							{ path: 'edit', element: <EditEventPage />, action: manipulateEventAction },
						],
					},
					{ path: '/events/new', element: <NewEventPage />, action: manipulateEventAction },
				]
			},
		],
	}
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;

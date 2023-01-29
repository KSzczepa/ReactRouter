import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/Root';
import HomePage from './pages/Home';
import EventsPage, { loader as eventsLoader } from './pages/Events';
import EventDetailPage, { loader as eventDetailLoader } from './pages/EventDetail';
import NewEventPage, {action as newEventAction} from './pages/NewEvent';
import EditEventPage from './pages/EditEvent';
import ErrorPage from './pages/Error';

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
							{ path: '', element: <EventDetailPage /> },
							{ path: 'edit', element: <EditEventPage /> },
						],
					},
					{ path: '/events/new', element: <NewEventPage />, action: newEventAction },
				]
			},
		],
	}
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;

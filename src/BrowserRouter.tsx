import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Root Page</div>,
  },
  {
    path: '/home',
    element: <div>Home page</div>,
  },
]);

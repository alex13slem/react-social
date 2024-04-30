import LayoutBase from '../layouts/base';
import PageChat from '../pages/chat';
import PageHome from '../pages/home';
import PageFriends from '../pages/friends';
import PageFriend from '../pages/friend';

import friendsLoader from '../pages/friends/loader';
import friendLoader from '../pages/friend/loader';
import homeLoader from '../pages/home/loader';

import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutBase />,
    children: [
      {
        index: true,
        loader: homeLoader,
        element: <PageHome />,
      },
      {
        path: '/chat',
        element: <PageChat />,
      },
      {
        path: '/friends',
        loader: friendsLoader,
        element: <PageFriends />,
      },
      {
        path: '/friends/:id',
        loader: friendLoader,
        element: <PageFriend />,
      },
    ],
  },
]);

import { Favorites, Home } from '../pages';
import {
    HOME_ROUTE,
    FAVORITES_ROUTE,
} from './routesConsts';


export const publicRoutes = [
    {
        path: HOME_ROUTE,
        element: <Home />,
        name: 'Details',
        index: true,
    },
    {
        path: FAVORITES_ROUTE,
        element: <Favorites />,
        name: 'Wallet',
    }
];

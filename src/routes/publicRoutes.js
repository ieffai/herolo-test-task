import { Favorites, Home } from '../pages';
import { FAVORITES_ICON, HOME_ICON } from '../utils/images';
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
        image: HOME_ICON
    },
    {
        path: FAVORITES_ROUTE,
        element: <Favorites />,
        name: 'Favorites',
        image: FAVORITES_ICON
    }
];

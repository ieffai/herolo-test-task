import { setBackgroundImage } from '../redux/app/slice';
import { GOOGLE_SEARCH } from '../utils/constants';
import { googleApi } from './apiConfig';

export const getPicture = (query) => {
    return async (dispatch) => {
        try {
            const { data } = await googleApi.get(GOOGLE_SEARCH, {
                params: {
                    q: query,
                    num: 1,
                    start: 1,
                    imgSize: 'xlarge',
                    searchType: 'image',
                    filetype: 'jpg',
                    imgType: 'photo',
                    cx: process.env.REACT_APP_GOOGLE_SEARCH_ID,
                }
            });
            const img = data.items[0].link;
            dispatch(setBackgroundImage(img))
        } catch (e) {
            throw e;
        }
    };
};
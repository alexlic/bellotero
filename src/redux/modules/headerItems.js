import { fetchData } from '@/services/api'

const HEADER_URL = 'https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/app.json'

export const FETCH_HEADER_ITEMS_SUCCESS = 'headerItem/FETCH_HEADER_ITEMS_SUCCESS';
export const FETCH_HEADER_ITEMS_FAILURE = 'headerItem/FETCH_HEADER_ITEMS_FAILURE';
export const FETCH_HEADER_ITEMS_PENDING = 'headerItem/FETCH_HEADER_ITEMS_PENDING';

export const fetchHeaderItemsSuccessAction = (payload) => ({
  type: FETCH_HEADER_ITEMS_SUCCESS,
  payload,
});

export const fetchHeaderItemsFailureAction = () => ({
  type: FETCH_HEADER_ITEMS_FAILURE,
  error: true,
});

export const fetchHeaderItemsPendingAction = () => ({
  type: FETCH_HEADER_ITEMS_PENDING,
});

export const getHeaderItems = () => async dispatch => {
  dispatch(fetchHeaderItemsPendingAction())
  try {
    const response = await fetchData(HEADER_URL)
    dispatch(fetchHeaderItemsSuccessAction(response.data || {}))
  } catch (err) {
    dispatch(fetchHeaderItemsFailureAction())
  }
}

export const initialState = {
  data: null,
  isFetching: null,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HEADER_ITEMS_SUCCESS:
      return {
        ...state.headerItems,
        data: action.payload,
        isFetching: false,
        error: false,
      }
    case FETCH_HEADER_ITEMS_FAILURE:
      return {
        ...state.headerItems,
        isFetching: false,
        error: true,
      }
    case FETCH_HEADER_ITEMS_PENDING:
      return {
        ...state.headerItems,
        isFetching: true,
        error: false,
      }
    default:
      return state;
  }
}

export default reducer

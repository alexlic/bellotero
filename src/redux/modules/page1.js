import { fetchData } from '@/services/api'

const PAGE1_URL = 'https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/page1.json'

export const FETCH_PAGE1_DATA_SUCCESS = 'headerItem/FETCH_PAGE1_DATA_SUCCESS';
export const FETCH_PAGE1_DATA_FAILURE = 'headerItem/FETCH_PAGE1_DATA_FAILURE';
export const FETCH_PAGE1_DATA_PENDING = 'headerItem/FETCH_PAGE1_DATA_PENDING';

export const fetchPage1SuccessAction = (payload) => ({
  type: FETCH_PAGE1_DATA_SUCCESS,
  payload,
});

export const fetchPage1FailureAction = () => ({
  type: FETCH_PAGE1_DATA_FAILURE,
  error: true,
});

export const fetchPage1PendingAction = () => ({
  type: FETCH_PAGE1_DATA_PENDING,
});

export const fetchPage1Data = () => async dispatch => {
  dispatch(fetchPage1PendingAction())
  try {
    const response = await fetchData(PAGE1_URL)
    dispatch(fetchPage1SuccessAction(response.data || {}))
  } catch (err) {
    dispatch(fetchPage1FailureAction())
  }
}

export const initialState = {
  data: null,
  isFetching: null,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PAGE1_DATA_SUCCESS:
      return {
        ...state.page1,
        data: action.payload,
        isFetching: false,
        error: false,
      }
    case FETCH_PAGE1_DATA_FAILURE:
      return {
        ...state.page1,
        isFetching: false,
        error: true,
      }
    case FETCH_PAGE1_DATA_PENDING:
      return {
        ...state.page1,
        isFetching: true,
        error: false,
      }
    default:
      return state;
  }
}

export default reducer

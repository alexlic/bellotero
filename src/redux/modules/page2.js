import { fetchData } from '@/services/api'

const PAGE2_URL = 'https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/page2.json'

export const FETCH_PAGE2_DATA_SUCCESS = 'headerItem/FETCH_PAGE2_DATA_SUCCESS';
export const FETCH_PAGE2_DATA_FAILURE = 'headerItem/FETCH_PAGE2_DATA_FAILURE';
export const FETCH_PAGE2_DATA_PENDING = 'headerItem/FETCH_PAGE2_DATA_PENDING';

export const fetchPage2SuccessAction = (payload) => ({
  type: FETCH_PAGE2_DATA_SUCCESS,
  payload,
});

export const fetchPage2FailureAction = () => ({
  type: FETCH_PAGE2_DATA_FAILURE,
  error: true,
});

export const fetchPage2PendingAction = () => ({
  type: FETCH_PAGE2_DATA_PENDING,
});

export const fetchPage2Data = () => async dispatch => {
  dispatch(fetchPage2PendingAction())
  try {
    const response = await fetchData(PAGE2_URL)
    dispatch(fetchPage2SuccessAction(response.data || {}))
  } catch (err) {
    dispatch(fetchPage2FailureAction())
  }
}

export const initialState = {
  data: null,
  isFetching: null,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PAGE2_DATA_SUCCESS:
      return {
        ...state.page2,
        data: action.payload,
        isFetching: false,
        error: false,
      }
    case FETCH_PAGE2_DATA_FAILURE:
      return {
        ...state.page2,
        isFetching: false,
        error: true,
      }
    case FETCH_PAGE2_DATA_PENDING:
      return {
        ...state.page2,
        isFetching: true,
        error: false,
      }
    default:
      return state;
  }
}

export default reducer

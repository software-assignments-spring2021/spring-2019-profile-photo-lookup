import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../redux/analysis/action.js'
import * as types from '../redux/analysis/types.js'
import MockAdapter from 'axios-mock-adapter';
import expect from 'expect'
import { instance } from '../redux/instance.js'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)



describe('async actions', () => {

  it('creates TEST_GET', () => {

    var mock = new MockAdapter(instance);
    const data = { name: 'Bob Dylan' };
    mock.onGet('/').reply(200, data);

    const expectedActions = [
      { type: types.TEST_GET, payload: { name: 'Bob Dylan' } }
    ]
    const store = mockStore({ users: null })

    return store.dispatch(actions.fetchTest()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})

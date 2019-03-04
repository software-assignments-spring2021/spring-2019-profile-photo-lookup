import reducer from '../redux/analysis/reducer.js';
import * as types from '../redux/analysis/types.js'

describe('todos reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(
            {
                users: 'user'
            }
        )
    });

    it('should handle TEST_GET', () => {

        expect(
            reducer(
                {
                    users: 'user'
                },
                {
                    type: types.TEST_GET,
                    payload: 'Hello world'
                }
            )
        ).toEqual(
            {
                users: 'Hello world'
            }
        )

    })
})

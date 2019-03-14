import reducer from '../redux/analysis/reducer.js';
import * as types from '../redux/analysis/types.js'

describe('todos reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(
            {
                names: []
            }
        )
    });

    it('should handle UPLOAD_IMAGE', () => {

        expect(
            reducer(
                {
                    names: []
                },
                {
                    type: types.UPLOAD_IMAGE,
                    payload: ['Neil deGrasse Tyson']
                }
            )
        ).toEqual(
            {
                names: ['Neil deGrasse Tyson']
            }
        )

    })
})

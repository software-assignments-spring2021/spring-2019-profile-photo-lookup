import reducer from '../redux/analysis/reducer.js';
import * as types from '../redux/analysis/types.js'

describe('todos reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(
            {
                celebs: [],
                students: []
            }
        )
    });

    it('should handle UPLOAD_IMAGE', () => {

        expect(
            reducer(
                {
                    celebs: [],
                    students: []
                },
                {
                    type: types.UPLOAD_CELEBRITY_IMAGE,
                    payload: ['Neil deGrasse Tyson']
                }
            )
        ).toEqual(
            {
                celebs: ['Neil deGrasse Tyson'],
                students: []
            }
        )

    })
})

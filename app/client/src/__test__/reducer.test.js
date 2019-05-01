import reducer from '../redux/analysis/reducer.js';
import * as types from '../redux/analysis/types.js'

describe('todos reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(
            {
                bbox: null,
                celebs: [],
                students: []
            }
        )
    });

    it('should handle UPLOAD_IMAGE', () => {

        expect(
            reducer(
                {
                    bbox: null,
                    celebs: [],
                    students: []
                },
                {
                    type: types.GET_CELEBRITY_INFO,
                    payload: ['Neil deGrasse Tyson']
                }
            )
        ).toEqual(
            {
                bbox: null,
                celebs: ['Neil deGrasse Tyson'],
                students: []
            }
        )

    })
})

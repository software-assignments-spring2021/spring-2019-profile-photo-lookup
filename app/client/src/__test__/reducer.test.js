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

    it('should handle GET_CELEBRITY_BBOX', () => {
        expect(
            reducer(
                {
                    bbox: null,
                    celebs: [],
                    students: []
                },
                {
                    type: types.GET_CELEBRITY_BBOX,
                    payload: {
                        Height: 269.0000081062317,
                        Left: 720,
                        Top: 136.00000262260437,
                        Width: 268.99999618530273
                    }
                }
            )
        ).toEqual(
            {
                bbox: {
                    Height: 269.0000081062317,
                    Left: 720,
                    Top: 136.00000262260437,
                    Width: 268.99999618530273
                },
                celebs: [],
                students: []
            }
        )
    });

    it('should handle GET_CELEBRITY_INFO', () => {
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
    });

    it('should handle UPLOAD_STUDENT_IMAGE', () => {
        expect(
            reducer(
                {
                    bbox: null,
                    celebs: [],
                    students: []
                },
                {
                    type: types.UPLOAD_STUDENT_IMAGE,
                    payload: {
                        bbox: {Width: 0.2412080019712448, Height: 0.23887300491333008, Left: 0.4476870000362396, Top: 0.4080219864845276},
                        confidence: "98.28%",
                        error: "None",
                        first: "Khoo",
                        last: "Jing-Hwan",
                        school: "CAS",
                        uid: "1045773577",
                        year: "2019",
                    }
                }
            )
        ).toEqual(
            {
                bbox: null,
                celebs: [],
                students: {
                    bbox: {Width: 0.2412080019712448, Height: 0.23887300491333008, Left: 0.4476870000362396, Top: 0.4080219864845276},
                    confidence: "98.28%",
                    error: "None",
                    first: "Khoo",
                    last: "Jing-Hwan",
                    school: "CAS",
                    uid: "1045773577",
                    year: "2019",
                }
            }
        )
    });
})

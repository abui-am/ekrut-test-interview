import produce from 'immer';
import { v4 } from 'uuid';

export const FULL_NAME = 'FULL_NAME';
export const PHONE_NUMBER = 'PHONE_NUMBER';
export const EMAIL = 'EMAIL';

// Educations
export const EDUCATIONS = 'EDUCATIONS';
export const ADD_EDUCATION = 'ADD_EDUCATION';
export const UPDATE_EDUCATION = 'UPDATE_EDUCATION';
export const DELETE_EDUCATION = 'DELETE_EDUCATION';

// Experiences
export const EXPERIENCES = 'EXPERIENCES';
export const ADD_EXPERIENCE = 'ADD_EXPERIENCE';
export const UPDATE_EXPERIENCE = 'UPDATE_EXPERIENCE';
export const DELETE_EXPERIENCE = 'DELETE_EXPERIENCE';

export const RESET = 'RESET';

const INITIAL_STATE = {
  fullName: '',
  phoneNumber: '',
  email: '',
  educations: [
    {
      id: v4(),
      school: '',
      major: '',
      startDate: new Date(),
      endDate: new Date()
    }
  ],
  experiences: [
    {
      id: v4(),
      company: '',
      title: '',
      startDate: new Date(),
      endDate: new Date()
    }
  ]
};

const profileReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RESET:
      return INITIAL_STATE;

    case FULL_NAME:
      return {
        ...state,
        fullName: action.payload
      };

    case PHONE_NUMBER:
      return {
        ...state,
        phoneNumber: action.payload
      };

    case EMAIL:
      return {
        ...state,
        email: action.payload
      };

    case EDUCATIONS:
      return {
        ...state,
        educations: action.payload
      };

    case ADD_EDUCATION:
      return produce(state, draft => {
        draft.educations.push({
          id: v4(),
          school: '',
          major: '',
          startDate: new Date(),
          endDate: new Date()
        });
      });

    case UPDATE_EDUCATION:
      return produce(state, draft => {
        draft.educations[action.index][action.keyId] = action.payload;
      });

    case DELETE_EDUCATION:
      return produce(state, draft => {
        draft.educations.splice(action.index, 1);
      });

    case EXPERIENCES:
      return {
        ...state,
        experiences: action.payload
      };

    case ADD_EXPERIENCE:
      return produce(state, draft => {
        draft.experiences.push({
          id: v4(),
          company: '',
          title: '',
          startDate: new Date(),
          endDate: new Date()
        });
      });

    case UPDATE_EXPERIENCE:
      return produce(state, draft => {
        draft.experiences[action.index][action.keyId] = action.payload;
      });

    case DELETE_EXPERIENCE:
      return produce(state, draft => {
        draft.experiences.splice(action.index, 1);
      });

    default:
      return state;
  }
};

export default profileReducer;

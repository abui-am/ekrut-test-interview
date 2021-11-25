import { useDispatch, useSelector } from 'react-redux';
import {
  ADD_EDUCATION,
  ADD_EXPERIENCE,
  DELETE_EDUCATION,
  DELETE_EXPERIENCE,
  EMAIL,
  FULL_NAME,
  PHONE_NUMBER,
  UPDATE_EDUCATION,
  UPDATE_EXPERIENCE
} from '../redux/reducer/profileReducer';
import { Button } from './Button';
import { Card } from './Container';
import DatePickerComponent from './DatePicker';
import { TextField } from './TextFields';
import PropTypes from 'prop-types';
import { PlusLg, Trash } from 'react-bootstrap-icons';
import {
  selectEducations,
  selectEmail,
  selectExperiences,
  selectFullName,
  selectPhone
} from '../redux/selector/profileSelector';

export const BasicInformationForm = () => {
  const dispatch = useDispatch();
  const fullName = useSelector(selectFullName);
  const email = useSelector(selectEmail);
  const phone = useSelector(selectPhone);

  return (
    <Card>
      <section>
        <h1 className="text-2xl mb-4 font-bold">Basic Information</h1>
        <div className="flex -mx-2 flex-wrap mb-1">
          <div className="w-full px-2">
            <TextField
              onChange={e => {
                dispatch({ type: FULL_NAME, payload: e.target.value });
              }}
              value={fullName}
              label="Fullname"
              name="fullName"
              placeholder="Enter your full name"
            />
          </div>
          <div className="w-6/12 px-2">
            <TextField
              onChange={e => {
                dispatch({ type: EMAIL, payload: e.target.value });
              }}
              email={email}
              label="Email"
              type="email"
              name="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="w-6/12 px-2">
            <TextField
              onChange={e => {
                dispatch({ type: PHONE_NUMBER, payload: e.target.value });
              }}
              value={phone}
              label="Phone"
              type="number"
              name="phone"
              placeholder="Enter your phone number"
            />
          </div>
        </div>
      </section>
    </Card>
  );
};

export const EducationFormList = () => {
  const dispatch = useDispatch();
  const educations = useSelector(selectEducations);

  return (
    <Card>
      <section>
        <h1 className="text-2xl font-bold mb-4">Education</h1>
        {educations.map((edu, index) => {
          return (
            <EducationForm
              key={edu.id}
              education={edu}
              index={index}
              disableDelete={index === 0}
            />
          );
        })}
        <Button
          Icon={<PlusLg />}
          onClick={() => dispatch({ type: ADD_EDUCATION })}
        >
          Add New
        </Button>
      </section>
    </Card>
  );
};

export const EducationForm = ({ education, index, disableDelete }) => {
  const dispatch = useDispatch();
  return (
    <Card dense disableElevation>
      <div className="flex -mx-2 flex-wrap mb-1">
        <div className="w-6/12 px-2">
          <TextField
            onChange={e => {
              dispatch({
                type: UPDATE_EDUCATION,
                payload: e.target.value,
                index,
                keyId: 'school'
              });
            }}
            label="School"
            name="school"
            placeholder="Enter your school"
            value={education.school}
          />
        </div>
        <div className="w-6/12 px-2">
          <TextField
            label="Major"
            name="major"
            placeholder="Enter your major"
            onChange={e => {
              dispatch({
                type: UPDATE_EDUCATION,
                payload: e.target.value,
                index,
                keyId: 'major'
              });
            }}
            value={education.major}
          />
        </div>
        <div className="w-6/12 px-2">
          <DatePickerComponent
            label="Start date"
            name="startDate"
            selected={education.startDate}
            onChange={e => {
              dispatch({
                type: UPDATE_EDUCATION,
                payload: e,
                index,
                keyId: 'startDate'
              });
            }}
          />
        </div>
        <div className="w-6/12 px-2">
          <DatePickerComponent
            label="End date"
            name="endDate"
            selected={education.endDate}
            onChange={e => {
              dispatch({
                type: UPDATE_EDUCATION,
                payload: e,
                index,
                keyId: 'endDate'
              });
            }}
          />
        </div>
        {!disableDelete && (
          <div className="w-full px-2 flex justify-end">
            <Button
              onClick={() => {
                dispatch({
                  type: DELETE_EDUCATION,
                  index
                });
              }}
              color="error"
              Icon={<Trash />}
            >
              Delete
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
};

EducationForm.propTypes = {
  education: {
    major: PropTypes.string,
    school: PropTypes.string,
    startDate: PropTypes.any,
    endDate: PropTypes.any
  },
  index: PropTypes.string,
  disableDelete: PropTypes.bool
};

export const ExperienceFormList = () => {
  const dispatch = useDispatch();
  const experiences = useSelector(selectExperiences) ?? [];

  return (
    <Card>
      <section>
        <h1 className="text-2xl font-bold mb-4">Experience</h1>
        {experiences.map((experience, index) => {
          return (
            <ExperienceForm
              key={experience.id}
              experience={experience}
              index={index}
              disableDelete={index === 0}
            />
          );
        })}
        <Button
          Icon={<PlusLg />}
          wonClick={() => dispatch({ type: ADD_EXPERIENCE })}
        >
          Add New
        </Button>
      </section>
    </Card>
  );
};

export const ExperienceForm = ({ experience, index, disableDelete }) => {
  const dispatch = useDispatch();

  return (
    <Card dense disableElevation>
      <div className="flex -mx-2 flex-wrap mb-1">
        <div className="w-6/12 px-2">
          <TextField
            onChange={e => {
              dispatch({
                type: UPDATE_EXPERIENCE,
                payload: e.target.value,
                index,
                keyId: 'company'
              });
            }}
            label="Company"
            name="company"
            placeholder="Enter your company"
            value={experience.company}
          />
        </div>
        <div className="w-6/12 px-2">
          <TextField
            label="Title"
            name="title"
            placeholder="Enter your title"
            onChange={e => {
              dispatch({
                type: UPDATE_EXPERIENCE,
                payload: e.target.value,
                index,
                keyId: 'title'
              });
            }}
            value={experience.title}
          />
        </div>
        <div className="w-6/12 px-2">
          <DatePickerComponent
            label="Start date"
            name="startDate"
            selected={experience.startDate}
            onChange={e => {
              dispatch({
                type: UPDATE_EXPERIENCE,
                payload: e,
                index,
                keyId: 'startDate'
              });
            }}
          />
        </div>
        <div className="w-6/12 px-2">
          <DatePickerComponent
            label="End date"
            name="endDate"
            selected={experience.endDate}
            onChange={e => {
              dispatch({
                type: UPDATE_EXPERIENCE,
                payload: e,
                index,
                keyId: 'endDate'
              });
            }}
          />
        </div>
        {!disableDelete && (
          <div className="w-full px-2 flex justify-end">
            <Button
              onClick={() => {
                dispatch({
                  type: DELETE_EXPERIENCE,
                  index
                });
              }}
              color="error"
              Icon={<Trash />}
            >
              Delete
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
};

ExperienceForm.propTypes = {
  experience: {
    company: PropTypes.string,
    title: PropTypes.string,
    startDate: PropTypes.any,
    endDate: PropTypes.any
  },
  index: PropTypes.string,
  disableDelete: PropTypes.bool
};

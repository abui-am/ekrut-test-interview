import { useSelector } from 'react-redux';
import {
  BasicInformationForm,
  EducationFormList,
  ExperienceFormList
} from './components/Form';
import {
  selectEducations,
  selectEmail,
  selectExperiences,
  selectFullName,
  selectPhone
} from './redux/selector/profileSelector';
import { Button } from './components/Button';
import items from './api/items';
import { useState } from 'react';

function App() {
  return (
    <div className="text-gray-700 p-6 max-w-6xl ml-auto mr-auto">
      <BasicInformationForm />
      <EducationFormList />
      <ExperienceFormList />
      <ButtonSave />
    </div>
  );
}

const ButtonSave = () => {
  const [isSubmiting, setIsSubmiting] = useState(false);
  const fullName = useSelector(selectFullName);
  const email = useSelector(selectEmail);
  const phone = useSelector(selectPhone);
  const educations = useSelector(selectEducations) ?? [];
  const experiences = useSelector(selectExperiences) ?? [];
  const save = async () => {
    try {
      setIsSubmiting(true);
      const { data } = await items.createUsers({
        fullname: fullName,
        email,
        phone
      });
      await items.addEducations(
        educations.map(({ major, school }) => ({
          major,
          school,
          user_id: data.data?.id
          // start_date: formatDate(startDate),
          // end_date: formatDate(endDate)
        }))
      );
      await items.addExperiences(
        experiences.map(({ company, title }) => ({
          company,
          title,
          user_id: data.data?.id
          // start_date: formatDate(startDate),
          // end_date: formatDate(endDate)
        }))
      );
      setIsSubmiting(false);
    } catch (e) {
      setIsSubmiting(false);
    }

    console.log('Successfully save data');
  };

  return (
    <Button
      disabled={
        (!fullName && !email && !phone && !educations && !experiences) |
        isSubmiting
      }
      onClick={() => save()}
      fullWidth
      withBigSize
    >
      Save
    </Button>
  );
};

export default App;

import apiInstance from './instance';

export default {
  createUsers: ({ fullname, phone, email } = {}, config) => {
    try {
      return apiInstance().post(
        '/items/users',
        {
          fullname,
          phone,
          email
        },
        config
      );
    } catch (e) {
      console.error('ERROR: ', e);
    }
  },

  addEducations: (educations = [{}], config) => {
    try {
      return apiInstance().post('/items/education', educations, config);
    } catch (e) {
      console.error('ERROR: ', e);
    }
  },

  addExperiences: (experiences = [{}], config) => {
    try {
      return apiInstance().post('/items/experience', experiences, config);
    } catch (e) {
      console.error('ERROR: ', e);
    }
  }
};

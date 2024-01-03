import { uploadPhoto, createUser } from './utils';

const asyncUploadUser = async () => {
  const data = {};
  try {
    data.photo = await uploadPhoto();
    data.user = await createUser();
    return (data);
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }
};

export default asyncUploadUser;

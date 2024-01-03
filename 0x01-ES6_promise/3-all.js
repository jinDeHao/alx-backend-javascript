import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const photoPromice = uploadPhoto();
  const userPromice = createUser();
  return Promise.all([photoPromice, userPromice])
    .then((args) => { console.log(`${args[0].body} ${args[1].firstName} ${args[1].lastName}`); })
    .catch(() => { console.log('Signup system offline'); });
}

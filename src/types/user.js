import { shape, string, number, arrayOf, oneOfType, array } from 'prop-types';
import hobbySchema from './hobby';

const userSchema = shape({
  id: number.isRequired,
  avatar: string.isRequired,
  name: string.isRequired,
  city: string.isRequired,
  age: number.isRequired,
  hobbies: oneOfType([arrayOf(hobbySchema), array]).isRequired,
  friends: arrayOf(
    shape({
      id: number.isRequired,
    })
  ),
});

export default userSchema;

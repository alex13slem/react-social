import { shape, string } from 'prop-types';

const hobbySchema = shape({
  slug: string.isRequired,
  name: string.isRequired,
});

export default hobbySchema;

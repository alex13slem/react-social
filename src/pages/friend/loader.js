import usersData from '../../data/users.json';
import hobbiesData from '../../data/hobbies.json';

async function loader({ params }) {
  const user = usersData.find((user) => user.id === Number(params.id));
  const hobbies = user.hobbies.map((slug) =>
    hobbiesData.find((hobby) => hobby.slug === slug)
  );

  return new Response(JSON.stringify({ user, hobbies }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json; utf-8',
    },
  });
}

export default loader;

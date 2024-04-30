import FriendCard from '../../components/friend-card';
import UserDetail from '../../components/user-detail';
import userSchema from '../../types/user';
import hobbySchema from '../../types/hobby';
import { arrayOf, oneOfType, array } from 'prop-types';
import css from './style.module.css';

/**
 * @typedef {Object} User - Пользователь
 * @property {number} id - Уникальный идентификатор пользователя
 * @property {string} avatar - Аватар пользователя
 * @property {string} name - Имя пользователя
 * @property {string} city - Город пользователя
 * @property {number} age - Возраст пользователя
 * @property {Object[]} hobbies - Хобби пользователя
 * @property {string} hobbies.slug - Уникальный идентификатор хобби
 * @property {string} hobbies.name - Название хобби
 * @property {Object[]} friends - Массив объектов друзей пользователя
 * @property {number} friends.id - Уникальный идентификатор друга
 */

/**
 * @typedef {Object} Hobby - Хобби
 * @property {string} slug - Уникальный идентификатор хобби
 * @property {string} name - Название хобби
 */

/**
 * @typedef {object} Props - Параметры компонента
 * @property {User} user - Пользователь
 * @property {Hobby[]} hobbies - Хобби пользователя
 */

/**
 * @param {Props} props
 * @returns {JSX.Element}
 */

const SectProfile = ({ user, hobbies }) => {
  return (
    <section className={css.root}>
      <FriendCard user={user} />
      <UserDetail hobbies={hobbies} />
    </section>
  );
};

SectProfile.propTypes = {
  user: userSchema.isRequired,
  hobbies: oneOfType([arrayOf(hobbySchema), array]),
};

export default SectProfile;

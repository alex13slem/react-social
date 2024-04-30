import { string } from 'prop-types';
import css from './style.module.css';
import { Link } from 'react-router-dom';
import userSchema from '../../types/user';

/**
 * @typedef {Object} User - Пользователь
 * @property {string} id - Уникальный идентификатор пользователя
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
 * @typedef {object} Props - Параметры компонента
 * @property {User} user - Пользователь
 * @property {string} href - cсылка
 */

/**
 * @param {Props} props
 * @returns {JSX.Element}
 */

const FriendCard = ({ user, href }) => {
  const { name, city, age, avatar } = user;

  const Tag = href ? Link : 'article';
  return (
    <Tag className={css['root']} to={href}>
      <div className={css['avatar']}>
        <img src={avatar} alt={name} />
      </div>

      <div className={css['info']}>
        <h3>{name}</h3>
        <p>
          <i>Город:</i> {city}
        </p>
        <p>
          <i>Возраст:</i> {age}
        </p>
      </div>
    </Tag>
  );
};

FriendCard.propTypes = {
  user: userSchema.isRequired,
  href: string,
};

export default FriendCard;

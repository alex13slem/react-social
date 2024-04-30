import css from './style.module.css';
import hobbySchema from '../../types/hobby';
import { arrayOf, oneOfType, array } from 'prop-types';

/**
 * @typedef {Object} Hobby - Хобби
 * @property {string} slug - Уникальный идентификатор хобби
 * @property {string} name - Название хобби
 */

/**
 * @typedef {object} Props - Параметры компонента
 * @property {Hobby[]} hobbies - Хобби пользователя
 */

/**
 * @param {Props} props
 * @returns {JSX.Element}
 */

const UserDetail = ({ hobbies }) => {
  return (
    <article className={css['root']}>
      {hobbies?.length && (
        <>
          <h3>Хобби</h3>
          <ul className={css['hobbies']}>
            {hobbies.map((hobby) => (
              <li key={hobby.slug} className={css['hobby']}>
                {hobby.name}
              </li>
            ))}
          </ul>
        </>
      )}
    </article>
  );
};

UserDetail.propTypes = {
  hobbies: oneOfType([arrayOf(hobbySchema), array]),
};

export default UserDetail;

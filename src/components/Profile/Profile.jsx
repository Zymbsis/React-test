import css from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <img className={css.img} src={image} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p className={css.userName}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      <ul className={css.list}>
        {Object.entries(stats).map(item => {
          return (
            <li key={item[0]}>
              <span>{item[0]}</span>
              <span>{item[1]}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Profile;

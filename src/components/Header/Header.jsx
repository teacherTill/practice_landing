import styles from './Header.module.css'
import Logo from '../../assets/Logo.svg'

const Header = () => {
  return (
    <div className={`${styles.header} container`}>
      <img src={Logo} alt="Logo" />
      <div className={styles.headerLinks}>
        <a href="#">Поиск работы</a>
        <a href="#">Поиск стартапов</a>
      </div>
      <div className={styles.headerAuth}>
        <button className={styles.register}>Регистрация</button>
        <button className={styles.auth}>Вход</button>
      </div>
    </div>
  )
}

export default Header

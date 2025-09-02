import BanerSearch from '../BanerSearch/BanerSearch'
import styles from './Baner.module.css'
import BanerBg from '../../assets/BannerBg.svg'

const Baner = () => {
  return (
    <div className={styles.baner}>
      <h1 className={styles.banerHeader}>
        Один клик
        <br /> и работа в кармане
      </h1>
      <BanerSearch />
      <img className={styles.banerBg} src={BanerBg} alt="" />
    </div>
  )
}

export default Baner

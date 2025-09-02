import styles from './BanerSearch.module.css'
import SearchIcon from '../../assets/SearchIcon.svg'
import LocationSearch from '../../assets/LocationSearch.svg'

const BanerSearch = () => {
  return (
    <div className={styles.input}>
      <div className={styles.banerInputs}>
        <div className={styles.banerSearchInput}>
          <img
            className={styles.banerIcon}
            src={SearchIcon}
            alt="#"
            width="20px"
            height="20px"
          />
          <input
            placeholder="Должность или компания"
            className={styles.banerInput}
            type="text"
          />
        </div>
        <div className={styles.banerDevider}></div>
        <div className={styles.banerSearchInput}>
          <img
            className={styles.banerIcon}
            src={LocationSearch}
            alt="#"
            width="20px"
            height="20px"
          />
          <input
            placeholder="Город, Страна"
            className={styles.banerInput}
            type="text"
          />
        </div>
      </div>
      <div>
        <button className={styles.banerSearchButton}>Поиск</button>
      </div>
    </div>
  )
}

export default BanerSearch

import Finance from '../../assets/Finance.svg'
import Car from '../../assets/Car.svg'
import Design from '../../assets/Design.svg'
import RestaurantBusiness from '../../assets/RestaurantBusiness.svg'
import Medicine from '../../assets/Medicine.svg'
import Multimedia from '../../assets/Multimedia.svg'
import Support from '../../assets/Support.svg'
import Management from '../../assets/Management.svg'
import Sales from '../../assets/Sales.svg'
import styles from './CardList.module.css'
import VacancyCard from '../Card/Card'
import Arrow from '../../assets/Arrow.svg'

const CardList = () => {
  const vacansyList = [
    { img: Finance, name: 'Финансы' },
    { img: Car, name: 'Грузоперевозки' },
    { img: Design, name: 'Дизайн' },
    { img: RestaurantBusiness, name: 'Ресторанный бизнес' },
    { img: Medicine, name: 'Медицина' },
    { img: Multimedia, name: 'Мультимедиа' },
    { img: Support, name: 'Поддержка' },
    { img: Management, name: 'Менеджмент' },
    { img: Sales, name: 'Продажи' },
  ]
  return (
    <div className={styles.vacancyListWrapper}>
      <h2 className={styles.vacancyLabel}>
        Работа <br />
        по категориям
      </h2>
      <ul className={styles.vacancyList}>
        {vacansyList.map((el, idx) => (
          <VacancyCard key={idx} img={el.img} name={el.name} />
        ))}
        <VacancyCard img={Arrow} name="Больше категорий" isLast={true} />
      </ul>
    </div>
  )
}

export default CardList

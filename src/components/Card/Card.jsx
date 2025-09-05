import styles from './Card.module.css'

const Card = ({ img, name, isLast }) => {
  return (
    <li
      style={{
        background: isLast && 'transparent',
        border: isLast && '2px solid lightgray',
        boxShadow: isLast && 'none',
      }}
      className={styles.vacancyCard}
    >
      <img className={styles.vacancyImg} src={img} alt="icon" />
      <p className={styles.vacancyName}>{name}</p>
    </li>
  )
}

export default Card
// const vacancyCardsData = [
//   {
//     color: '#5182FF',
//     category: 'Финансы',
//     vacancyCardText: 'Менеджер по управлению финансами в крупной компании',
//     location: 'Осака, Япония',
//     company: Sony,
//     companyName: 'Sony, 3 дня назад',
//   },
//   {
//     color: '#FF51EE',
//     category: 'Продажи',
//     vacancyCardText: 'Специалист по продажам',
//     location: 'Коясан, Япония',
//     company: Facebook,
//     companyName: 'Facebook, 7 дней назад',
//   },
//   {
//     color: '#58D94D',
//     category: 'Служба поддержки',
//     vacancyCardText: 'Оператор колл центра',
//     location: 'Томаму, Япония',
//     company: Cola,
//     companyName: 'CocaCola, 1 день назад',
//   },
//   {
//     color: '#FF9051',
//     category: 'Мультимедиа',
//     vacancyCardText: 'Системный администратор',
//     location: 'Токио, Япония',
//     company: Sony,
//     companyName: 'Sony, 3 дня назад',
//   },
//   {
//     color: '#F84242',
//     category: 'Дизайн',
//     vacancyCardText:
//       'Дизайнер интерьера в профессиональную студию в цнетре города',
//     location: 'Йокогама, Япония',
//     company: Facebook,
//     companyName: 'Facebook, 7 дней назад',
//   },
//   {
//     color: '#383838',
//     category: 'Грузоперевозки',
//     vacancyCardText: 'Водитель на дальние дистанции',
//     location: 'Кобе, Япония',
//     company: Cola,
//     companyName: 'CocaCola, 1 день назад',
//   },
// ]

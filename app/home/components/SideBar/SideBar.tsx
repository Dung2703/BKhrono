import styles from './SideBar.module.css'

interface SideBarProps{
  items: string[];
}
const items = [
  "CO2005",
  "CO2006",
  "CO2007",
  "CO2008",
  // "CO2009",
  // "CO2010",
  // "CO2011",
  // "CO2012",
  // "CO2013",
  // "CO2014",
  // "CO2015",
  // "CO2016",
  // "CO2017",
  // "CO2018",
  // "CO2019",

]
const SideBar = (/*{items} : SideBarProps*/) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>Courses</div>
      <div className={styles.body}>
        <ul className={styles.list}>
          {items.map((item, index) => (
            <li key={index} className={styles.listItem}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SideBar
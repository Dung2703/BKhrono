import React, { CSSProperties } from 'react'

interface SideBarProps{
  items: string[]
}

const SideBar: React.FC<SideBarProps> = ({ items }) => {
  return (
    <div style={styles.sidebar}>
      <h2 style={styles.header}>Courses</h2>
      <ul style={styles.list}>
        {items.map((item, index) => (
          <li key={index} style={styles.listItem}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

const styles: { [key: string]: CSSProperties } = {
  sidebar: {
    width: '200px',
    height: '80vh',
    backgroundColor: '#f4f4f4',
    padding: '20px',
    boxSizing: 'border-box',
    borderRadius: '50px',
    border: '2px solid #000',
    overflowY: 'auto',
  },
  header: {
    borderBottom: '2px solid #000',
    paddingBottom: '10px',
    margin: '0 -20px',
    textAlign: 'center',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
    marginTop: '20px',
    textAlign: 'center',
  },
  listItem: {
    margin: '10px 0',
  },
};

export default SideBar
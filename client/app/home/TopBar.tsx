import Link from 'next/link'
import React from 'react'
import FileInputBox from './FileInputBox';
import './ContPage.css'

const TopBar: React.FC = () => {
  return (
    <div>
      
      <div style={{ display: 'flex', alignItems: 'center', margin: '10px' }}>
        <FileInputBox />
        <div className="box" style={{ marginLeft: '20px' }}>
          <a href="./result">Continue</a>
        </div>

      </div>

        
    </div>
  )
}

export default TopBar
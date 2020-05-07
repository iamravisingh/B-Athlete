import React from 'react';
import './menu-item.style.scss' 
import {withRouter} from 'react-router-dom'

const MenuItem = ({title,imageUrl,history,linkUrl,match}) => (
    <div style={{
            backgroundImage : `url(${imageUrl})`
        }}
    className="menu-item"
        onClick={() => {
            history.push(`${linkUrl}`)
        }} 
    >
    <img src = '../../../assets/advance-adult-skipping-rope-red.jpg'/>
    <div className = "content"> 
        <h1 className="title">{title}</h1>
        <span className = "subtitle">SHOP NOW</span>
    </div>
</div>
)

export default withRouter(MenuItem);
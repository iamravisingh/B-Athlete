import React from 'react';
import './directory.style.scss';
import MenuItem from '../menu-item/menu-item.component'

export default class Directory extends React.Component{
    constructor() {
    super();

    this.state = {
        sections: [
            { title: 'SKIPPING ROPE', imageUrl: '/assets/advance-adult-skipping-rope-red.jpg', size: '', id: 1,linkUrl : "runing" },
            { title: 'SHOES', imageUrl: '/assets/shoes.jpg', size: '', id: 2 ,linkUrl : "shoes"},
            { title: 'CAPS', imageUrl: '/assets/cap.jpg', size: '', id: 3 ,linkUrl : "cap"},
            { title: 'GLOVES', imageUrl:  '/assets/weight-training-glove-900-with-wrist-strap-black-with-grey.jpg', size:'', id: 4 ,linkUrl : "boxing"},
            { title: 'T-SHIRT', imageUrl: '/assets/gymTee.jpg', size: '', id: 5 ,linkUrl : "tee"}
        ]   
        }
    }
    render() {
        const { sections } = this.state;
        return (
            <div className="directory-menu">
                {sections.map(({id,...args}) => (
                    <MenuItem key={id} {...args}/>
                ))}
            </div>
        )
    }
}
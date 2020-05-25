import React from 'react';
import './directory.style.scss';
import MenuItem from '../menu-item/menu-item.component';
import { connect } from 'react-redux'
import {selectDirectoryitems} from '../../redux/directory/directory.selector'

const Directory = ({ sections }) => (
    <div className="directory-menu">
        {sections.map(({id,...otherProps}) => (
            <MenuItem key={id} {...otherProps}/>
        ))}
    </div>
)

const mapStateToProps = (section) => ({
    sections : selectDirectoryitems(section)
})

export default connect(mapStateToProps)(Directory);
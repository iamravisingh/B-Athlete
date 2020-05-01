import React from 'react';
import './homepage.style.scss';
import Directory from '../../component/Directory/directory.component'

const HomePage = () => (
    <div className = "homepage">
        <div className = "directory-menu">
            <Directory/>
        </div>
    </div>
)

export default HomePage;
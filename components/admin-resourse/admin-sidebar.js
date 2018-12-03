import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames/bind';
import style from './style.css';

const cn = classnames.bind(style);

class AdminSidebar extends PureComponent {

    static propTypes = {
        content: PropTypes.object
    };

    render() {
        return (
            <div>sidebar</div>
        )
    }
}

export default AdminSidebar;
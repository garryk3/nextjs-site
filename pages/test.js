import React, { Component } from 'react';
import style from '../css/test.css';
import testPhoto from '../img/test.jpg'

export default class Test extends Component {
    render() {
        return (
            <div className={style['test']}>
                <img src={testPhoto} alt=""/>
            </div>
        )
    }
}
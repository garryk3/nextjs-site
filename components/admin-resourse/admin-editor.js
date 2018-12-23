import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';

import classnames from 'classnames/bind';
import style from './style.css';

const cn = classnames.bind(style);

class AdminEditor extends PureComponent {

    static propTypes = {
        content: PropTypes.object,
        articleHandler: PropTypes.func
    };

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className={cn('admin-editor')}>

                <form className={cn('admin-editor__form')}>
                    <TextField
                        id="outlined-full-width"
                        label="Title"
                        style={{ margin: '0 0 24px' }}
                        placeholder="Заполните поле"
                        helperText="Краткое описание статьи"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        id="outlined-full-width"
                        label="Description"
                        style={{ margin: '0 0 24px' }}
                        placeholder="Заполните поле"
                        helperText="Полное описание статьи, несколько предложений"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        id="outlined-full-width"
                        label="Heading"
                        style={{ margin: '0 0 24px' }}
                        placeholder="Заполните поле"
                        helperText="Заголовок статьи"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        id="outlined-full-width"
                        label="Keywords"
                        style={{ margin: '0 0 24px' }}
                        placeholder="Заполните поле"
                        helperText="Ключевые слова (через запятую)"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        id="filled-multiline-flexible"
                        label="Содержание статьи"
                        multiline
                        rowsMax="24"
                        fullWidth
                        margin="normal"
                        variant="filled"
                    />
                </form>
            </div>
        )
    }
}

export default AdminEditor;
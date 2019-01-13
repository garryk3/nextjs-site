import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import classnames from 'classnames/bind';

import { FirebaseContext } from '../firebase';

import style from './style.css';

const cn = classnames.bind(style);

class AdminEditor extends PureComponent {

    static propTypes = {
        content: PropTypes.object,
        articleHandler: PropTypes.func,
        editedArticle: PropTypes.object
    };

    constructor(props) {
        super(props);

        this.defaultState = {
            isValidForm: false,
            valueTitle: {
                value: '',
                valid: false,
                focused: false
            },
            valueDescription: {
                value: '',
                valid: false,
                focused: false
            },
            valueHeading: {
                value: '',
                valid: false,
                focused: false
            },
            valueKeywords: {
                value: '',
                valid: false,
                focused: false
            },
            valueTextarea: {
                value: '',
                valid: false,
                focused: false
            }
        };

        this.state = {
            ...this.defaultState
        };
    }

    static getDerivedStateFromProps(props, state) {
        if(props.editedArticle) {
            return {
                ...state,
                isValidForm: true,
                valueTitle: {
                    value: props.editedArticle.title,
                    valid: true,
                    focused: true
                },
                valueDescription: {
                    value: props.editedArticle.description,
                    valid: true,
                    focused: true
                },
                valueHeading: {
                    value: props.editedArticle.heading,
                    valid: true,
                    focused: true
                },
                valueKeywords: {
                    value: props.editedArticle.keywords,
                    valid: true,
                    focused: true
                },
                valueTextarea: {
                    value: props.editedArticle.body,
                    valid: true,
                    focused: true
                }
            }
        }

        return null;
    }

    static contextType = FirebaseContext;
    
    saveArticleToDB = (type, content) => {
        return this.context.firebase.database.saveContentToDB(`/${type}`, content)
    };

    onClickSaveForm = () => {
        const data = {
            title: this.state.valueTitle.value,
            description: this.state.valueDescription.value,
            heading: this.state.valueHeading.value,
            keywords: this.state.valueKeywords.value,
            body: this.state.valueTextarea.value
        };

        if(this.props.editedArticle.key) {
            data.key = this.props.editedArticle.key;
        }

        this.saveArticleToDB('/articles', data)
    };

    onChangeField = (name) => {
        return (event) => {
            let valid = true;
            const value = event.target.value;

            switch (name) {
                // case 'valueTitle': {
                //     //valid = !!value.length;
                //     break;
                // }
                default: {
                    valid = !!value.length;
                }
            }

            const newState = {
                [name]: {
                    ...this.state[name],
                    value,
                    valid
                },
                isValidForm: this.state.valueTitle.valid && this.state.valueDescription.valid && this.state.valueHeading.valid && this.state.valueKeywords.valid && this.state.valueTextarea.valid
            };

            !this.state[name].focused && (newState[name].focused = true);

            this.setState(newState)
        }
    };

    render() {
        return (
            <div className={cn('admin-editor')}>

                <form className={cn('admin-editor__form')}>
                    <TextField
                        required={true}
                        error={this.state.valueTitle.focused && !this.state.valueTitle.valid}
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
                        onChange={this.onChangeField('valueTitle')}
                        value={this.state.valueTitle.value}
                    />
                    <TextField
                        required={true}
                        error={this.state.valueDescription.focused && !this.state.valueDescription.valid}
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
                        onChange={this.onChangeField('valueDescription')}
                        value={this.state.valueDescription.value}
                    />
                    <TextField
                        required={true}
                        error={this.state.valueHeading.focused && !this.state.valueHeading.valid}
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
                        onChange={this.onChangeField('valueHeading')}
                        value={this.state.valueHeading.value}
                    />
                    <TextField
                        required={true}
                        error={this.state.valueKeywords.focused && !this.state.valueKeywords.valid}
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
                        onChange={this.onChangeField('valueKeywords')}
                        value={this.state.valueKeywords.value}
                    />
                    <TextField
                        required={true}
                        error={this.state.valueTextarea.focused && !this.state.valueTextarea.valid}
                        id="filled-multiline-flexible"
                        label="Содержание статьи"
                        multiline
                        rowsMax="24"
                        fullWidth
                        margin="normal"
                        variant="filled"
                        onChange={this.onChangeField('valueTextarea')}
                        value={this.state.valueTextarea.value}
                    />
                    <div className={cn('admin-editor__save-btn')}>
                        <Button variant="contained" size="small" disabled={!this.state.isValidForm} onClick={this.onClickSaveForm}>
                            <SaveIcon />
                            Save
                        </Button>
                    </div>
                </form>
            </div>
        )
    }
}

export default AdminEditor;
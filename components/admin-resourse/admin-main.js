import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

import AdminEditor from './admin-editor';

import classnames from 'classnames/bind';
import style from './style.css';

const cn = classnames.bind(style);

class AdminMain extends PureComponent {

    static propTypes = {
        content: PropTypes.object,
        view: PropTypes.string,
        changeView: PropTypes.func,
        editedArticle: PropTypes.object
    };

    get renderCreateArticlePreview() {
        if(this.props.view === 'create') {
            return (
                <Fragment>
                    <Typography variant="button" className={cn('admin-main__create-block')}>
                        <span className={cn('admin-main__create-btn')}>Создать статью</span>
                        <Fab size="small" color="secondary" aria-label="Add">
                            <AddIcon onClick={this.onClickChangeView}/>
                        </Fab>
                    </Typography>
                </Fragment>
            )
        }
    }

    onClickChangeView = () => {
        let view = 'create';

        if(this.props.view === 'create') {
            view = 'editor';
        }

        this.props.changeView(view)
    };


    get renderEditor() {
        if(this.props.view === 'editor') {
            return (
                <Fragment>
                    <div className={cn('admin-main__close-btn')}>
                        <Button
                            variant="contained"
                            href="#contained-buttons"
                            onClick={this.onClickChangeView}
                        >
                            Закрыть редактор
                        </Button>
                    </div>
                    <AdminEditor editedArticle={this.props.editedArticle} />
                </Fragment>
            )
        }
    }

    render() {
        return (
            <div className={cn('admin-main')}>
                <Typography component="h2" variant="headline" gutterBottom>
                    Административная панель
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Для редактирования статьи, выберите ее в выпадающем списке слева.
                </Typography>
                {this.renderCreateArticlePreview}
                {this.renderEditor}
            </div>
        )
    }
}

export default AdminMain;
import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Head from '../head';


import classnames from 'classnames/bind';
import style from './style.css';
import Header from "../header";
import AdminSidebar from "./admin-sidebar";
import AdminMain from "./admin-main";
import Footer from "../footer";
import { FirebaseContext } from '../firebase';

const cn = classnames.bind(style);

class AdminResourse extends PureComponent {

    constructor(props) {
        super(props);

        this.editArticleData = {};
    }

    static propTypes = {
        content: PropTypes.object
    };

    static contextType = FirebaseContext;

    state = {
        article: null,
        sidebarContent: this.props.content,
        modalOpen: false,
        view: 'create'
    };

    onClickShowEditor = () => {
        let view = 'editor';
        if(this.state.view === view) {
            view = 'create';
        }

        this.setState({ view })
    };

    onClickCloseModal = (e) => {
        const type = e.currentTarget.dataset.type;

        if(type === 'yes') {
            this.deleteArticle();
        }
        this.editArticleData = {};
        this.setState({ modalOpen: false });
    };

    editArticle = async (params) => {
        if(params && params.action) {
            const targetIndex = this.state.sidebarContent[params.type] && this.state.sidebarContent[params.type].findIndex((item) => {
                return item.key === params.key;
            });
            const sidebarContent = this.state.sidebarContent[params.type];
            this.editArticleData = {
              index: targetIndex,
              type: params.type,
              key: params.key
            };

            if(sidebarContent) {
                switch(params.action) {
                    case 'delete': {
                        this.setState({ modalOpen: true });
                        break;
                    }
                    case 'edit': {
                        this.onClickShowEditor();
                    }
                }
            }
        }
    };

    saveArticleToDB = (type, content) => {
        const test = {
                "postId": 1,
                "id": 1,
                "name": "id labore ex et quam laborum",
                "email": "Eliseo@gardner.biz",
                "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
            };
        return this.context.firebase.database.writeContentToDB(`/${type}`, test)
    };

    deleteArticle = () => {
        const type = this.editArticleData.type;
        const index = this.editArticleData.index;
        const key = this.editArticleData.key;

        if(type && index >= 0) {
            const content = this.state.sidebarContent[type];
            content.splice(index, 1);

            this.setState({
                sidebarContent: {
                    ...this.state.sidebarContent,
                    [type]: content
                }
            });

            this.context.firebase.database.removeContentFromDB(`/${type}`, key)
        }
    };

    render() {
        return (
            <Fragment>
                <Head/>
                <Grid
                    container
                    spacing={16}
                    className={cn('admin__container')}
                >
                    <Grid item xs={12}>
                        <Header/>
                    </Grid>
                    <Grid container className={cn('admin__container-inner')}>
                        <Grid item xs={3}>
                            <AdminSidebar
                                content={this.state.sidebarContent}
                                articleHandler={this.editArticle}
                            />
                        </Grid>
                        <Grid item xs={9}>
                            <AdminMain
                                view={this.state.view}
                                changeView={this.onClickShowEditor}
                            />
                        </Grid>
                    </Grid>
                    <Grid item xs={12} className={cn('admin__footer')}>
                        <Footer/>
                    </Grid>
                </Grid>
                <Dialog
                    open={this.state.modalOpen}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Удалить статью?"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Внимание, эта операция приведет к удалению статьи без возможности восстановления!
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button data-type="no" onClick={this.onClickCloseModal} color="primary">
                            Нет
                        </Button>
                        <Button data-type="yes" onClick={this.onClickCloseModal} color="primary" autoFocus>
                            Да
                        </Button>
                    </DialogActions>
                </Dialog>
            </Fragment>
        )
    }
}

export default AdminResourse;
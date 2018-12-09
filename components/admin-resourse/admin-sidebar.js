import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import DeleteIcon from '@material-ui/icons/Delete';

import classnames from 'classnames/bind';
import style from './style.css';

const cn = classnames.bind(style);

class AdminSidebar extends PureComponent {

    static propTypes = {
        content: PropTypes.object,
        articleHandler: PropTypes.func
    };

    constructor(props) {
        super(props);

        this.content = this.getFormattedContent();
    }

    getFormattedContent() {
        if(this.props.content) {
            return Object.entries(this.props.content);
        } else {
            return [];
        }
    }

    getCategoryHeading = (name) => {
        switch (name) {
            case 'projects':
                return 'Проекты';
            case 'articles':
                return 'Статьи';
            case 'galleries':
                return 'Галереи';
            default:
                return '';
        }
    };

    onClickArticle = (e) => {
        e.stopPropagation();

        if(this.props.articleHandler) {
            const target = e.currentTarget;
            const params = {
                type: target.dataset.type,
                id: target.dataset.id
            };

            if(e.target.classList.contains(`${cn('admin-sidebar__list-icon')}`) || e.target.closest(`.${cn('admin-sidebar__list-icon')}`)) {
                params.action = 'delete';
            } else {
                params.action = 'edit';
            }

            this.props.articleHandler(params)
        }
    };

    onClickDeleteIcon = (e) => {
        e.stopPropagation();

        if(this.props.articleHandler) {
            const parent = e.currentTarget.closest(`.${cn('admin-sidebar__list-item')}`);
            const type = parent.dataset.type;
            const id = parent.dataset.id;

            this.props.articleHandler({ id, type })
        }
    };

    render() {
        return (
            <Fragment>
                {Array.isArray(this.content) && this.content.length && this.content.map((block) => {
                    if(Array.isArray(block[1]) && block[1].length) {
                        return (
                            <Fragment key={block[0]}>
                                <ExpansionPanel>
                                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                        <Typography variant="h5">
                                            {this.getCategoryHeading(block[0])}
                                        </Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <List component='ul' className={cn('admin-sidebar__list')}>
                                            {block[1].map((article) => (
                                                <Fragment key={article.id}>
                                                    <ListItem
                                                        button
                                                        className={cn('admin-sidebar__list-item')}
                                                        data-type={block[0]}
                                                        data-id={article.id}
                                                        key={article.id}
                                                        onClick={this.onClickArticle}
                                                    >
                                                        <DeleteIcon className={cn('admin-sidebar__list-icon')} data-type='delete' />
                                                        <ListItemText primary={article.name} />
                                                    </ListItem>
                                                    <Divider />
                                                </Fragment>
                                            ))}
                                        </List>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                            </Fragment>
                        )
                    } else {
                        return null;
                    }
                })}
            </Fragment>
        )
    }
}

export default AdminSidebar;
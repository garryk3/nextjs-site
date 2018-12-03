import React from 'react';
import PropTypes from 'prop-types';

import AdminResourse from '../components/admin-resourse';

const Admin = (props) => <AdminResourse content={props.initialState} />;

Admin.propTypes = {
    initialState: PropTypes.object
};

export default Admin;

import React from 'react';
import PropTypes from 'prop-types';

const CustomersAction = ({ children }) => {
    return (
        <div>
            <div className="customers-actions">
                <div>{ children }</div>
            </div>
        </div>
    );
};

CustomersAction.propTypes = {
    children: PropTypes.node.isRequired,
};

export default CustomersAction;
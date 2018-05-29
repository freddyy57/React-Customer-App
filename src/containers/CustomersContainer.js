import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import AppFrame from '../components/AppFrame';
import CustomersList from '../components/CustomersList';
import CustomersAction from '../components/CustomersAction';
import { fetchCustomers } from './../actions/fetchCustomers';
import { getCostumers } from '../selectors/customers';

class CustomersContainer extends Component {

    componentDidMount() {
        if( this.props.customers.length === 0) {
           this.props.fetchCustomers();
        }
    }

    handleAddNew = () => {
        this.props.history.push('/customers/new');
    }

    renderBody = customers => (
        <div>
            <CustomersList 
                customers={customers} 
                urlPath={'customers/'}>
            </CustomersList>
            <CustomersAction>
              <button onClick={this.handleAddNew}>Nuevo Cliente</button>
            </CustomersAction>
        </div>
    )

    render() {
        return (
            <div>
                <AppFrame header={'Listado de clientes'}
                   body={this.renderBody(this.props.customers)}>
                </AppFrame>
            </div>
        );
    }
}

CustomersContainer.propTypes = {
    fetchCustomers: PropTypes.func.isRequired,
    customers: PropTypes.array.isRequired
};

CustomersContainer.defaultProps = {
     customers: []
};

const mapStateToProps = state => ({
    customers: getCostumers(state)
});

// const mapDispatchToProps = { fetchCustomers };

export default withRouter(connect(mapStateToProps, { fetchCustomers })(CustomersContainer));

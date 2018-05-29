import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import AppFrame from '../components/AppFrame';
import CustomersAction from '../components/CustomersAction';


class HomeContainer extends Component {

    handleOnClick = () => {
        console.log('handle on Click');
        this.props.history.push('/customers');
    }

    render() {
        return (
            <div>
                <AppFrame 
                   header='Home'
                   body={
                       <div>
                        Esta es la pantalla inicial
                        <CustomersAction>
                            <button onClick={this.handleOnClick}> Listado de Clientes</button>
                        </CustomersAction>
                       </div>
                   }>
                </AppFrame>
            </div>
        );
    }
}


export default withRouter(HomeContainer);
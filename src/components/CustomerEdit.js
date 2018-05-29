import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import {setPropsAsInitial} from '../helpers/setPropsAsInitial';
import CustomersAction from './CustomersAction';
import { Prompt } from 'react-router-dom';
import { CUSTOMER_EDIT,CUSTOMER_VIEW } from '../constants/permissions';
import { accessControl } from '../helpers/accessControl';

// const isRequired = value => (
//     !value && "Este campo es requerido"
// );

// normalize={onlyGrow}

const isNumber = value => (
    isNaN(Number(value)) && "El campo debe ser un número"
);

const validate = values => {
    const error = {};

    if(!values.name) {
        error.name ="El campo nombre es requerido";
    }

    if(!values.dni) {
        error.dni ="El campo dni es obligatorio";
    }

    return error;
}

const MyField = ({input, meta, type, label, name}) => (
    <div>
      <label htmlFor={name}>{label}</label>
      <input {...input} type={!type? "text": type}/>
       {
         meta.touched && meta.error && <span>{meta.error}</span>
       }
    </div>
);

const toNumber = value => value && Number(value);

// const onlyGrow = (value, previousValue, values) => value && previousValue && (value > previousValue ? value: previousValue);

const CustomerEdit = ({ name, dni, age, handleSubmit, submitting, onBack, pristine, submitSucceeded }) => {
    return (
        <div>
            <h2>Edición del Cliente</h2>
            <form onSubmit={handleSubmit}>
                    <Field 
                         name="name" 
                         component={MyField}
                         label="Nombre"></Field>
          
                    <Field 
                          name="dni" 
                          component={MyField}
                          label="DNI"></Field>
               
                    <Field name="age" 
                           component={MyField} 
                           type="number"
                           validate={isNumber}
                           label="Edad"
                           parse={toNumber}></Field>
                           

                    <CustomersAction>
                       <button type="submit" disabled={ pristine || submitting }>Aceptar</button>
                       <button type="button" disabled={ submitting } onClick={onBack}>Cancelar</button>
                    </CustomersAction>
                    <Prompt 
                        when={ !pristine && !submitSucceeded}
                        message="Se perderán los datos si contunúa...">
                    </Prompt>    
            </form>
        </div>
    );
};

CustomerEdit.propTypes = {
    name: PropTypes.string,
    dni: PropTypes.string,
    age: PropTypes.number,
    onBack: PropTypes.func.isRequired
};

const CustomerEditForm = reduxForm({ form:'CustomerEdit', validate})(CustomerEdit);
export default  accessControl([CUSTOMER_EDIT]) (setPropsAsInitial(CustomerEditForm));
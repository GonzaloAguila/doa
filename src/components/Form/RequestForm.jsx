import React, { useState } from 'react';
import styles from './style.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import emailjs from 'emailjs-com';
import data from '../../utils/email';

function RequestForm() {
    const { USERID, TEMPLATE, SERVICE } = data;
    return (
        <div className={styles.container}>
            <div className={styles.toprow}>Contactenos</div>
            <Formik
                initialValues={{ email: '', name: '', phone: '', textarea: '' }}
                validate={(values) => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Requerido';
                    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                        errors.email = 'Formato de email incorrecto.';
                    } else if (!values.name) {
                        errors.name = 'Requerido';
                    } else if (!values.phone) {
                        errors.phone = 'Requerido';
                    } else if (!values.textarea) {
                        errors.textarea = 'Requerido';
                    }
                    return errors;
                }}
                onSubmit={async (values, { setSubmitting, resetForm }) => {
                    setSubmitting(true);
                    try {
                        await emailjs.send(SERVICE,TEMPLATE,values,USERID);
                        alert('Mensaje enviado! Nos pondremos en contacto a la brevedad.')
                    } catch (error) {
                        console.log('Error:',error);
                        alert('Ocurrio un error. Intente nuevamente mas tarde!')
                    } finally {
                      setSubmitting(false)
                      resetForm({values: ''})
                    }
                }}
            >
                {({ isSubmitting }) => {
                    return (
                        <Form className={styles.form}>
                            <Field placeholder='Email' className={styles.input} type='email' name='email' />
                            <ErrorMessage className={styles.error} name='email' component='div' />
                            <Field placeholder='Nombre' className={styles.input} type='name' name='name' />
                            <ErrorMessage className={styles.error} name='name' component='div' />
                            <Field placeholder='Telefono' className={styles.input} type='phone' name='phone' />
                            <ErrorMessage className={styles.error} name='phone' component='div' />
                            <Field className={styles.textarea} as='textarea' type='textarea' name='textarea' />
                            <ErrorMessage className={styles.error} name='textarea' component='div' />
                            <button type='submit' disabled={isSubmitting} style={{ color: isSubmitting ? 'grey' : 'white' }}>
                                Enviar
                            </button>
                        </Form>
                    );
                }}
            </Formik>
        </div>
    );
}

export default RequestForm;

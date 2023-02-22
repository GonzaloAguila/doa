import React, { useEffect, useState } from 'react';
import styles from './style.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useTranslation } from 'react-i18next';
import emailjs from 'emailjs-com';
import data from '../../utils/email';
import FormBG1 from '../../assets/images/form-1.png';
import FormBG2 from '../../assets/images/form-2.png';
import FormBG3 from '../../assets/images/form-3.png';
import FormBG4 from '../../assets/images/form-4.png';

function RequestForm() {
    const { USERID, TEMPLATE, SERVICE } = data;
    const [t, i18n] = useTranslation('form');
    const [selectedIndex, setSelectedIndex] = useState(Math.floor(Math.random() * 4));
    const BACKGROUND_IMAGES_ARRAY = [
       FormBG1,
       FormBG2,
       FormBG3,
       FormBG4,
    ];

    useEffect(() => {
        setSelectedIndex(Math.floor(Math.random() * 4));
    }, []);

    return (
        <div className={styles.container}>
            <div id='form' className={styles.toprow}>
                {t('form.title')}
            </div>
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
                        await emailjs.send(SERVICE, TEMPLATE, values, USERID);
                        alert('Mensaje enviado! Nos pondremos en contacto a la brevedad.');
                    } catch (error) {
                        console.log('Error:', error);
                        alert('Ocurrio un error. Intente nuevamente mas tarde!');
                    } finally {
                        setSubmitting(false);
                        resetForm({ values: '' });
                    }
                }}
            >
                {({ isSubmitting }) => {
                    return (
                        <Form style={{ backgroundImage: `url(${BACKGROUND_IMAGES_ARRAY[selectedIndex]})` }} className={styles.form}>
                            <Field placeholder='Email' className={styles.input} type='email' name='email' />
                            <ErrorMessage className={styles.error} name='email' component='div' />
                            <Field placeholder={t('form.name')} className={styles.input} type='name' name='name' />
                            <ErrorMessage className={styles.error} name='name' component='div' />
                            <Field placeholder={t('form.phone')} className={styles.input} type='phone' name='phone' />
                            <ErrorMessage className={styles.error} name='phone' component='div' />
                            <Field className={styles.textarea} as='textarea' type='textarea' name='textarea' />
                            <ErrorMessage className={styles.error} name='textarea' component='div' />
                            <button type='submit' disabled={isSubmitting} style={{ color: isSubmitting ? 'grey' : 'white' }}>
                                {t('form.btn')}
                            </button>
                        </Form>
                    );
                }}
            </Formik>
        </div>
    );
}

export default RequestForm;

import{ init } from 'emailjs-com';
init("user_YGZGtovhsKchrzZmQU5Df");

export default {
    USERID: process.env.REACT_APP_UserID,
    TEMPLATE: process.env.REACT_APP_template,
    SERVICE: process.env.REACT_APP_serviceId
}
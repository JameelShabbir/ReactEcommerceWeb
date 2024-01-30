import * as Yup from 'yup';

export const vSchema = Yup.object({
    cholderName: Yup.string().min(2).required('Credit card holder name is required'),
    cNumber: Yup.string().matches(/^\d{16}$/, 'Invalid credit card number').required('Credit card number is required'),
    expDate: Yup.string().matches(/^(0[1-9]|1[0-2])\/\d{2}$/, 'Invalid expiry date').required('Expiry date is required'),
    cvv: Yup.string().matches(/^\d{3}$/, 'CVV must be three digits').required('Security code is required'),
});
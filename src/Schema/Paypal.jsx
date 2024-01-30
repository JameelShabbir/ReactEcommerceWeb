import * as Yup from "yup";

export const paypal = Yup.object({
    email: Yup.string().email().required('Please enter a valid email address'),
    name: Yup.string().min(2).required('Your name is required'),
    extraInfo1: Yup.string().required('extra information about your shopping'),
})
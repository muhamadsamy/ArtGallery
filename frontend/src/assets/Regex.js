export const validEmail = new RegExp(/^[A-z][A-z]{2,}[0-9]*@(gmail|yahoo)(.com|.eg|.edu)$/ );
export const validPassword = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/);
export const validAddress = new RegExp(/^(\d{1,}) [a-zA-Z0-9\s]+(,)? [a-zA-Z]+(,)? [A-Z]{2} [0-9]{5,6}$/);
export const validName = new RegExp(/^[A-z]{3,} ([A-z]{3,})$/);
export const validPhone = new RegExp(/^01[0125][0-9]{8}$/);

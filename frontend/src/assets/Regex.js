export const validEmail = new RegExp(/^[A-z][A-z]{2,}[0-9]*@(gmail|yahoo)(.com|.eg|.edu)$/ );
export const validPassword = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/);
export const validUserName = new RegExp(/^(?=[a-zA-Z]{8,20}$)/);
export const validName = new RegExp(/^[A-z]{3,} ([A-z]{3,})$/);
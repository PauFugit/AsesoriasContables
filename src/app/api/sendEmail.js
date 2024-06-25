import emailjs from '@emailjs/browser';

emailjs.init('sBYyEbz7cReJY4kc8'); 

export const sendEmail = (serviceId, templateId, templateParams) => {
  return emailjs.send(serviceId, templateId, templateParams);
};
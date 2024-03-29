import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FieldLabel, Form } from './contacts-form.styled';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { useContacts } from 'hooks/useContacts';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const contactSchema = Yup.object().shape({
  userName: Yup.string()
    .min(2, 'Must be a word of at least 2 characters')
    .required('Required'),
  userNumber: Yup.string()
    .matches(
      /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/,
      'Must be a number format of 123-456-7890'
    )
    .required('Required'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const { contacts } = useContacts();

  return (
    <>
      <Formik
        initialValues={{
          userName: '',
          userNumber: '',
        }}
        validationSchema={contactSchema}
        onSubmit={({ userName, userNumber }, actions) => {
          const existContact = contacts.find(
            contact => contact.name.toLowerCase() === userName.toLowerCase()
          );
          if (existContact) {
            alert(`${userName} is already in contacts`);
          } else {
            dispatch(addContact({ name: userName, number: userNumber }));
            actions.resetForm();
          }
        }}
      >
        <Form>
          <FieldLabel htmlFor="userName">
            Name
            <Field id="userName" type="text" name="userName" />
            <ErrorMessage name="userName" />
          </FieldLabel>

          <FieldLabel htmlFor="userNumber">
            Number
            <Field id="userNumber" name="userNumber" />
            <ErrorMessage name="userNumber" />
          </FieldLabel>
          <Button
            type="submit"
            variant="contained"
            endIcon={<AddIcon />}
            style={{ width: '169px', height: '30px' }}
            color="success"
          >
            Add contact
          </Button>
        </Form>
      </Formik>
    </>
  );
};

import css from './ContactForm.module.css';
import { addContacts } from 'redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleChange = event => {
    event.preventDefault();
    const form = event.target;
    const contValue = {
      name: form.elements.name.value,
      number: form.elements.number.value,
    };
    contacts.some(contact => contact === contValue.name)
      ? alert(`${contValue.name} is already in contacts`)
      : dispatch(addContact(contValue));
    form.reset();
  };

  return (
    <>
      <form className={css.contactForm} onSubmit={handleChange}>
        <label className={css.contactLabel}>
          Name
          <input
            className={css.contactInput}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={css.contactLabel}>
          Phone number
          <input
            className={css.contactInput}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className={css.contactSubmitBtn} type="submit">
          Add contact
        </button>
      </form>
    </>
  );
};

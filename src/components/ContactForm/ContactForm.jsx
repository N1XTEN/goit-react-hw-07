import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './ContactForm.module.css';

const ContactsForm = () => {
  const [form, setForm] = useState({ name: '', number: '' });
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => setForm({ ...form, [name]: value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = form;
    if (!name.trim() || !number.trim()) {
      toast.error("Name and phone number are required.");
      return;
    }
    dispatch(addContact({ name, number }));
    setForm({ name: '', number: '' });
  };

  return (
    <div>
      <ToastContainer />
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          className={css.input}
        />
        <input
          type="text"
          name="number"
          value={form.number}
          onChange={handleChange}
          placeholder="Phone Number"
          className={css.input}
        />
        <button type="submit" className={css.btn}>Add Contact</button>
      </form>
    </div>
  );
};

export default ContactsForm;

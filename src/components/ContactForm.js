import React from 'react';
import Modal from 'react-modal';

function ContactForm({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} contentLabel="Book a Visit">
      <h2>Book a Visit</h2>
      <form>
        <input type="text" placeholder="Parent's Name" />
        <input type="email" placeholder="Email Address" />
        <input type="text" placeholder="Child's Age" />
        <textarea placeholder="Preferred visit date and time"></textarea>
        <button type="submit">Send</button>
      </form>
      <button onClick={onClose}>Close</button>
    </Modal>
  );
}

export default ContactForm;

import React from "react";
import Modal from "react-modal";

function JoinForm({ isOpen, onClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Join Our Hive"
    >
      <h2>Join Our Hive</h2>
      <form>
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Phone Number" />
        <textarea placeholder="Age?"></textarea>
        <button type="submit">Submit</button>
      </form>
      <button onClick={onClose}>Close</button>
    </Modal>
  );
}

export default JoinForm;

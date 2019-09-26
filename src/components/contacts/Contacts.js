import React, { useContext, Fragment } from "react";
import ContactContext from "../../context/contact/contactContext";

import ContactTable from "./ContactTable";

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts, filtered } = contactContext;

  if (contacts.length === 0) {
    return <h4>Please add a Contact</h4>;
  }

  return (
    <Fragment>
      {filtered !== null
        ? filtered.map(contact => <ContactTable contact={contact} />)
        : contacts.map(contact => <ContactTable contact={contact} />)}
    </Fragment>
  );
};
export default Contacts;

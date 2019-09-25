import React, { useContext } from "react";
import ContactContext from "../../context/contact/contactContext";

const ContactFilter = () => {
  const contactContext = useContext(ContactContext); //app level state

  const { filterContacts, clearFilter } = contactContext;

  const onChange = event => {
    let inputFiltering = event.target.value;
    if (inputFiltering !== "") {
      //if there is filtering contact
      filterContacts(inputFiltering);
    } else {
      clearFilter();
    }
  };

  return (
    <form className="my-2">
      <input type="text" placeholder="Filter Contacts..." onChange={onChange} />
    </form>
  );
};

export default ContactFilter;

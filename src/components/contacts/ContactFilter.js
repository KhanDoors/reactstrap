import React, { useContext } from "react";
import ContactContext from "../../context/contact/contactContext";
import { Link } from "react-router-dom";
import ContactPagination from "./ContactPagination";

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
    <div className="container-filter">
      <form className="my-2">
        <input
          type="text"
          placeholder="Filter Contacts..."
          onChange={onChange}
        />
      </form>
      <div>
        <button type="button" className="btn btn-sm btn-outline-primary m-2">
          <Link to="/ContactForm">Add User</Link>
        </button>
      </div>
      <div>
        <ContactPagination />
      </div>
    </div>
  );
};

export default ContactFilter;

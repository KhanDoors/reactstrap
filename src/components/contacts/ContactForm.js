import React, { useState, useContext, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";

const ContactForm = () => {
  const contactContext = useContext(ContactContext);

  const { addContact, updateContact, current } = contactContext;

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: "",
        lastname: "",
        systemrole: "",
        organization: ""
      });
    }
  }, [contactContext, current]);

  const [contact, setContact] = useState({
    name: "",
    lastname: "",
    systemrole: "",
    organization: ""
  });

  const { name, lastname, systemrole, organization } = contact;

  const onChange = e =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (current === null) {
      addContact(contact);
    } else {
      updateContact(contact);
    }
    setContact({
      name: "",
      lastname: "",
      systemrole: "",
      organization: "personal"
    });
  };

  return (
    // <form onSubmit={onSubmit}>
    //   <h2 className="text-primary mx-5">
    //     {current ? "Edit Contact" : "Add User"}
    //   </h2>
    //   <input
    //     type="text"
    //     placeholder="Name"
    //     name="name"
    //     value={name}
    //     onChange={onChange}
    //     className="mx-1"
    //   />
    //   <input
    //     type="email"
    //     placeholder="Email"
    //     name="email"
    //     value={email}
    //     onChange={onChange}
    //     className="mx-1"
    //   />
    //   <input
    //     type="text"
    //     placeholder="Phone"
    //     name="phone"
    //     value={phone}
    //     onChange={onChange}
    //     className="mx-1"
    //   />

    //   <div className="mx-5">
    //     <input
    //       type="submit"
    //       value={current ? "Update Contact" : "Add User"}
    //       className="btn btn-primary mx-5"
    //     />
    //   </div>
    //   {current && (
    //     <div className=" mx-5">
    //       <button className="btn btn-light btn-block mx-5" onClick={clearAll}>
    //         Clear
    //       </button>
    //     </div>
    //   )}
    // </form>
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <h2 className="text-primary mx-5">Add User </h2>
        <input
          type="text"
          placeholder="FirstName"
          name="name"
          value={name}
          onChange={onChange}
          className="mx-1"
        />
        <input
          type="text"
          placeholder="LastName"
          name="lastname"
          value={lastname}
          onChange={onChange}
          className="mx-1"
        />
        <input
          type="text"
          placeholder="System Role"
          name="systemrole"
          value={systemrole}
          onChange={onChange}
          className="mx-1"
        />
        <input
          type="text"
          placeholder="Organization"
          name="organization"
          value={organization}
          onChange={onChange}
          className="mx-1"
        />
        <div>
          <input type="submit" value="Submit" className="btn btn-primary" />
        </div>
      </div>
    </form>
  );
};

export default ContactForm;

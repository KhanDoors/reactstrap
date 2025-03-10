import React, { useContext } from "react";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledButtonDropdown
} from "reactstrap";
import ContactContext from "../../context/contact/contactContext";

const ContactTable = ({ contact }) => {
  const contactContext = useContext(ContactContext);

  const { deleteContact } = contactContext;

  const { id, firstname, lastname, systemrole, organization } = contact;

  const onDelete = () => {
    deleteContact(id);
  };

  return (
    <tr>
      <th scope="row">{id}</th>
      <td>{firstname}</td>
      <td>{lastname}</td>
      <td>{systemrole}</td>
      <td>{organization}</td>
      <UncontrolledButtonDropdown
        className="dropdown m-2"
        data-display="static"
      >
        <DropdownToggle caret>Action</DropdownToggle>
        <DropdownMenu right>
          <DropdownItem>Disable</DropdownItem>
          <DropdownItem>Update</DropdownItem>
          <DropdownItem onClick={onDelete}>Delete</DropdownItem>
        </DropdownMenu>
      </UncontrolledButtonDropdown>
    </tr>
  );
};

export default ContactTable;

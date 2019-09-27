import React from "react";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledButtonDropdown
} from "reactstrap";

const ContactTable = ({ contact }) => {
  const { id, firstname, lastname, systemrole, organization } = contact;

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
          <DropdownItem>Delete</DropdownItem>
        </DropdownMenu>
      </UncontrolledButtonDropdown>
    </tr>
  );
};

export default ContactTable;

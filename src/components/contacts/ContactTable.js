import React from "react";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledButtonDropdown
} from "reactstrap";

const ContactTable = ({ contact }) => {
  const { firstname, lastname, systemrole, organization } = contact;

  return (
    <table className=" table ">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">System Role</th>
          <th scope="col">Organization</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>{firstname}</td>
          <td>{lastname}</td>
          <td>{systemrole}</td>
          <td>{organization}</td>
          <UncontrolledButtonDropdown className=" dropdown m-1">
            <DropdownToggle caret>Action</DropdownToggle>
            <DropdownMenu right>
              <DropdownItem header>Trigger</DropdownItem>
              <DropdownItem disabled>Feedback</DropdownItem>
              <DropdownItem>Rules</DropdownItem>
            </DropdownMenu>
          </UncontrolledButtonDropdown>
        </tr>
      </tbody>
    </table>
  );
};

export default ContactTable;

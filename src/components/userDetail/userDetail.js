import React  from "react";
import PropTypes from 'prop-types';
import "../../App.css";

const UserDetail = (props) => {
  const { name, email, phone } = props;
  return (
    <>
      <div className="box-container">
        <div className="box">
          <b >Name: </b>
          <a data-testid="name">{name}</a>
          <br />
          <b>Email: </b>
          <a href={`mailto: ${email}`} data-testid="email">{email}</a>
          <br />
          <b>Telephone: </b>
          <a href={`tel:${phone}`} data-testid="phone"> {phone} </a>
          <br />
        </div>
      </div>
    </>
  );
};

export default UserDetail

UserDetail.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string
};

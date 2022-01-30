import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  Button,
  ListGroup,
  ListGroupItem,
  Progress
} from "shards-react";

const UserDetails = ({ userDetails }) => (
  <Card small className="mb-4 pt-1">
    <CardHeader className="border-bottom text-center">
      
      <h4 className="mb-0">{userDetails.nama}</h4>
      <span className="text-muted d-block mb-1">{userDetails.jenisKelamin}</span>
      
    </CardHeader>
    <ListGroup flush>
      <ListGroupItem className="p-0 ml-3 mb-3 mt-3">
        <strong className="text-muted d-block mb-1">
          {userDetails.tglLahirTitle}
        </strong>
        <span>{userDetails.tglLahirValue}</span>
      </ListGroupItem>
      <ListGroupItem className="p-0 ml-3 mb-3">
        <strong className="text-muted d-block mb-1">
          {userDetails.alamatTitle}
        </strong>
        <span>{userDetails.alamatValue}</span>
      </ListGroupItem>
      <ListGroupItem className="p-0 ml-3 mb-3 ">
        <strong className="text-muted d-block mb-1">
          {userDetails.teleponTitle}
        </strong>
        <span>{userDetails.teleponValue}</span>
      </ListGroupItem>
    </ListGroup>
  </Card>
);

UserDetails.propTypes = {
  /**
   * The user details object.
   */
  userDetails: PropTypes.object
};

UserDetails.defaultProps = {
  userDetails: {
    nama: "Rudi Habibi",
    jenisKelamin: "Laki-laki",
    tglLahirTitle:"Tanggal Lahir",
    tglLahirValue:"23 Februari 2021",
    alamatTitle: "Alamat",
    alamatValue:"Ds. Dukun No.30 ",
    teleponTitle:"Nomor Telepon",
    teleponValue:"088738847172"
    
  }
};

export default UserDetails;

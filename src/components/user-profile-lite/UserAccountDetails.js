import React from "react";
import PropTypes from "prop-types";
import Link from "react-router-dom/Link";

import RangeDatePicker from "../common/RangeDatePicker";
import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormGroup,
  FormInput,
  FormSelect,
  FormTextarea,
  Button
} from "shards-react";

const UserAccountDetails = ({ title }) => (
  <Card small className="mb-4">
    <CardHeader className="border-bottom">
      <h6 className="m-0">{title}</h6>
    </CardHeader>
    <ListGroup flush>
      <ListGroupItem className="p-3">
        <Row>
          <Col>
            <Form>
              <Row form>
                {/* First Name */}
                <Col md="6" className="form-group">
                  <label htmlFor="feFirstName">Nama Awal</label>
                  <FormInput
                    id="namaAwal"
                    placeholder=""
                    value=""
                    onChange={() => {}}
                  />
                </Col>
                {/* Last Name */}
                <Col md="6" className="form-group">
                  <label htmlFor="feLastName">Nama Akhir</label>
                  <FormInput
                    id="namaAkhir"
                    placeholder=""
                    value=""
                    onChange={() => {}}
                  />
                </Col>
              </Row>
                {/* Email */}
                <FormGroup>
                  <label htmlFor="fePassword">Tanggal Lahir</label>
                  <FormInput
                    id=""
                    placeholder=""
                    value=""
                    onChange={() => {}}
                  />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="feInputState">Jenis Kelamin</label>
                  <FormSelect id="jenisKelamin">
                    <option>Laki-laki</option>
                    <option>Perempuan</option>
                  </FormSelect>
                </FormGroup>
                {/* Password */}
                <FormGroup>
                  <label htmlFor="fePassword">No. Telp</label>
                  <FormInput
                    id="telepon"
                    placeholder=""
                    value=""
                    onChange={() => {}}
                  />
                </FormGroup>
              <FormGroup>
                <label htmlFor="feAddress">Alamat</label>
                <FormInput
                  id="alamat"
                  placeholder=""
                  value=""
                  onChange={() => {}}
                />
              </FormGroup>
              <Link to="/Sesuai">
                <Button className="col-md-3 " theme="accent">Mulai Test</Button>
              </Link>
              
            </Form>
          </Col>
        </Row>
      </ListGroupItem>
    </ListGroup>
  </Card>
);

UserAccountDetails.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

UserAccountDetails.defaultProps = {
  title: "Account Details"
};

export default UserAccountDetails;

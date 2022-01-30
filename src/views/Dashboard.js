import React from "react";

import gambar from "../images/avatars/pict.png";
import Link from "react-router-dom/Link";

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


function Dashboard () {
    

    return(
        <Card className="m-0">
        <br></br>
        <br></br>
        <Col lg="12" sm="12" className="mb-1">
            <Card className="card-post card-post--aside card-post--1">
                <div className="ml-4"
                >
                    <img src={gambar} alt="" srcSet=""/>
                </div>
                <div className="col lg-6 text-center pt-5">
                    <h1 className="pt-5">
                        Tallents Mapping
                    </h1>
                    <h4 className="pt-2">Temukan bakat yang menjadi kekuatan anda disini</h4>
                    
                </div>
            </Card>
            <Card>
            </Card>
        </Col>
        <div className="row">
        <Card small className="col-12">
    <CardHeader className="border-bottom">
      <h6 className="m-0">Test</h6>
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

        </div>
    </Card>
    );
}
    

export default Dashboard;

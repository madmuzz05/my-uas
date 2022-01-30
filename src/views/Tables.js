import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";
import UserDetails from "../components/user-profile-lite/UserDetails";
import PageTitle from "../components/common/PageTitle";

function Tables  () {
  return(
    <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Add New Post" subtitle="Blog Posts" className="text-sm-left" />
    </Row>
    <UserDetails />
    {/* Default Light Table */}
    <Row>
    
      <Col>
        <Card small className="mb-4">
          <CardHeader className="border-bottom">
            <h6 className="m-0">Kelebihan</h6>
          </CardHeader>
          <CardBody className="p-0 pb-3">
            <table className="table mb-0">
              <thead className="bg-light">
                <tr>
                  <th scope="col" className="border-0">
                    No
                  </th>
                  <th scope="col" className="border-0">
                    Skill
                  </th>
                  <th scope="col" className="border-0">
                    Deskripsi
                  </th>

                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Evaluator</td>
                  <td>menimbang atau mempelajari, dalam rangka memutuskan sesuatu terkait nilai, mutu, kepentingan atau kondisi</td>
                  
                </tr>
                
              </tbody>
            </table>
          </CardBody>
        </Card>
      </Col>
    </Row>

    {/* Default Dark Table */}
    <Row>
      <Col>
        <Card small className="mb-4 overflow-hidden">
          <CardHeader className="bg-dark">
            <h6 className="m-0 text-white">Kelemahan</h6>
          </CardHeader>
          <CardBody className="bg-dark p-0 pb-3">
            <table className="table table-dark mb-0">
              <thead className="thead-dark">
                <tr>
                  <th scope="col" className="border-0">
                    No
                  </th>
                  <th scope="col" className="border-0">
                    Skill
                  </th>
                  <th scope="col" className="border-0">
                    Deskripsi
                  </th>
                  
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Evaluator</td>
                  <td>menimbang atau mempelajari, dalam rangka memutuskan sesuatu terkait nilai, mutu, kepentingan atau kondisi</td>
                  
                </tr>
                
              </tbody>
            </table>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
  );
}


export default Tables;

import React from "react";
import PropTypes from "prop-types";
import Link from "react-router-dom/Link";
import { useQuery } from 'urql';
import { Container } from "shards-react";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  ListGroup,
  ListGroupItem,
  InputGroup,
  InputGroupAddon,
  FormCheckbox,
  FormInput,
  FormGroup,
} from "shards-react";

const Pernyataan = `
{
  pernyataan {
    id
    body
    kategori
  }
}
`

const Sesuai = () =>  {
  const [result] = useQuery({
    query: Pernyataan,
  });
  const {data, fetching, error } = result
  console.log(data);
  return(
    <Container >
    <br></br>
    <br></br>
        <Card  className="mb-12">
        <CardHeader className="border-bottom " >
          <h6 className="text-center">Pilihlah Pernyataan Yang SESUAI Dengan Diri Anda</h6>
        </CardHeader>
        <CardBody className="p-10">
          <ListGroup flush>
            <ListGroupItem className="px-0 pb-0">
              
            <FormCheckbox className="mb-1" value="dasdl;j;" theme="">
                iklhasdlk
              </FormCheckbox>
            </ListGroupItem>
            <br></br>
            <Link to="/TidakSesuai">
            <Button className="mb-2 mr-1" theme="success">Selanjutnya</Button>
            </Link>
            
            
            
    
          </ListGroup>
        </CardBody>
      </Card>
    <br></br>
    <br></br>
  </Container>
    
  );
}

  

export default Sesuai;

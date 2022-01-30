import React from "react";
import PropTypes from "prop-types";
import Link from "react-router-dom/Link";
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

const TidakSesuai = ({ title }) => (
  <Container>
    <br></br>
    <br></br>
    <Card  className="mb-12">
    <CardHeader className="border-bottom">
      <h6 className="text-center">Pilihlah Pernyataan Yang Tidak SESUAI Dengan Diri Anda</h6>
    </CardHeader>
    <CardBody className="p-10">
      <ListGroup flush>
        <ListGroupItem className="px-0 pb-0">
          
          <FormCheckbox className="mb-1" value="uncategorized" theme="">
            Uncategorized djbka ds dfdsfhjkssfs dsfsdfsfd dsfsfsdfsd dsfsdfsds dsfsddfsdfds  sdfsdf fdsfsdfsdf dsf dsfsdfsdfs fdsdsfsdsdfsdfsdsdfds sf sdf sdffsd fsdfsd
          </FormCheckbox>
          <FormCheckbox className="mb-1" value="design" >
            Design
          </FormCheckbox>
          <FormCheckbox className="mb-1" value="development">
            Development
          </FormCheckbox>
          <FormCheckbox className="mb-1" value="writing">
            Writing
          </FormCheckbox>
          <FormCheckbox className="mb-1" value="books">
            Books
          </FormCheckbox>
          <FormCheckbox className="mb-1" value="books">
            Books
          </FormCheckbox>
          <FormCheckbox className="mb-1" value="books">
            Books
          </FormCheckbox>
          <FormCheckbox className="mb-1" value="books">
            Books
          </FormCheckbox>
          <FormCheckbox className="mb-1" value="books">
            Books
          </FormCheckbox>
        </ListGroupItem>
        <br></br>
        <Link to="/Tables">
          <Button className="mb-2 mr-1" theme="success">Selanjutnya</Button>
        </Link>
        
        
        

      </ListGroup>
    </CardBody>
  </Card>
  <br></br>
  <br></br>
  </Container>
  

  
);



TidakSesuai.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

TidakSesuai.defaultProps = {
  title: "Categories"
};

export default TidakSesuai;

import {Nav} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default function SurveyHeader(props) {
    return (
        <Nav as="ul">
        <Nav.Item as="li">
          <LinkContainer to="/surveys">
            <Nav.Link>Listar pesquisas</Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item as="li">
          <LinkContainer to="/create/surveys">
            <Nav.Link>Cadastrar</Nav.Link>
          </LinkContainer>
        </Nav.Item>
      </Nav>
    );
  }
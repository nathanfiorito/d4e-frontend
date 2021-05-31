import {Nav} from 'react-bootstrap'
import { propTypes } from 'react-bootstrap/esm/Image'

export default function SurveyHeader(props) {
    return (
        <Nav as="ul">
        <Nav.Item as="li">
          <Nav.Link href="/surveys">Listar pesquisas</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="/create/surveys">Cadastrar</Nav.Link>
        </Nav.Item>
      </Nav>
    );
  }
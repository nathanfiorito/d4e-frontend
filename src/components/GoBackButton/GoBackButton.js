import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap'

export default function GoBackButton() {
    const history = useHistory();
    return (
        <Button variant='success' onClick={() => history.goBack()}>Voltar</Button>
    );
  }
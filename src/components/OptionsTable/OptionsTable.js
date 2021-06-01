import { Table, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default function OptionsTable(props) {
    const survey = props.survey;
    return (
      <div>
          <Table>
                <thead>
                    <tr>
                        <td>Opção</td>
                        <td>Image URL</td>
                        <td>Votes</td>
                    </tr>
                </thead>
                <tbody>
                    {survey.voteOptions.map(option => {
                        return (
                            <LinkContainer to={`${survey.id}/vote-option/${option.id}`}>
                                <tr key={option.id}>
                                    <td>{option.voteOptionName}</td>
                                    <td>{option.image}</td>
                                    <td>{option.votes.length}</td>
                                </tr>
                            </LinkContainer>
                        )
                    })}
                </tbody>
            </Table>
      </div>
    );
  }
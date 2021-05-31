import { Table, Button } from 'react-bootstrap'
import {api, config} from '../../services/api';

export default function SurveyTable(props) {
    const surveys = props.surveys;

    function deleteSurvey(surveyId) {
        api.delete(`/surveys/${surveyId}`, 
            config
        ).then(res => {
            console.log(res)
        })
    }

    return (
      <div>
          <Table>
                <thead>
                    <tr>
                        <td>Title</td>
                        <td>Description</td>
                        <td>Status</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {surveys.map((survey) => {
                        return(
                        <tr key={survey.id}>
                            <td>{survey.title}</td>
                            <td>{survey.description}</td>
                            <td>{survey.status}</td>
                            <td>
                                <Button variant='success' size='sm' className='mx-1' href={`/surveys/${survey.id}`}>Open</Button>
                                <Button variant='warning' size='sm' className='mx-1'>Edit</Button>
                                <Button variant='danger' size='sm' className='mx-1' onClick={() => {deleteSurvey(survey.id)}}>Delete</Button>
                            </td>
                        </tr>
                        )
                    })}
                </tbody>
            </Table>
      </div>
    );
  }
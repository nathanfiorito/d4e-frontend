import { useEffect, useState } from "react";
import { Spinner, Table } from 'react-bootstrap';

export default function SurveyDetails(props) {
    const survey = props.survey;
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false)
    },[])

    return (
       <div>{loading ? <Spinner animation='border'/> : (
            <div key={survey.id}>
                <h1>{survey.title}</h1>
                <h1>{survey.description}</h1>
                <h1>{survey.status}</h1>
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
                                <tr key={option.id}>
                                    <td>{option.voteOptionName}</td>
                                    <td>{option.image}</td>
                                    <td>{option.votes.length}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
                
            </div>
            )}
        </div>
    );
  }
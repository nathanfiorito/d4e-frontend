import React, { useEffect, useState } from "react"
import {api, config} from "../../services/api"
import SurveyHeader from "../../components/SurveyHeader/SurveyHeader";
import SurveyDetails from '../../components/SurveyDetails/SurveyDetails';
import { useHistory, useParams } from "react-router";
import { Spinner, Button, Container } from 'react-bootstrap';
import GoBackButton from '../../components/GoBackButton/GoBackButton'

export default function Survey(){
    const [survey, setSurvey] = useState();
    const [loading, setLoading] = useState(false);
    const {surveyId} = useParams();
    const history = useHistory();

    useEffect(() => {
        setLoading(true)
        api.get(`/surveys/${surveyId}`, 
            config
        ).then(res => {
            setSurvey(res.data)
            setLoading(false)
        })
    }, [surveyId])

    return (
        <div>
            <SurveyHeader/>
                <GoBackButton/>
            <Container>
                <div>{loading ? <Spinner animation='border'/> : (<SurveyDetails survey={survey}/>)}</div>
            </Container>
        </div>
    )
}
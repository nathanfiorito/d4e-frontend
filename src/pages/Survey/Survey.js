import React, { useEffect, useState } from "react"
import {api, config} from "../../services/api"
import {} from 'react-bootstrap';
import SurveyHeader from "../../components/SurveyHeader/SurveyHeader";
import SurveyDetails from '../../components/SurveyDetails/SurveyDetails';
import { useParams } from "react-router";
import { Spinner } from 'react-bootstrap';

export default function Survey(){
    const [survey, setSurvey] = useState();
    const [loading, setLoading] = useState(false);
    const {id} = useParams();

    useEffect(() => {
        setLoading(true)
        api.get(`/surveys/${id}`, 
            config
        ).then(res => {
            setSurvey(res.data)
            setLoading(false)
        })
    }, [id])

    return (
        <>
            <SurveyHeader/>
            <div>{loading ? <Spinner animation='border'/> : (<SurveyDetails survey={survey}/>)}</div>
        </>
    )
}
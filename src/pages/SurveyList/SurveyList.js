import React, { useEffect, useState } from "react"
import {api, config} from "../../services/api"
import {Spinner} from 'react-bootstrap';
import SurveyTable from "../../components/SurveyTable/SurveyTable";
import SurveyHeader from "../../components/SurveyHeader/SurveyHeader";

export default function SurveyList(){
    const [surveys, setSurveys] = useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        setLoading(true);
        api.get('/surveys', 
            config
        ).then(res => {
            setLoading(false);
            setSurveys(res.data);
        })
    }, [])

    return (
        <div>
            <SurveyHeader/>
            <div>{loading ? <Spinner animation='border'/> : (<SurveyTable surveys={surveys}/>)}</div>
        </div>
    )
}
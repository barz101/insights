import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from "react-router-dom";
import insightService from '../services/insightService.js'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export function InsightPage() {
  const { id } = useParams();
  const history = useHistory();
  const [currInsight, setInsight] = useState(null);
 
  useEffect(() => {
    insightService.get(+id).then(insight => {
      setInsight(insight)
    })
      .catch(err => {
        console.log('error: ', err);

      })
  }, [])

  const onPressBack = () => {
   
        history.push(``)
    
}

  return (
    <div className="insight-page">
      {currInsight && 
      <div className="insight-content flex column align-center">
      <h1>פרטים על התובנה:</h1>
        <div className="insight-data">
          {currInsight.data}
          </div>
        <div className="insight-stats">{currInsight.statistics.publishedContributorsCount} משתתפים תומכים בתובנה זו ({currInsight.statistics.publishedContributionsPercent}% מהתשובות) </div>
        <div>
        <button onClick={onPressBack}>חזור לעמוד הראשי</button>
        <ArrowBackIcon fontSize="small"></ArrowBackIcon>
      </div>
      </div>
      }
    </div>
  )
}
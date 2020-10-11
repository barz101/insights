import React from 'react'
import { InsightPreview } from '../cmps/InsightPreview.jsx';

export function InsightList(props) {
    return (
        <div className="insights">
            {props.insights.map((insight, idx) =>
                <InsightPreview insight={insight} idx={idx+1} key={idx} onDelete={props.onDelete} onEdit={props.onEdit} />
            )}
        </div>
    )
}
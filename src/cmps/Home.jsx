import React, { Component } from 'react';
import { InsightList } from '../cmps/InsightList.jsx';
import insightService from '../services/insightService.js'
import lightbulbIcon from '../styles/assets/svgs/lightbulb.svg';
export default class Home extends Component {
    state = {
        process: null
    }

    componentDidMount() {
        this.loadProcess()
    }
    loadProcess = () => {
        insightService.query()
            .then(process => {
                this.setState({ process })
            })
            .catch(err => {
                console.log('error: ', err);
            })
    }
    onDelete = (insightId) => {
        insightService.remove(insightId).then(res => {
            this.loadProcess()
        })
            .catch(err => {
                console.log('error: ', err);
            })
    }
    onEdit = (insight) => {
        insightService.save(insight).then(savedInsight => {
            console.log('Insight succesfuly saved:', savedInsight);
        })
            .catch(err => {
                console.log('error: ', err);
            })
    }

    render() {
        const { process } = this.state
        return (
            <div className="home-page">
                <div className="process flex align-center">
                    <img alt="path" src={lightbulbIcon}></img>
                    {process && process.status === 'inProcess' && <div>התהליך עדיין פתוח לתשובות. המשתתפים יוכלו לראות את התובנות הסופיות רק לאחד שיאושרו על ידי אחד ממנהלי התהליך.</div>}
                </div>
                {process && <InsightList insights={process.insights} onDelete={this.onDelete} onEdit={this.onEdit}></InsightList>}
            </div>
        )
    }
}
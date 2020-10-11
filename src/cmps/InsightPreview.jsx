import React, { useRef, useState } from "react";
import ContentEditable from 'react-contenteditable'
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreIcon from '../styles/assets/svgs/more.svg';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { withStyles } from '@material-ui/core/styles';

export function InsightPreview(props) {
    const history = useHistory();
    const text = useRef(props.insight.data);
    const [editDisabled, setEditing] = useState(true);
    const [isMenuOpen, setMenu] = useState(null);

    const onPressSaved = () => {
        var editedInsight = props.insight
        editedInsight.data = text.current
        props.onEdit(editedInsight)
        setEditing(true)
    }
    const onPressDelete = () => {
        var insightId = props.insight._id
        props.onDelete(insightId);
        handleMenuClose();
    }

    const handleChange = evt => {
        text.current = evt.target.value;
    };
    const onPressEdit = () => {
        setEditing(false)
        handleMenuClose();
    }
    const onPressCancelled = () => {
        text.current = props.insight.data
        setEditing(true)
    }
    const handleMenuOpen = (event) => {
        setMenu(event.currentTarget)
    }
    const handleMenuClose = () => {
        setMenu(null)
    }
    const onPressInsight = () => {
        if (editDisabled) {
            history.push(`/insight/${props.insight._id}`)
        }
    }

    return (
        <div className="insight-card flex">
            <div className="insight-index" onClick={onPressInsight}>{props.idx}</div>
            <div className="insight-content">
                <ContentEditable className={editDisabled ? '' : 'edit-mode'} onClick={onPressInsight} html={text.current} disabled={editDisabled} onChange={handleChange} />
                {!editDisabled &&
                    <div className="edit-actions flex">
                        <button onClick={onPressSaved} className="save-button">שמירה</button>
                        <button onClick={onPressCancelled} className="cancel-button">ביטול</button></div>}
                {editDisabled && <div className="insight-stats">{props.insight.statistics.publishedContributorsCount} משתתפים תומכים בתובנה זו ({props.insight.statistics.publishedContributionsPercent}% מהתשובות) </div>}
            </div>
            <StyledButton className="more-button" aria-controls="simple-menu" aria-haspopup="true" onClick={handleMenuOpen} >
                <img className="more-icon" alt="path" src={MoreIcon}></img>
            </StyledButton>
            <Menu
                id="simple-menu"
                anchorEl={isMenuOpen}
                keepMounted
                open={Boolean(isMenuOpen)}
                onClose={handleMenuClose}
            >
                <MenuItem onClick={onPressEdit}><EditIcon></EditIcon>ערוך תובנה</MenuItem>
                <MenuItem onClick={onPressDelete}><DeleteIcon></DeleteIcon>מחק תובנה</MenuItem>
            </Menu>
        </div >
    )
}

const StyledButton = withStyles({
    root: {
        background: 'none',
        height: 30,
        minWidth: 30,
    },
    label: {
        textTransform: 'capitalize',
    },
})(Button);
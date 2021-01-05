import React,{Fragment}from 'react'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import MoodBadIcon from '@material-ui/icons/MoodBad';
import { Link } from '@material-ui/core';
export default function Ratings() {
    return (
        <Fragment>
          <div className="modal-content text-dark">
            <div className="text-light bg-info text-center">
                <h3>Feedback Request</h3>
            </div> 
            <div className="modal-body text-center"> <i className="far fa-file-alt fa-4x mb-3 animated rotateIn icon1"></i>
                <h3>Your opinion matters</h3>
                <h5>Help us improve our product? <strong>Give us your feedback.</strong></h5>
                
                <h6>Your Rating</h6>
            </div>
            <div className="form-check mb-4"> <input name="feedback" type="radio"/> <label className="ml-3"><InsertEmoticonIcon style={{'color':'orange'}}/>Very good</label> </div>
            <div className="form-check mb-4"> <input name="feedback" type="radio"/> <label className="ml-3"><SentimentSatisfiedIcon style={{'color':'orange'}}/>Good</label> </div>
            <div className="form-check mb-4"> <input name="feedback" type="radio"/> <label className="ml-3"><SentimentDissatisfiedIcon style={{'color':'orange'}}/>Mediocre</label> </div>
            <div className="form-check mb-4"> <input name="feedback" type="radio"/> <label className="ml-3"><MoodBadIcon style={{'color':'orange'}}/> Bad</label></div>
            <div className="form-check mb-4"> <input name="feedback" type="radio"/><label className="ml-3"><SentimentVeryDissatisfiedIcon style={{'color':'orange'}}/>Very Bad</label> </div>
           
            <div className="text-center">
                <h4>What could we improve?</h4>
            </div> <textarea type="textarea" placeholder="Your Message" rows="3"></textarea> 
            <div className="modal-footer"> <a href="/" className="btn btn-primary">Send <i className="fa fa-paper-plane"></i> </a> <a href="" className="btn btn-outline-primary" data-dismiss="modal">Cancel</a> </div>
        </div>
        </Fragment>
    
    )
}

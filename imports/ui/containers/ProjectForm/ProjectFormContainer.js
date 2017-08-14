import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { createContainer } from 'meteor/react-meteor-data';
import { Forms } from '../../../api/forms';
import PropTypes from 'prop-types';
import { loadFormRedirect } from '../../redux/modules/Form';

import ProjectForm from './ProjectForm';


class ProjectFormContainer extends Component {
    handleSubmit = (event) => {
        event.preventDefault();
        const course = this.props.user[0].profile.class;
        const cohort= this.props.user[0].profile.cohort;
        const form = 'project';
        const title = this.props.values.values.titleSelect
        const date= new Date().toDateString();
        const oneToFiveRadio = parseInt(this.props.values.values.oneToFiveRadio);
        const trueOrFalse = this.props.values.values.trueOrFalse;
        const input1 = this.props.values.values.input1;
        const input2= this.props.values.values.input2;
        const input3= this.props.values.values.input3;
        const input4= this.props.values.values.input4;
        const input5= this.props.values.values.input5;

        Meteor.call(
            'forms.addProfileFormData',
            course,
            cohort,
            form,
            title,
            date, 
            oneToFiveRadio, 
            trueOrFalse, 
            input1, 
            input2, 
            input3, 
            input4, 
            input5
        )

        const redirect= this.props.dispatch(loadFormRedirect(true));
    };
    
    render () {
        if (this.props.redirect) {
            return (
                <Redirect to="/student/`${this.currentUserID}`"/>
            )
        }
        return (
            <ProjectForm handleSubmit={this.handleSubmit} />
        )
    }
}

ProjectFormContainer.propTypes = {
  forms: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
    return {
        values: state.form.forms,
        currentUserId: Meteor.userId(),
        redirect: state.formRedirect.Redirect
    };
}

const ProfileContainer= createContainer(() => {
    Meteor.subscribe('forms');
    return{
        forms: Forms.find().fetch(),
        user: Meteor.users.find().fetch()
    }
}, ProjectFormContainer)

export default connect(mapStateToProps)(ProfileContainer)
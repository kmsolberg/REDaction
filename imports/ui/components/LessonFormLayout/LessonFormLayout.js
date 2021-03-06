import React from 'react';
import { Field, reduxForm } from 'redux-form'
import {
    Paper,
    DropDownMenu,
    MenuItem,
    RadioButton,
    RaisedButton,
} from 'material-ui';

import {
    RadioButtonGroup,
    DatePicker,
    TextField
} from 'redux-form-material-ui';

import './style.css';

function disableWeekends(date) {
    return date.getDay() === 0 || date.getDay() === 6;
}


const required = value => (value == null ? 'Required' : undefined);

let LessonFormLayout = ({ handleSubmit, pristine, submitting, reset }) => (
    <form name="Lesson" className='Form' onSubmit={handleSubmit} >
        <Paper className="lessoncontainer">
            <h3>Lessons</h3>
            <div>
                <Field
                    name="lessonDate"
                    component={DatePicker}
                    format={null}
                    hintText="Which lesson do you want to review?"
                    validate={required}
                />
            </div>
            <div>
                <h3>How well do you think you did?</h3>
                <h4>( 1-poorly, 5-well )</h4>
                <Field className="radiobuttons" name="oneToFiveRadio" component={RadioButtonGroup}>
                    <RadioButton value="1" label="1" />
                    <RadioButton value="2" label="2" />
                    <RadioButton value="3" label="3" />
                    <RadioButton value="4" label="4" />
                    <RadioButton value="5" label="5" />
                </Field>
            </div>
            <div>
                <h3>What did you find difficult about the lesson, and why?</h3>
                <Field
                    name="input1"
                    component={TextField}
                    hintText="Type Here"
                    floatingLabelText="Got stuck?"
                    multiLine
                    rows={1}
                />
            </div>
            <div>
                <h3>What was something you learned?</h3>
                <Field
                    name="input2"
                    component={TextField}
                    hintText="Type Here"
                    floatingLabelText="What do you really think..."
                    multiLine
                    rows={1}
                />
            </div>
            <div>
                <h3>Do you think the lesson adequately prepared you for the lab?</h3>
                <Field className="radiobuttons" name="trueOrFalse" component={RadioButtonGroup}>
                    <RadioButton value="true" label="Yes" />
                    <RadioButton value="false" label="No" />
                </Field>
            </div>
            <div>
                <h3>Any questions you wanted to ask but couldn't?</h3>
                <Field
                    name="input4"
                    component={TextField}
                    hintText="Type Here"
                    floatingLabelText="That one thing you still don't get"
                    multiLine
                    rows={1}
                />
            </div>
            <div>
                <h3>Any other comments about the day?</h3>
                <Field
                    name="input3"
                    component={TextField}
                    hintText="Type Here"
                    floatingLabelText="Be honest!"
                    multiLine
                    rows={1}
                />
            </div>
            <div>
                <h3>Your summary of the day!</h3>
                <Field
                    name="input5"
                    component={TextField}
                    hintText="Type Here"
                    floatingLabelText="140 characters or less"
                    rows={1}
                />
            </div>
            <div>
                <button type="submit" disabled={pristine || submitting}>Submit</button>
                <button
                    type="button"
                    disabled={pristine || submitting}
                    onClick={reset}
                >
                    Clear
                </button>
            </div>
        </Paper>
    </form>
)

LessonFormLayout = reduxForm({
    form: 'forms'
})(LessonFormLayout)

export default LessonFormLayout;

import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Button, Form} from 'react-bootstrap';
import {Field, reduxForm, reset} from 'redux-form';
import Validator from 'validatorjs';

class CommentCreate extends PureComponent {
  render() {
    const {handleSubmit, invalid, pristine, submitting} = this.props;

    return (
      <Form className="comment-form" onSubmit={handleSubmit}>
        <Field
          className="comment-entry"
          component="textarea"
          name="comment"
          placeholder="Write something..."
        />

        <Form.Group controlId="author">
          <Form.Label>Your Name: </Form.Label>
          <Field
            className="comment-author"
            component="input"
            id="author"
            name="author"
            type="text"
          />
        </Form.Group>

        <Button disabled={pristine || submitting || invalid} type="submit">
          Add Comment
        </Button>
      </Form>
    );
  }
}

CommentCreate.propTypes = {
  handleSubmit: PropTypes.func,
  invalid: PropTypes.bool,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
};

const rules = {
  author: 'required|min:2',
  comment: 'required|min:2',
};

const validate = values => {
  const validator = new Validator(values, rules);
  validator.passes();
  return validator.errors.all();
};

const afterSubmit = (result, dispatch) => dispatch(reset('commentCreate'));

export default reduxForm({
  form: 'commentCreate',
  onSubmitSuccess: afterSubmit,
  validate,
})(CommentCreate);

/*
 * FormPage
 *
 * List all the features
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import FlashMessage from 'components/FlashMessage';

import { makeSelectCurrent, makeSelectQuestions, makeSelectProgress } from './selectors';
import { makeSelectError } from '../App/selectors';
import { back, next, startForm, updateReply, goToStep, updateAndGoToNext, preview } from './actions';
import { setError, clearError } from '../App/actions';
import reducer from './reducer';

import ProgressBarItem from './components/ProgressBarItem';
import ProgressBar from './components/ProgressBar';
import FormWrapper from './components/FormWrapper';
import ProgressBarWrapper from './components/ProgressBarWrapper';
import FormFieldsComponent from './components/FormFieldsComponent';
import StartSection from './components/StartSectionComponent';
import PreviewSection from './components/Result';

import saga from './saga';

export class FormPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    const { current, onGoToStep, /* questions, */ onReplyUpdate, /* onBack, */ onNext, onStart, progress, error } = this.props;
    const progressBar = (ps, c) => c ? (
      <ProgressBarWrapper>
        <ProgressBar>
          {ps.map((p) => (
            <ProgressBarItem answered={(p.getIn(['question', 'reply']) !== '')} key={Math.random()} onClick={() => handleGoToStep(p.get('question'))}>
              { p.getIn(['question', 'reply']) !== '' ? (<span>&#10004;</span>) : p.get('index')}
              { c.get('id') === p.get('id') ? (<em>&#10004;</em>) : null }
            </ProgressBarItem>
          ))}
        </ProgressBar>
      </ProgressBarWrapper>
    ) : '';
    const handleGoToStep = (p) => onGoToStep(p.get('id'));
    const handleNext = () => onNext(current);
    // const handleBack = () => onBack(current);
    const handleSubmit = () => {
      // Also add Submit message here
      alert('Thanks! Your data has been submitted'); // eslint-disable-line 
      return onStart();
    };
    return (
      progress.getIn([-1, 'question', 'reply']) === '' ?
        <FormWrapper>
          <Helmet>
            <title>Form Page</title>
            <meta name="description" content="Form page for SS Insurance Claims" />
          </Helmet>
          {error ? FlashMessage(error.get('message')) : null}
          {StartSection(current, onStart)}
          {progressBar(progress, current)}
          { current ? FormFieldsComponent(current, onReplyUpdate, handleNext) : null}
        </FormWrapper> :
         PreviewSection(progress, handleSubmit)
    );
  }
}

FormPage.propTypes = {
  error: PropTypes.object,
  current: PropTypes.object,
  progress: PropTypes.object,

  onStart: PropTypes.func,
  onNext: PropTypes.func,
  onGoToStep: PropTypes.func,
  onReplyUpdate: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onStart: () => dispatch(startForm()),
    onReplyUpdate: function update(evt) {
      dispatch(clearError());
      if (evt.target) {
        // Input field
        return evt.target.type === 'checkbox' ?
          dispatch(updateReply(evt.target.checked)) : dispatch(updateReply(evt.target.value));
      }
      // Date obj
      return dispatch(updateReply(evt));
    },
    onBack: (c) => c.get('index') !== 0 ? dispatch(back(c.get('id'))) : false,
    onNext: function n(c) {
      if (c.get('reply') === '') {
        return c.get('type') === 'boolean' ?
          dispatch(updateAndGoToNext(false, c.get('id'))) :
            dispatch(setError('Oops, please provide your details before proceeding'));
      } else if (c.get('next')) {
        dispatch(clearError());
        return dispatch(next(c.get('id')));
      }
      return dispatch(preview(c.get('id')));
    },
    onGoToStep: (id) => dispatch(goToStep(id)),
  };
}

const mapStateToProps = createStructuredSelector({
  questions: makeSelectQuestions(),
  current: makeSelectCurrent(),
  progress: makeSelectProgress(),
  error: makeSelectError(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'form', reducer });
const withSaga = injectSaga({ key: 'form', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(FormPage);

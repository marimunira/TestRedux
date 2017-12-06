import { connect } from 'react-redux';
import { hide, remove } from '../action-creators';
import { Dialog } from '../dialog/dialog';

const mapStateToProps = (state) => {
  return {
    isopen: state.modal.isopen,
    id: state.modal.id,
    content: state.modal.content
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmitClick: (id) => {
      dispatch(remove(id));
      dispatch(hide());
    }, 
    onCancelClick: () => {
      dispatch(hide());
    },
  }
}

export const VisibleDialog = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialog)


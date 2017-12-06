import { connect } from 'react-redux';
import { ItemList } from '../item-list/item-list';
import { show } from '../action-creators';

const mapStateToProps = (state) => {
    console.log('MY STATE');
    console.log(state);
  return {
    array: state.getarray.array
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onElemClick: (id) => {
      dispatch(show(id))
    }
  }
}

export const VisibleList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemList)


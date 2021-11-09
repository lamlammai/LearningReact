import React from 'react';
import { connect } from 'react-redux';
// import { useDispatch, useSelector } from 'react-redux';
import { decrementNumber} from '../actions/index';
const ButtonDecrement = (props) => {
  // const count = useSelector(state => state.counter.count);
  // const dispatch = useDispatch();
  return (
    <>
      {/* <button
        onClick={() => dispatch(decrementNumber(count))}
      > - </button> */}
      <button
        onClick={() => props.decrement(props.count)}
      > - </button>
    </>
  )
}
const mapStateToProps = state => ({
  count: state.counter.count
});
const mapDispatchToProps = dispatch => ({
  decrement: n => dispatch(decrementNumber(n)) 
})
const ConnectButtonDecrement = connect(mapStateToProps, mapDispatchToProps)(ButtonDecrement);
export default React.memo(ConnectButtonDecrement);
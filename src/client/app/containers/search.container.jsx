import { connect } from 'react-redux';
import SearchPageComponent from '../components/search.component.jsx';
import action from '../actions/events.action.jsx';

export default connect(
	//App is listening to state
  function mapStateToProps(state) {
    return { 
      events: state.events,
    };
  },

  function mapDispatchToProps(dispatch) {
    return {
    	addEvents: function(events) {
    		return dispatch(action.addBulkEvents(events));
      }
    }
  }
)(SearchPageComponent);

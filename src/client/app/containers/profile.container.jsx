import { connect } from 'react-redux';
import ProfilePageComponent from '../components/profile.component.jsx';
import authActions from '../actions/auth.action.jsx';
import profileActions from '../actions/profile.action.jsx';

export default connect(
  function mapStateToProps(state) {
    return {
      profile: state.profile.toJS(),
      auth: state.auth.toJS()
    };
  },
  function mapDispatchToProps(dispatch) {
    return { 
      updateUser: (user) => dispatch(authActions.updateUser(user)),
      resetUser: () => dispatch(authActions.resetUser()),
      updateProfile: (profile) => dispatch(profileActions.updateProfile(profile)),
      resetProfile: () => dispatch(profileActions.resetProfile()),
    };
  }
)(ProfilePageComponent);

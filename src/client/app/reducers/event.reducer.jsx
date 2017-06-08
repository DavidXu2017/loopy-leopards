const { fromJS, Map, List } = require('immutable')

const eventInit = fromJS({
  img: '',
  title: '',
  description: '',
  address: '',
  city: '',
  state: '',
  phone: '',
  activeState: 'In progress',
  invitees: [],
});

export default function event(state = eventInit, action) {
  switch (action.type) {
    // case "CREATE_EVENT":
    //   return Object.assign({}, state,
    //     {status: ''}, 
    //     {img: action.payload.img},
    //     {title: action.payload.title},
    //     {phone: action.payload.phone},
    //     {address: action.payload.address},
    //     {city :action.payload.city},
    //     {state: action.payload.state},
    //     {latitude: action.payload.latitude},
    //     {longitude: action.payload.longitude},
    //     {description: action.payload.description},
    //     {date_time: action.payload.date_time},
    //     {url: action.payload.url},
    //     {venue_id: action.payload.venue_id},
    //   );
    // case "SET_STATE_BACK_TO_DEFAULT":
    //   return Object.assign({}, eventInit.toJS(), action.payload);
    case 'MODIFY_EVENT':
      return fromJS(action.payload);
    case 'RESET_GROUP': 
      return  fromJS({
        photo: '',
        title: '',
        date: Date.now(),
        description: '',
        address: '',
        city: '',
        state: '',
        phone: '',
        cost: '',
        list: [
          {
            name: '',
            phone: ''
          }
        ],
        activeState: null
      });
    case 'EVENT_DETAILS':
      return Object.assign({}, eventInit.toJS(), action.payload);
    default:
      return state
  }
}
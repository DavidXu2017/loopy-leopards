import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import { HashRouter, Router, Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import TimePicker from 'material-ui/TimePicker';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Dialog from 'material-ui/Dialog';
import Avatar from 'material-ui/Avatar';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';
import Chip from 'material-ui/Chip';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {GridList, GridTile} from 'material-ui/GridList';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import IconButton from 'material-ui/IconButton';


export default class SearchPageComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
      userLocation: 'Please enter your location',
      latitude: 0,
      longitude: 0,
      toggleCheckBox: false,
      userSearchEvent: '',
    }

    this.handleExpandChange = this.handleExpandChange.bind(this);
    this.handleSearchResult = this.handleSearchResult.bind(this);
    this.handleGetCurrentLocation = this.handleGetCurrentLocation.bind(this);
    this.handleAddressTextFieldChange = this.handleAddressTextFieldChange.bind(this);
    this.handleSearchTextFieldChange = this.handleSearchTextFieldChange.bind(this);
  }
  
  // componentDidMount() {

  //   var randomNumbers = [];
  //   var eventsArray = [];
  //   var eventsbriteData;
  //   var eventsYelpData;
  //   //pick up 10 events from api
  //   function pickupEvents(array) {
  //     let length = array.length;
  //       for (var i = 0; i < 13; i++) {
  //         var randomNumber = Math.floor(Math.random()*length);
  //         if (randomNumbers.indexOf(randomNumber) == -1) {
  //           randomNumbers.push(randomNumber);
  //           eventsArray.push(array[randomNumber]);
  //         } else {
  //           --i;
  //         }
  //       }
  //   }
  //   //filder the events
  //   function getUnique(arr) {
  //     var unique = {};
  //       arr.forEach(function(a){ unique[ JSON.stringify(a) ] = 1 });
  //       arr= Object.keys(unique).map(function(u){return JSON.parse(u) });
  //       return arr
  //   }

  //   fetch('/api/eventbrite', {credentials: 'include'})
  //     .then(res => res.json())
  //     .catch(error => {
  //       console.log("Can not received data from Eventbrite Api!!!");
  //     })
  //     .then(res => {
  //       //console.log('Received data from eventbrite api', res);
  //       pickupEvents(res.events);
  //       console.log("pickup 13 events: ", eventsArray);
  //       var eventsbrite = eventsArray.map(event => {
  //         return {
  //           img: event.logo.original.url,
  //           phone: '',
  //           address: '',
  //           city: '',
  //           state: '',
  //           latitude: '',
  //           longitude: '',
  //           title: event.name.text,
  //           description: event.description.text,
  //           date_time: event.start.local,
  //           url: event.url,
  //         }
  //       })
  //       eventsbriteData = eventsbrite;
  //       //this.props.addEvents(eventsbrite);
  //     })
  //     .then(res => {
  //       let params = {
  //         location: "NYC",
  //       };
  //       let esc = encodeURIComponent
  //       let query = Object.keys(params)
  //                    .map(k => esc(k) + '=' + esc(params[k]))
  //                    .join('&');
  //       let url = '/api/yelp?' + query;
  //       return fetch(url);
  //     })
  //     .then(res => res.json())
  //     .catch(error => {
  //       console.log("Can not received data from Yelp Api!!!");
  //     })
  //     .then(res =>{
  //       //console.log('received data from Yelo api: ', res);
  //       randomNumbers = [];
  //       eventsArray = [];
  //       pickupEvents(res.businesses);
  //       //console.log("pickup 13 events from yelp: ", eventsArray);
  //       var eventsYelp = eventsArray.map(event => {
  //         return {
  //           img: event.image_url,
  //           title: event.name,
  //           phone: event.display_phone,
  //           address: event.location.address1,
  //           city: event.location.city,
  //           state: event.location.state,
  //           latitude: event.coordinates.latitude,
  //           longitude: event.coordinates.longitude,
  //           description: event.categories.map(ele => ele.title).join(", ")
  //         }
  //       })
  //       eventsYelpData = eventsYelp;
  //     })
  //     .then(res => {
  //       randomNumbers = [];
  //       let mixedEvents = eventsbriteData.concat(eventsYelpData);
  //       //do random
  //       let result = []
  //       for(var i = 0; i < 26; i++) {
  //         var randomNumber = Math.floor(Math.random() * 26);
  //         if (randomNumbers.indexOf(randomNumber) === -1) {
  //           result.push(mixedEvents[randomNumber]);
  //         } else {
  //           i--;
  //         }
  //       }
  //       console.log("result: ", result)
  //       this.props.addEvents(getUnique(result));
  //     })
  // }

  handleExpandChange (expanded) {
    this.setState({expanded: expanded});
  };

  handleSearchResult () {
    const userSesarchEvent = this.state.userSearchEvent;
    const userLocation = this.state.userLocation;
    ///////////////////Helper Functions///////////////////
    let randomNumbers = [];
    let eventsArray = [];
    let eventsbriteData;
    //var eventsYelpData;
    //pick up 10 events from api
    function pickupEvents(array) {
      let length = array.length;
        for (var i = 0; i < 13; i++) {
          var randomNumber = Math.floor(Math.random()*length);
          if (randomNumbers.indexOf(randomNumber) == -1) {
            randomNumbers.push(randomNumber);
            eventsArray.push(array[randomNumber]);
          } else {
            --i;
          }
        }
    }

    ///////////////////////////////////////////////////////
    let init = {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      query: JSON.stringify({location: userLocation})
    }
    fetch('/api/eventbrite', init)
      .then(res => res.json())
      .catch(error => console.log("Can not received data from Eventbrite Api!!!"))
      .then(res => {
        pickupEvents(res.events);
        console.log("pickup 13 events: ", eventsArray);
        let eventsbrite = eventsArray.map(event => {
          return {
            img: event.logo.original.url,
            phone: '',
            address: '',
            city: '',
            state: '',
            latitude: '',
            longitude: '',
            title: event.name.text,
            description: event.description.text,
            date_time: event.start.local,
            url: event.url,
          }
        })
        eventsbriteData = eventsbrite;
      })















    this.setState({expanded: true});
  };

  handleGetCurrentLocation (event) {
    var that = this;
    if (!that.state.toggleCheckBox) {
      if (navigator.geolocation) { 
          navigator.geolocation.getCurrentPosition(function (position) { 
            var coords = position.coords; 
            let init = {
              method: 'POST',
              credentials: 'include',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(
                {
                  latlngCode: {lat: coords.latitude, lng: coords.longitude},
                }
              )
            }
            fetch('/api/addressMap', init)
            .then(res => res.json())
            .catch(err => console.log("can not save event data!!!!!!"))
            .then(res => {
              that.setState({userLocation: res.results[0].formatted_address})
            })
            .then(res => console.log(that.state.userLocation));
          }
        )
      }
      that.setState({toggleCheckBox: true});
    } else {
      console.log("!!!!!!!!!!!");
      that.setState({userLocation: 'Please enter your location'});
      that.setState({toggleCheckBox:false});
    }
  }

  handleAddressTextFieldChange (event) {
    this.setState({userLocation: event.target.value});
  }

  handleSearchTextFieldChange (event) {
    this.setState({userSearchEvent: event.target.value});
  }

  render() {

    const styles = {
      position: {
        marginLeft: 16,
      },
      position_searchButton: {
        marginBottom: 16,
        marginLeft: 16,
      },
      img: {
        height: 200,
        width: 500,
      }
    }; 

    return (
      <div>
        <Paper>
        <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
          <CardHeader
            actAsExpander={true}
            showExpandableButton={true}
          />
          <TextField
            id="text-field-controlled"
            value={this.state.userLocation}
            onChange={this.handleAddressTextFieldChange}
            style={styles.position}
            multiLine={true}
          />
          <Checkbox
            label="Current Location"
            style={styles.position}
            onCheck={() => this.handleGetCurrentLocation(event)}
            checked={this.state.toggleCheckBox}
          />
          <TextField
            hintText="Hint Text"
            floatingLabelText="Search"
            onChange={this.handleSearchTextFieldChange}
            style={styles.position}
          />
          <br/>
          <FlatButton 
              label="Search" 
              onTouchTap={this.handleSearchResult} 
              style={styles.position_searchButton}
          />
          <br/>

          <CardMedia
            expandable={true}
            overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
          >
            <img style={styles.img} src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F30775164%2F23670314418%2F1%2Foriginal.jpg?s=9cf82d01af4a8d98809317781d0147ec" />
          </CardMedia>

        </Card>
        </Paper>
      </div>
    ); 
  }
}

// <CardMedia
//   expandable={true}
//   overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
// >
//   <img src="images/nature-600-337.jpg" />
// </CardMedia>

// this.handleReduce = this.handleReduce.bind(this);
// handleReduce () {
//   this.setState({expanded: false});
// };
//<FlatButton label="Reduce" onTouchTap={this.handleReduce} />

// <CardTitle title="Card title" subtitle="Card subtitle" expandable={true} />
// <CardText expandable={true}>
//   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//   Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
//   Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
//   Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
// </CardText>
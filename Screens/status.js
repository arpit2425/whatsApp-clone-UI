import React, {Component} from 'react';
import {
  ListItem,
  Left,
  Thumbnail,
  Body,
  Content,
  Text,
  Container,
  Fab,
  Icon,
  Button,
} from 'native-base';
import appStyles from '../appStyles';
export default class StatusScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }
  render() {
    return (
      <Container>
        <Content>
          <ListItem avatar noBorder>
            <Left>
              <Thumbnail
                source={{
                  uri:
                    'https://s3.amazonaws.com/uifaces/faces/twitter/matt3224/128.jpg',
                }}
              />
              <Icon
                type="MaterialIcons"
                name="add-circle"
                style={appStyles.addStatusIcon}
              />
            </Left>
            <Body>
              <Text>My Status</Text>
              <Text note>4 mintues ago</Text>
            </Body>
          </ListItem>
          <ListItem itemDivider style={appStyles.listItemDivider}>
            <Text note style={{fontSize: 12}}>
              Recent Updates
            </Text>
          </ListItem>
          <ListItem avatar>
            <Left>
              <Thumbnail
                source={{
                  uri:
                    'https://images.pexels.com/photos/2010877/pexels-photo-2010877.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                }}
              />
            </Left>
            <Body>
              <Text>Ankita</Text>
              <Text note>Today, 11:24 pm</Text>
            </Body>
          </ListItem>
          <ListItem avatar>
            <Left>
              <Thumbnail
                source={{
                  uri:
                    'https://images.pexels.com/photos/3711677/pexels-photo-3711677.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                }}
              />
            </Left>
            <Body>
              <Text>Anshita</Text>
              <Text note>Today, 10:12 pm</Text>
            </Body>
          </ListItem>
          <ListItem avatar>
            <Left>
              <Thumbnail
                source={{
                  uri:
                    'https://s3.amazonaws.com/uifaces/faces/twitter/buddhasource/128.jpg',
                }}
              />
            </Left>
            <Body>
              <Text>Shashank</Text>
              <Text note>Today, 10:00 pm</Text>
            </Body>
          </ListItem>
          <ListItem itemDivider style={appStyles.listItemDivider}>
            <Text note style={{fontSize: 12}}>
              Viewed Updates
            </Text>
          </ListItem>
          <ListItem avatar>
            <Left>
              <Thumbnail
                source={{
                  uri:
                    'https://s3.amazonaws.com/uifaces/faces/twitter/mauriolg/128.jpg',
                }}
              />
            </Left>
            <Body>
              <Text>Nikhil</Text>
              <Text note>Yesterday, 08:33 pm</Text>
            </Body>
          </ListItem>
        </Content>
        <Fab
          style={appStyles.fabColor}
          active={true}
          direction="up"
          position="bottomRight">
          <Icon type="MaterialIcons" name="photo-camera" />
          <Button style={{backgroundColor: '#F5F5F5'}}>
            <Icon type="MaterialIcons" name="edit" style={{color: '#075E54'}} />
          </Button>
        </Fab>
      </Container>
    );
  }
}

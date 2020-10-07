import React, {Component} from 'react';
import {
  ListItem,
  Left,
  Thumbnail,
  Body,
  Right,
  Content,
  Text,
  Badge,
  Container,
  Fab,
  Icon,
} from 'native-base';
import appStyles from '../appStyles';

export default class ChatScreen extends Component {
  render() {
    return (
      <Container>
        <Content>
          <ListItem avatar>
            <Left>
              <Thumbnail
                source={{
                  uri:
                    'https://images.pexels.com/photos/879474/pexels-photo-879474.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                }}
              />
            </Left>
            <Body>
              <Text>Nikhil</Text>
              <Text note>Whats'up bro!!!</Text>
            </Body>
            <Right>
              <Text note style={{color: '#25D366'}}>
                3:43 pm
              </Text>
              <Badge style={appStyles.badgeChats}>
                <Text style={appStyles.badgeTextChats}>1</Text>
              </Badge>
            </Right>
          </ListItem>
          <ListItem avatar>
            <Left>
              <Thumbnail
                source={{
                  uri:
                    'https://images.pexels.com/photos/3285341/pexels-photo-3285341.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                }}
              />
            </Left>
            <Body>
              <Text>Lily</Text>
              <Text note>Love you so much 💋 💋 </Text>
            </Body>
            <Right>
              <Text note style={{color: '#25D366'}}>
                3:43 pm
              </Text>
              <Badge style={appStyles.badgeChats}>
                <Text style={appStyles.badgeTextChats}>4</Text>
              </Badge>
            </Right>
          </ListItem>
          <ListItem avatar>
            <Left>
              <Thumbnail
                source={{
                  uri:
                    'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                }}
              />
            </Left>
            <Body>
              <Text>Sid</Text>
              <Text note>Lets meet tonight</Text>
            </Body>
            <Right>
              <Text note>3:43 pm</Text>
            </Right>
          </ListItem>
          <ListItem avatar>
            <Left>
              <Thumbnail
                source={{
                  uri:
                    'https://s3.amazonaws.com/uifaces/faces/twitter/naitanamoreno/128.jpg',
                }}
              />
            </Left>
            <Body>
              <Text>Ritik</Text>
              <Text note>How are you Arpit?</Text>
            </Body>
            <Right>
              <Text note>3:43 pm</Text>
            </Right>
          </ListItem>
        </Content>
        <Fab style={appStyles.fabColor} position="bottomRight">
          <Icon type="MaterialIcons" name="chat" />
        </Fab>
      </Container>
    );
  }
}

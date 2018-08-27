import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
// import ImageSlider from 'react-native-image-slider';
import Slideshow from 'react-native-image-slideshow';
// import IMG from './image';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      position: 0,
      height: 211,
      indicatorSize: 20,
      dataSource: [
        {
          title: 'Title 1',
          caption: 'Caption 1',
          url: require('./image/NatGeo01.jpg'),
        }, {
          title: 'Title 2',
          caption: 'Caption 2',
          url: require('./image/NatGeo02.jpg'),
        }, {
          title: 'Title 3',
          caption: 'Caption 3',
          url: require('./image/NatGeo03.jpg'),
        }, {
          title: 'Title 4',
          caption: 'Caption 4',
          url: require('./image/NatGeo04.jpg'),
        }, {
          title: 'Title 5',
          caption: 'Caption 5',
          url: require('./image/NatGeo05.jpg'),
        },
      ],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <Text style={styles.text}>Gallery</Text> */}
        <Slideshow
          style={styles.slider}
          dataSource={this.state.dataSource}
          position={this.state.position}
          onPositionChanged={position => this.setState({ position })}
          indicatorSize={this.state.indicatorSize}
          height={this.state.height} />
        {/* <Text style={styles.text}>by Eugene</Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#3C3C3C',
  },

  slider: {
    // width: 50,
    // height: 50,
  }
});

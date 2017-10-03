import React, { Component } from 'react';
import {
  DatePickerIOS,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import Modal from 'react-native-modal';
import { Icon } from 'react-native-elements';
import { Button } from '../Button';
import { formatDate } from '../../handlers';
import { colors } from '../../config/styles';
import styles from './styles';

class DatePicker extends Component {
  state = {
    visible: false
  }

  toggleModal = visible => this.setState({ visible });

  render() {
    const {
      containerStyle,
      date,
      dateStyle,
      onDateChange,
      mainColor,
      maximumDate,
      minimumDate,
      title,
      titleStyle
    } = this.props;
    return (
      <View>
        <TouchableHighlight
          underlayColor={mainColor}
          onPress={() => this.toggleModal(true)}
        >
          <View style={[styles.container, containerStyle]}>
            <Text style={[styles.title, titleStyle]}>
              {title}
            </Text>
            <Text style={[styles.title, dateStyle]}>
              {formatDate(date)}
            </Text>
            <View>
              <Icon
                color={colors.inactiveColor}
                name='chevron-right'
                size={15}
                type='material-community'
              />
            </View>
          </View>
        </TouchableHighlight>
        <Modal
          backdropColor={colors.black}
          isVisible={this.state.visible}
          onBackdropPress={() => this.toggleModal(false)}
          style={styles.modal}
        >
          <View style={[styles.modalHeader, { backgroundColor: mainColor }]}>
            <Text style={styles.modalHeaderText}>
              Select a date
            </Text>
            <Button
              mainColor={colors.white}
              onPress={() => this.toggleModal(false)}
              containerStyle={styles.buttonContainer}
              title='Done'
              titleStyle={styles.buttonTitle}
              underlayColor={mainColor}
            />
          </View>
          <View style={styles.modalBody}>
            <DatePickerIOS
              date={date}
              maximumDate={maximumDate}
              minimumDate={minimumDate}
              mode='date'
              onDateChange={value => onDateChange(value)}
              style={styles.datePicker}
            />
          </View>
        </Modal>
      </View>
    );
  }
}

export { DatePicker };

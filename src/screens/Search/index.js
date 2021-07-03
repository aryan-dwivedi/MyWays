import React, {useState} from 'react';
import {View, Text, TextInput, FlatList, Pressable} from 'react-native';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import results from '../../../assets/results';
import { Overlay, CheckBox} from 'react-native-elements';

const Search = props => {
  const [inputText, setInputText] = useState('');
  const [visible, setVisible] = useState(false);
  const [checked, setchecked] = useState(false);

  const filtering = () => {
    setchecked(!checked);
  };

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const renderItem = ({item}) => {
    return (
      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <Entypo name={'open-book'} size={35} />
        </View>
        <Text style={styles.Text}>{item.Title}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Search.."
          value={inputText}
          onChangeText={setInputText}
        />
        <Ionicons name={'filter'} size={25} onPress={toggleOverlay} />
        <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
          <View style={styles.overlayContainer}>
            <Text style={styles.filterText}>Apply filter</Text>
            <View>
              <Text style={styles.mainText}>Course Provider</Text>
              <View style={styles.checkboxView}>
                <CheckBox
                  center
                  title="Coursera"
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  checked={checked}
                  onPress={() => filtering()}
                />
                <CheckBox
                  center
                  title="Udemy"
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                />
              </View>
              <View style={styles.checkboxView}>
                <CheckBox
                  center
                  title="Edx"
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"

                />
                <CheckBox
                  center
                  title="Udacity"
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                />
              </View>
              <View style={styles.checkboxView}>
                <CheckBox
                  center
                  title="Edureka"
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                />
                <CheckBox
                  center
                  title="FutureLearn"
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                />
              </View>
            </View>
            <View>
              <Text style={styles.mainText}>Course Provider</Text>
              <View style={styles.checkboxView}>
                <CheckBox
                  center
                  title="Business Management"
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                />
                <CheckBox
                  center
                  title="IT"
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                />
              </View>
              <View style={styles.checkboxView}>
                <CheckBox
                  center
                  title="Finance"
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                />
                <CheckBox
                  center
                  title="Design"
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                />
              </View>
              <View style={styles.checkboxView}>
                <CheckBox
                  center
                  title="Leagal"
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                />
                <CheckBox
                  center
                  title="Engineering"
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                />
              </View>
              <View style={styles.checkboxView}>
                <CheckBox
                  center
                  title="Data Science"
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                />
                <CheckBox
                  center
                  title="Marketing"
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                />
              </View>
            </View>
            <View></View>
            <Pressable style={styles.Button} onPress={toggleOverlay}>
              <Text style={styles.ButtonText}>Apply Filter</Text>
            </Pressable>
          </View>
        </Overlay>
      </View>

      <FlatList
        data={results.filter(f =>
          f.Title.toLowerCase().includes(inputText.toLowerCase()),
        )}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Search;

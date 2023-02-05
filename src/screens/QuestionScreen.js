import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableNativeFeedback,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from 'react-native';

import IoIcon from 'react-native-vector-icons/Ionicons';
import Micon from 'react-native-vector-icons/MaterialIcons';
import MCicon from 'react-native-vector-icons/MaterialCommunityIcons';
import OIcon from 'react-native-vector-icons/Octicons';
import SIcon from 'react-native-vector-icons/SimpleLineIcons';

//components
import TopNav from '../components/nav/Nav';
import SearchInput from '../components/searchInput/SearchInput';
import Tabs from '../components/tab/Tabs';
import {colors} from '../resources/colors';
import QuestionView from '../components/question/QuestionView';
import Menu from '../components/Menu/Menu';
import PostComponent from '../components/post/Post';

const QuestionScreen = () => {
    const [menuVisible, setMenuVissible] = useState(false);
  return (
    <ImageBackground
      source={require('../resources/images/bg.png')}
      style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={{
          alignItems: 'center',
        }}>
        <View style={styles.header}>
          {/* the nav */}
          <TopNav />

          {/* search */}
          <SearchInput />
        </View>

        <QuestionView />
        <QuestionView />
        <QuestionView />
        <QuestionView />
        <QuestionView />
      </ScrollView>

      {menuVisible && (
        <Menu setVisible={setMenuVissible} children={<PostComponent />} />
      )}
      <Tabs openMenu={() => setMenuVissible(true)} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },

  header: {
    height: 150,
    backgroundColor: colors.blueDark,
    borderBottomRightRadius: 100,
    paddingHorizontal: 5,
    paddingTop: 10,
    marginBottom: 20,
  },

 

});

export default QuestionScreen;

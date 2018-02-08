import {
  StyleSheet
} from 'react-native'

const containerStyles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: '100%'
  },

  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%'
  },

  containerInner: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },

  imageLogo: {
    marginTop: 30
  },
});

export default containerStyles;
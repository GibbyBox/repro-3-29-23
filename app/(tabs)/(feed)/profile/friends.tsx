/** 
 * Why (tabs,dne) and not (tabs)?
 *   If we drag the (profile,feed) folder and place it under (tabs), we end up with a third tab
 *   even when we don't specify account for it in the tabs layout. 
 */
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../../../components/EditScreenInfo';
import { Text, View } from '../../../../components/Themed';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="ctrl/cmd + p friends.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

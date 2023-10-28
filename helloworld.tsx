import React from 'react';
import {View, Text, Image, ScrollView, TextInput, Button} from 'react-native';

const HelloWorld = ({route, navigation}): React.JSX.Element => {
  const {name, age} = route.params;
  return (
    <ScrollView>
      <Text>Some text</Text>
      <View>
        <Text>Some more text</Text>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{width: 200, height: 200}}
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        defaultValue="You can type in me"
      />
      <Text>
        Hello {name}, you are {age} years old
      </Text>
      <Button
        title="Update the title"
        onPress={() => navigation.setOptions({title: 'Updated!'})}
      />
    </ScrollView>
  );
};

export default HelloWorld;

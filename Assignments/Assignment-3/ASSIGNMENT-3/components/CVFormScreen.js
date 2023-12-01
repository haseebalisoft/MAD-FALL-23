import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { saveUserData, getUserData } from './AsyncStorageService';

const CVFormScreen = ({ route }) => {
 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [summary, setSummary] = useState('');
  const [experience, setExperience] = useState('');
  const [education, setEducation] = useState('');

  const handleSave = async () => {
    try {
      await AsyncStorage.setItem('name', name);
      await AsyncStorage.setItem('email', email);
      await AsyncStorage.setItem('phone', phone);
      await AsyncStorage.setItem('summary', summary);
      await AsyncStorage.setItem('experience', experience);
      await AsyncStorage.setItem('education', education);

      alert('CV information saved successfully!');
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  const handlePreview = () => {
    navigation.navigate('CVDisplay');
  };

  return (
    <ScrollView style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>CV Form</Text>

      <TextInput
        placeholder="Full Name"
        value={name}
        onChangeText={text => setName(text)}
        style={{ marginBottom: 10, borderBottomWidth: 1, paddingBottom: 5 }}
      />

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        style={{ marginBottom: 10, borderBottomWidth: 1, paddingBottom: 5 }}
      />

      <TextInput
        placeholder="Phone"
        value={phone}
        onChangeText={text => setPhone(text)}
        style={{ marginBottom: 10, borderBottomWidth: 1, paddingBottom: 5 }}
      />

      <TextInput
        placeholder="Summary"
        value={summary}
        onChangeText={text => setSummary(text)}
        multiline
        style={{ marginBottom: 10, borderBottomWidth: 1, paddingBottom: 5 }}
      />

      <TextInput
        placeholder="Experience"
        value={experience}
        onChangeText={text => setExperience(text)}
        multiline
        style={{ marginBottom: 10, borderBottomWidth: 1, paddingBottom: 5 }}
      />

      <TextInput
        placeholder="Education"
        value={education}
        onChangeText={text => setEducation(text)}
        multiline
        style={{ marginBottom: 10, borderBottomWidth: 1, paddingBottom: 5 }}
      />

      <Button title="Save" onPress={handleSave} />
      <Button title="Preview" onPress={handlePreview} />
    </ScrollView>
  );
};

export default CVFormScreen;

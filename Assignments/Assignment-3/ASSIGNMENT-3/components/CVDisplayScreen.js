import React, { useEffect, useState } from 'react';
import { View, Text, AsyncStorage } from 'react-native';

const CVDisplayScreen = () => {
  const [cvData, setCVData] = useState({
    name: '',
    email: '',
    phone: '',
    summary: '',
    experience: '',
    education: '',
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const storedName = await AsyncStorage.getItem('name');
      const storedEmail = await AsyncStorage.getItem('email');
      const storedPhone = await AsyncStorage.getItem('phone');
      const storedSummary = await AsyncStorage.getItem('summary');
      const storedExperience = await AsyncStorage.getItem('experience');
      const storedEducation = await AsyncStorage.getItem('education');

      setCVData({
        name: storedName || '',
        email: storedEmail || '',
        phone: storedPhone || '',
        summary: storedSummary || '',
        experience: storedExperience || '',
        education: storedEducation || '',
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>CV Display</Text>
      <Text>Name: {cvData.name}</Text>
      <Text>Email: {cvData.email}</Text>
      <Text>Phone: {cvData.phone}</Text>
      <Text>Summary: {cvData.summary}</Text>
      <Text>Experience: {cvData.experience}</Text>
      <Text>Education: {cvData.education}</Text>
    </View>
  );
};

export default CVDisplayScreen;

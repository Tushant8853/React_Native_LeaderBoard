// Component1.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Daily from './Ranking/Weekly';
import Monthly from './Ranking/Month';

const PartyRankScreen = () => {
  const [activeTab, setActiveTab] = useState('Daily');

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Daily' && styles.activeTab]}
          onPress={() => setActiveTab('Daily')}
        >
          <Text style={styles.tabText}>Daily</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Monthly' && styles.activeTab]}
          onPress={() => setActiveTab('Monthly')}
        >
          <Text style={styles.tabText}>Monthly</Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      {activeTab === 'Daily' ? <Daily /> : <Monthly />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  tab: {
    paddingVertical: 8,
    backgroundColor: 'white',
    width: '40%',
    alignItems: 'center',

  },
  activeTab: {
    backgroundColor: 'gray',
  },
  tabText: {
    fontSize: 14,
    color: '#black',
    fontWeight: 'bold',
  },
  timerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  timerText: {
    fontSize: 14,
    color: '#333',
  },
  giftBox: {
    backgroundColor: '#ffecec',
    padding: 5,
    borderRadius: 8,
  },
});


export default PartyRankScreen;

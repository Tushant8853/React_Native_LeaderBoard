import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Component1 from './components/PartyRank/PartyRankScreen';
import Component2 from './components/LiveRanking/LiveRankingScreen';
import Component3 from './components/HourRank/HourRankScreen';
import Component4 from './components/FamilyRanking/FamilyRankingScreen';
import Component5 from './components/WealthRanking/WealthRankingScreen';

const Screen1 = () => {
  const [activeTab, setActiveTab] = useState('component1');

  const renderComponent = () => {
    switch (activeTab) {
      case 'component1':
        return <Component1 />;
      case 'component2':
        return <Component2 />;
      case 'component3':
        return <Component3 />;
      case 'component4':
        return <Component4 />;
      case 'component5':
        return <Component5 />;
      default:
        return null;
    }
  };

  const tabs = [
    { id: 'component1', label: 'Party Ranking' },
    { id: 'component2', label: 'Live Ranking' },
    { id: 'component3', label: 'Hourly Ranking' },
    { id: 'component4', label: 'Family Ranking' },
    { id: 'component5', label: 'Wealth Ranking' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {tabs.map((tab) => (
            <TouchableOpacity
              key={tab.id}
              style={[
                styles.tab,
                activeTab === tab.id && styles.activeTab,
                activeTab === tab.id && styles.underlineTab, // 👈 Orange line here
              ]}
              onPress={() => setActiveTab(tab.id)}
            >
              <Text style={[styles.tabText, activeTab === tab.id && styles.activeTabText]}>
                {tab.label}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Component Area */}
      <View style={styles.content}>
        {renderComponent()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingVertical: 10,
    backgroundColor: '#f8f8f8',
    elevation: 3,
    zIndex: 10,
  },
  tab: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginHorizontal: 5,
    borderRadius: 20,
  },
  activeTab: {
  },
  underlineTab: {
    borderBottomWidth: 3,
    borderBottomColor: 'orange',
    borderRadius: 0, // Optional: keeps bottom edges square
  },
  tabText: {
    fontSize: 14,
    color: '#333',
  },
  activeTabText: {
    color: 'orange',
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
  },
});

export default Screen1;

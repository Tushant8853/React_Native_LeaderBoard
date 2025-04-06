import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, Dimensions } from 'react-native';
import data from '../../../../Data/data.json';

const { width } = Dimensions.get('window');

const Daily = () => {
  const [topRanks, setTopRanks] = useState([]);
  const [otherRanks, setOtherRanks] = useState([]);

  useEffect(() => {
    setTopRanks(data.topRanks);
    setOtherRanks(data.otherRanks);
  }, []);

  return (
    <View style={styles.container}>
      {/* Top 3 Users */}
      <View style={styles.topRanksContainer}>
        {topRanks.map((user, index) => (
          <View
            key={user.id}
            style={[
              styles.topRankCard,
              index === 1 && styles.centerCard, // center winner
            ]}
          >
            <Image source={{ uri: user.avatar }} style={styles.topAvatar} />
            <Text style={styles.topUserName} numberOfLines={1}>{user.name}</Text>
            <View style={styles.scoreRow}>
              <Text style={styles.scoreText}>{user.score}</Text>
              <Text style={styles.coinIcon}>🪙</Text>
            </View>
          </View>
        ))}
      </View>

      {/* Other Ranked Users */}
      <FlatList
        data={otherRanks}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View style={styles.listItem}>
            <Text style={styles.rankText}>{index + 4}</Text>
            <Image source={{ uri: item.avatar }} style={styles.listAvatar} />
            <Text style={styles.listName} numberOfLines={1}>{item.name}</Text>
            <View style={styles.scoreRow}>
              <Text style={styles.scoreText}>{item.score}</Text>
              <Text style={styles.trophyIcon}>🏆</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    backgroundColor: 'orange',
    flex: 1,

  },
  topRanksContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    alignItems: 'flex-end',
  },
  topRankCard: {
    alignItems: 'center',
    width: width / 3.5,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 12,
    elevation: 3,
    borderColor: '#FFD700',
    borderWidth: 2,
  },
  centerCard: {
    marginBottom: 20,
    borderColor: '#FFB300',
  },
  crownIcon: {
    width: 25,
    height: 25,
    position: 'absolute',
    top: -12,
  },
  topAvatar: {
    width: 55,
    height: 55,
    borderRadius: 30,
    marginBottom: 5,
  },
  topUserName: {
    fontSize: 13,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
    marginVertical: 2,
  },
  scoreRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  scoreText: {
    fontSize: 12,
    color: '#222',
    fontWeight: '600',
  },
  coinIcon: {
    marginLeft: 4,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderBottomWidth: 0.5,
    borderColor: '#ddd',
  },
  rankText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#333',
    width: 25,
  },
  listAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginHorizontal: 8,
  },
  listName: {
    flex: 1,
    fontSize: 13,
    fontWeight: '500',
    color: '#000',
  },
  trophyIcon: {
    fontSize: 14,
    marginLeft: 6,
  },
});

export default Daily;

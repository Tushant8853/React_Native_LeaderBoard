import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';
const { width } = Dimensions.get('window');
import leaderboardData from '../../../Data/data.json'; // Make sure the path is correct

const screenWidth = Dimensions.get('window').width;

const LeaderboardScreen = () => {
  const topRanks = leaderboardData.topRanks;
  const otherRanks = leaderboardData.otherRanks;

  const renderTopCard = (user, index) => (
    <View key={user.id} style={styles.topCard}>
      <Image source={{ uri: user.avatar }} style={styles.topAvatar} />
      <Text style={styles.topRank}>#{index + 1}</Text>
      <Text style={styles.topName}>{user.name}</Text>
      <Text style={styles.topScore}>{user.score} 🪙</Text>
    </View>
  );

  const renderUser = ({ item, index }) => (
    <View style={styles.userRow}>
      <Text style={styles.rankText}>{item.id}</Text>
      <Image source={{ uri: item.avatar }} style={styles.userAvatar} />
      <Text style={styles.userName}>{item.name}</Text>
      <Text style={styles.userScore}>{item.score} 🪙</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Fixed Top 3 */}
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

        {/* Ranks 4+ */}
        <FlatList
          data={otherRanks}
          renderItem={renderUser}
          keyExtractor={(item) => item.id.toString()}
          scrollEnabled={false}
          contentContainerStyle={styles.listContent}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
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
  topSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FFF3E0',
    paddingVertical: 20,
  },
  topCard: {
    alignItems: 'center',
    width: screenWidth / 3 - 20,
    paddingHorizontal: 5,
  },
  topAvatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: '#FFD700',
  },
  topRank: {
    marginTop: 6,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFA500',
  },
  topName: {
    fontSize: 13,
    textAlign: 'center',
    marginTop: 2,
  },
  topScore: {
    fontSize: 12,
    color: '#444',
    marginTop: 2,
  },
  listContent: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  rankText: {
    width: 30,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  userAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  userName: {
    flex: 1,
    fontSize: 14,
  },
  userScore: {
    fontSize: 14,
    color: '#333',
  },
});

export default LeaderboardScreen;

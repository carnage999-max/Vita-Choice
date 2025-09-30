import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Hero } from '../components/Hero';
import ProofBenefits from '../components/ProofBenefits';
import WhySupplementsFail from '../components/WhySupplementsFail';
import NewsletterSignup from '../components/NewsletterSignup';
import WaitlistModal from '../components/WaitlistModal';
import { COLORS } from '../constants';

export const HomeScreen: React.FC = () => {
  const navigation = useNavigation();
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);

  const handleShopPress = () => {
    // @ts-ignore - Navigation typing
    navigation.navigate('Shop');
  };

  const handleLearnMorePress = () => {
    // @ts-ignore - Navigation typing  
    navigation.navigate('About');
  };

  const handleOpenWaitlist = () => {
    setIsWaitlistModalOpen(true);
  };

  const handleCloseWaitlist = () => {
    setIsWaitlistModalOpen(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />
      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <Hero 
          onOpenWaitlist={handleOpenWaitlist}
          onShopPress={handleShopPress}
          onLearnMorePress={handleLearnMorePress}
        />
        
        <ProofBenefits />
        
        <WhySupplementsFail onLearnMore={handleLearnMorePress} />
        
        <NewsletterSignup />
      </ScrollView>

      <WaitlistModal 
        visible={isWaitlistModalOpen}
        onClose={handleCloseWaitlist}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollView: {
    flex: 1,
  },
});
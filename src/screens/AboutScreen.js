import React from 'react';
import {StyleSheet, ScrollView, Image, Text, View} from 'react-native';

export default function AboutScreen() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.conntainer}>
        <View style={styles.aboutImageContainer}>
          <Image
            style={styles.aboutImage}
            source={require('../assets/opeyemi.png')}
          />
        </View>
        <View style={styles.aboutTextContainer}>
          <Text style={styles.aboutText}>
            I am a Full-Stack Web Application developer with a passion for web
            technologies. I write robust, clean, re-usable and maintainable code
            and create fast, user friendly and scalable web applications. This
            also means I strive to follow best practices and use
            industry-standard tools, including git-workflow, Test Driven
            Development (Mocha, Chai, Sinon), Continous Integration (Travis-CI,
            AWS codepipeline, Coveralls, Codeclimate, Hound),linting (ESLint,
            Prettier), package management (Yarn, NPM), and modern build tools
            (Webpack, Babel) . I also love working with anything JAMSTACK. I
            have over 2 years professional experience working for a startup and
            other companies. I have also worked for clients of various sizes as
            a Freelancer. I also enjoy learning lots of stuff, I am currently
            learning PYTHON and plans to checkout FLUTTER and Golang in the
            nearest future When not working on a project or thinking about
            programming, I'm most likely seeing a movie, jogging, watching
            Chelsea F.C play football, or spending time with family and friends.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  conntainer: {
    flex: 1,
  },
  aboutImage: {
    width: 200,
    height: 200,
  },

  aboutImageContainer: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
  },

  aboutText: {
    fontSize: 18,
    lineHeight: 30,
  },

  aboutTextContainer: {
    paddingHorizontal: 15,
    marginBottom: 10,
  },
});

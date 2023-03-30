import React from 'react';
import { StyleSheet, View, Text } from '@react-pdf/renderer';
import Title, { TitleProps } from './Title';
import Profile, { ProfileProps } from './Profile';
import Jobs, { JobsProps } from './Jobs';
import Skills, { SkillsProps } from './Skills';
import Schools, { SchoolsProps } from './Schools';

const styles = StyleSheet.create({
  main: {
    width: "355px"
  },
});

interface Props {
    title: TitleProps;
    profile: ProfileProps;
    jobs: JobsProps;
    skills: SkillsProps;
    schools: SchoolsProps;
}

export default function Main({ title, profile, jobs, skills, schools }: Props) {
  return (
    <View style={styles.main}>
        <Title {...title} />
        <Profile {...profile} />
        <Jobs {...jobs} />
        <Skills {...skills} />
        <Schools {...schools} />
    </View>
  );
}

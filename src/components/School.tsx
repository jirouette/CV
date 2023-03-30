import React from 'react';
import { StyleSheet, Text } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  diploma: {
    fontFamily: "Roboto Mono",
    fontSize: "10px",
    fontWeight: 700,
    fontStyle: "normal",
    color: "#F95A55",
    marginBottom: "4px"
  },
  school: {
    fontFamily: "InterItalic",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "8px",
    color: "#141627",
    marginBottom: "8px"
  },
});

export interface SchoolProps {
    diploma: string;
    school: string;
    duration: string;
}

export default function School({ diploma, school, duration }: SchoolProps) {
  return (
    <>
        <Text style={styles.diploma}>{diploma}</Text>
        <Text style={styles.school}>
            {school}, {duration}
        </Text>
    </>
  );
}

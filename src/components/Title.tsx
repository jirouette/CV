import React from 'react';
import { StyleSheet, Text } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  name: {
    fontFamily: "Roboto Mono",
    fontSize: "24px",
    fontWeight: 700,
    fontStyle: "normal",
    color: "#F95A55",
    marginTop: "40px"
  },
  title: {
    fontFamily: "Roboto Mono",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "24px",
    color: "#1C1E31",
    marginBottom: "8px"
  }
});

export interface TitleProps {
    name: string;
    title: string;
}

export default function Title({ name, title }: TitleProps) {
  return (
    <>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.title}>{title}</Text>
    </>
  );
}

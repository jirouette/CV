import React from 'react';
import { StyleSheet, Text } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  title: {
    fontFamily: "Roboto Mono",
    fontSize: "12px",
    fontWeight: 700,
    fontStyle: "normal",
    color: "#F95A55",
    marginTop: "16px",
    marginBottom: "11px"
  },
  description: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "6px",
    color: "#1C1E31",
  }
});

export interface ProfileProps {
    title: string;
    description: string;
}

export default function Profile({ title, description }: ProfileProps) {
  return (
    <>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
    </>
  );
}

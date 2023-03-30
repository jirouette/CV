import React from 'react';
import { StyleSheet, Text } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  title: {
    fontFamily: "Roboto Mono",
    fontSize: "10px",
    fontWeight: 700,
    fontStyle: "normal",
    color: "#F95A55",
    marginBottom: "4px"
  },
  company: {
    fontFamily: "InterItalic",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "8px",
    color: "#141627",
    marginBottom: "8px"
  },
  description: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "6px",
    color: "#1C1E31",
    marginBottom: "12px"
  }
});

export interface JobProps {
    title: string;
    company: string;
    duration: string;
    description: string;
}

export default function Job({ title, company, duration, description }: JobProps) {
  return (
    <>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.company}>
            {company}, {duration}
        </Text>
        <Text style={styles.description}>{description}</Text>
    </>
  );
}

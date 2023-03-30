import React from 'react';
import { StyleSheet, Text } from '@react-pdf/renderer';
import School, { SchoolProps } from './School';

const styles = StyleSheet.create({
  title: {
    fontFamily: "Roboto Mono",
    fontSize: "12px",
    fontWeight: 700,
    fontStyle: "normal",
    color: "#F95A55",
    marginTop: "32px",
    marginBottom: "16px"
  },
});

export interface SchoolsProps {
    title: string;
    data: Array<SchoolProps>;
}

export default function Schools({ title, data }: SchoolsProps) {
  return (
    <>
        <Text style={styles.title}>{title}</Text>
        {data.map((school, _) => {
            return <School key={school.diploma+school.duration} {...school} />
        })}
    </>
  );
}

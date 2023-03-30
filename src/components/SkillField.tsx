import React from 'react';
import { StyleSheet, Text, View } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    field: {
        fontFamily: "InterBold",
        fontSize: "8px",
        fontWeight: 700,
        fontStyle: "normal",
        color: "#1C1E31",
        padding: "1px 4px 1px 4px",
        marginBottom: "11px",
        alignSelf: "flex-end"
    },
});

export interface SkillFieldProps {
    field: string;
}

export default function SkillField({ field }: SkillFieldProps) {
  return (
    <Text style={styles.field}>{field}</Text>
  );
}

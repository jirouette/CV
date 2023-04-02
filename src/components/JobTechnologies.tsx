import React from 'react';
import { StyleSheet, Text, View } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  technologies: {
    flexDirection: "row",
  },
  field: {
    fontFamily: "InterBold",
    fontSize: "6px",
    fontWeight: 700,
    fontStyle: "normal",
    color: "#1C1E31",
    padding: "1px 4px 1px 4px",
    marginBottom: "11px",
    alignSelf: "flex-end"
  },
  technology: {
    fontFamily: "Roboto Mono",
    fontWeight: 700,
    fontStyle: "normal",
    fontSize: "6px",
    color: "#F95A55",
    padding: "0px 4px 2px 4px",
  },
  technologiesList: {
    flexDirection: "row",
    marginLeft: "4px",
  }
});

export interface Props {
    technologies: Array<string>;
}

export default function JobTechnologies({ technologies }: Props) {
  return (
    <>
        <View style={styles.technologies}>
            <Text style={styles.field}>Technologies :</Text>
            <View style={styles.technologiesList}>
                {technologies.map((techno, i) => {
                    return <Text style={styles.technology}>{techno}</Text>;
                })}
            </View>
        </View>

    </>
  );
}

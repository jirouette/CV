import React from 'react';
import { StyleSheet, Text, View } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    skill: {
        marginBottom: "11px",
        flexDirection: "row"
    },
    skills: {
        flexDirection: "row",
    },
    technologyView: {
        flexDirection: "row",
        padding: "2px 4px 2px 4px",
        marginLeft: "4px",
    },
    technology: {
        fontFamily: "Roboto Mono",
        fontWeight: 700,
        fontStyle: "normal",
        fontSize: "6px",
        color: "#F95A55"
    },
    subtechnology: {
        marginLeft: "3px",
        fontFamily: "Roboto Mono Regular",
        fontWeight: 700,
        fontStyle: "normal",
        fontSize: "6px",
        color: "#F95A55"
    },
});

interface TechnologyProps {
    technology: string;
    subtechnology?: string;
}

export interface SkillProps {
    content: Array<TechnologyProps>;
}

function Technology({ technology, subtechnology }: TechnologyProps) {
    return (
        <View style={styles.technologyView}>
            <Text style={styles.technology}>{technology}</Text>
            {subtechnology && <Text style={styles.subtechnology}>({subtechnology})</Text>}
        </View>
    );
}

export default function Skill({ content }: SkillProps) {
  return (
    <View style={styles.skill}>
        <View style={styles.skills}>
            {content.map((skill, _) => {
                return <Technology key={skill.technology} {...skill} />
            })}
        </View>
    </View>
  );
}

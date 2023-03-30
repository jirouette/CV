import React from 'react';
import { StyleSheet, Text, View } from '@react-pdf/renderer';
import Skill, { SkillProps } from './Skill';
import SkillField from './SkillField';

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
  skills: {
    flexDirection: "row",
  }
});

interface SkillAndFieldProps extends SkillProps {
    field: string;
}

export interface SkillsProps {
    title: string;
    data: Array<SkillAndFieldProps>;
}

export default function Skills({ title, data }: SkillsProps) {
  return (
    <>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.skills}>
            <View>
                {data.map((skill, _) => {
                        return <SkillField key={skill.field} field={skill.field} />;
                })}
            </View>
            <View>
                {data.map((skill, i) => {
                    return <Skill key={i} content={skill.content} />;
                })}
            </View>
        </View>

    </>
  );
}

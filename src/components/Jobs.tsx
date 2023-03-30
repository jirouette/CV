import React from 'react';
import { StyleSheet, Text } from '@react-pdf/renderer';
import Job, { JobProps } from './Job';

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

export interface JobsProps {
    title: string;
    jobs: Array<JobProps>;
}

export default function Jobs({ title, jobs }: JobsProps) {
  return (
    <>
        <Text style={styles.title}>{title}</Text>
        {jobs.map((job, _) => {
            return <Job key={job.title+job.company+job.duration} {...job} />
        })}
    </>
  );
}

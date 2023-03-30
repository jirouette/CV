import React from 'react';
import { Link, StyleSheet, Text } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  title: {
    fontSize: '10px',
    fontWeight: 700,
    fontStyle: 'normal',
    fontFamily: 'Roboto Mono',
    color: '#F95A55',
    width: '121px',
    marginBottom: '4px'
  },
  field: {
    fontFamily: 'Roboto Mono',
    fontSize: '6px',
    fontWeight: 700,
    fontStyle: 'normal',
    color: '#1C1E31',
    marginBottom: '2px',
    marginTop: '8px'
  },
  content: {
    fontFamily: 'Inter',
    fontSize: '6px',
    fontWeight: 400,
    fontStyle: 'normal',
    color: '#1C1E31'
  },
  link: {
    textDecoration: 'none',
    color: '#1C1E31'
  }
});

export interface SideField {
  field: string;
  content: string;
  url?: string;
}

export interface FieldsProps {
    title: string;
    data: Array<SideField>;
}

function Field({ field, content, url }: SideField) {
  let text = <>{content}</>;
  if (url !== undefined) {
    text = <Link src={url} style={styles.link}>{content}</Link>;
  }

  return (
    <>
      <Text style={styles.field}>{field}</Text>
      <Text style={styles.content}>{text}</Text>
    </>
  );
}

export default function Fields({ title, data }: FieldsProps) {
  return (
    <>
        <Text style={styles.title}>{title}</Text>

        {data.map((field, _) => {
            return <Field {...field} />;
        })}
    </>
  );
}

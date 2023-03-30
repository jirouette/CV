import React from 'react';
import { StyleSheet, Text } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    title: {
      fontSize: '10px',
      fontWeight: 700,
      fontStyle: 'normal',
      fontFamily: 'Roboto Mono',
      color: '#F95A55',
      marginTop: '16px',
      marginBottom: '4px'
    },
    content: {
      fontSize: '6px',
      fontFamily: 'Inter',
      fontWeight: 400,
      fontStyle: 'normal',
      color: '#1C1E31',
      marginTop: '2px'
    }
});

export interface ListProps {
    title: string;
    data: Array<string>;
}

export default function List({ title, data }: ListProps) {
  return (
    <>
        <Text style={styles.title}>{title}</Text>

        {data.map((content, _) => {
            return <Text style={styles.content}>{content}</Text>
        })}
    </>
  );
}

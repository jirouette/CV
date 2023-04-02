import React from 'react';
import { StyleSheet, View, Image } from '@react-pdf/renderer';
import List from './List';
import Fields, { SideField } from './Fields';

const styles = StyleSheet.create({
  side: {
    flexBasis: '201px',
    paddingLeft: '39px',
    paddingTop: '7px'
  },
  logo: {
    width: '121px',
    height: '162px',
    marginBottom: '8px'
  }
});

export interface BlockProps {
    title: string;
    type: string;
    data: Array<string>|Array<SideField>;
}

export interface SideProps {
    blocks: Array<BlockProps>;
}

function Block({ title, type, data }: BlockProps) {
    if (type == "fields") {
        return <Fields title={title} data={data as Array<SideField>} />;
    }
    return <List title={title} data={data as Array<string>} />;
}

export default function Side({ blocks }: SideProps) {
  return (
    <View style={styles.side}>
        <Image src="logo.png" style={styles.logo} />
        {blocks.map((block, _) => {
            return <Block {...block} />;
        })}
    </View>
  );
}

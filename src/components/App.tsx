import React from 'react';
import { Page, Document, StyleSheet, PDFViewer, Font } from '@react-pdf/renderer';
import Side from './Side';
import Main from './Main';
import content from '../content.json';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF'
  },
});

Font.register({ family: 'Roboto Mono', src: "/RobotoMono-Bold.ttf" });
Font.register({ family: 'Roboto Mono Regular', src: "/RobotoMono-Regular.ttf" });
Font.register({ family: 'Inter', src: "/Inter-Regular.ttf" });
Font.register({ family: 'InterItalic', src: "/Inter-Italic.ttf" });
Font.register({ family: 'InterBold', src: "/Inter-Bold.ttf" });

function CV() {
  return (
    <Document {...content.document} >
      <Page size="A4" style={styles.page}>
        <Side blocks={content.side} />
        <Main
          title={content.title}
          profile={content.profile}
          jobs={content.pro}
          skills={content.skills}
          schools={content.schools}
        />
      </Page>
    </Document>
  );
}

export default function App() {
  return (
    <PDFViewer>
      <CV />
    </PDFViewer>
  );
}

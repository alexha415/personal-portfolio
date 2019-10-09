import React from 'react'
import {Document, Page} from 'react-pdf';
import resume from '../../images/resume_alex_ha.pdf';
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => {
  return (
    <div className="col col-md-4 offset-md-3">
      <Document file={resume}>
        <Page pageNumber={1} renderMode={'svg'} renderTextLayer={false}></Page>
      </Document>
    </div>
  )
}

export default Resume

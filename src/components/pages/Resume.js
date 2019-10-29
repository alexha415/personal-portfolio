import React, {useState, useRef, useEffect} from 'react'
import {Document, Page} from 'react-pdf';
import resume from '../../images/resume_alex_ha.pdf';
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => {
  const [fade, setFade] = useState('false');
const resume = useRef(null);

const handleScroll = (e) => {
  let boundingRect = resume.current.getBoundingClientRect()
  if(boundingRect.top > boundingRect.height - (boundingRect.height / 2) || boundingRect.bottom < 0 + (boundingRect.height / 1.5)){
    setFade(false);
  }else{
    setFade(true);
  }
}
useEffect( () => {
  window.addEventListener('scroll', handleScroll);
  //eslint-ignore-next-line
},[]);
  return (
    <div ref={resume} id = "resume" className={`resume col col-md-4 offset-md-3 ${fade ? 'section-fadeIn' : 'section-fadeOut'}`}>
      <Document file={resume}>
        <Page pageNumber={1} renderMode={'svg'} renderTextLayer={false}></Page>
      </Document>
    </div>
  )
}

export default Resume

// Import the main component
import { Viewer } from '@react-pdf-viewer/core'; // install this library
// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'; // install this library
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// Worker
import { Worker } from '@react-pdf-viewer/core'; // install this library
import { useState } from 'react/cjs/react.production.min';
import pdfFile from 'G:/my-app/src/pdf/NodeJS.pdf';


const Pdf = () => {
    const [defaultPdfFile]=useState(pdfFile);

    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    return (

        <div className='pdf-container'>
            {defaultPdfFile && <><Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
                <Viewer fileUrl={defaultPdfFile }
                plugins={[defaultLayoutPluginInstance]} />
       </Worker> </>}

            </div >
    )
}
export default Pdf;
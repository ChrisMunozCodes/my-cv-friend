import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import Inputs from './components/Inputs';
import DisplayPDF from './components/DisplayPDF';
import { PdfProps } from 'myTypes';

function App(props: PdfProps) {

  // State to track if the user is generating the PDF.
  const [showPDF, setShowPDF] = useState(false);

  return (
    <main className='min-w-screen min-h-screen box-border'>
      <Header setShowPDF={setShowPDF}/>
      {
        showPDF ? (
          <section className=' min-h-screen min-w-screen bg-green-400 flex justify-center align-center box-border'>
            <DisplayPDF />
          </section>          
        ) : (
          <section className=' min-h-screen bg-green-400 flex justify-center align-center box-border'>
            <Inputs pdf={(props.pdf.setNameInput, props.pdf.nameInput)} />
          </section>         
        )
      }
    </main>
  );
}

export default App

import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import Inputs from './components/Inputs';
import DisplayPDF from './components/DisplayPDF';
import capitalize from 'lodash/capitalize';
import { PdfType } from 'myTypes';


function App() {
  // State to track if the user is generating the PDF.
  const [showPDF, setShowPDF] = useState(false);

  const [pdf, setPdf] = useState<PdfType>({
    name: "",
    title: "",
    summary: "",
    job: "",
    start: "",
    end: "",
    phone: "",
    email: "",
    portfolio: "",
    github: "",
    linkedin: "",
    twitter: "",
    skills: "",
});

const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPdf({ ...pdf, [e.target.name]: e.target.value });
};

  return (
    <main className='min-w-screen min-h-screen box-border'>
      <Header setShowPDF={setShowPDF}/>
      {
        showPDF ? (
          <section className=' min-h-screen min-w-screen bg-green-400 flex justify-center align-center box-border'>
            <DisplayPDF pdf={pdf} />
          </section>          
        ) : (
          <section className=' min-h-screen bg-green-400 flex justify-center align-center box-border'>
            <div className="min-w-full min-h-full flex">
            <section className="w-3/5 flex flex-col">
                {Object.entries(pdf)
                    .slice(0, 3)
                    .map(([key, value]) => (
                        <input
                            key={key}
                            type="text"
                            name={key}
                            placeholder={capitalize(key)}
                            value={value}
                            onChange={onChange}
                            className="input input-bordered input-primary w-full max-w-xs m-5"
                        />
                    ))}
            </section>
            <section className="w-2/5">
                {Object.entries(pdf)
                    .slice(3)
                    .map(([key, value]) => (
                        <input
                            key={key}
                            type="text"
                            name={key}
                            placeholder={capitalize(key)}
                            value={value}
                            onChange={onChange}
                            className="input input-bordered input-primary w-full max-w-xs m-5"
                        />
                    ))}
            </section>
        </div>
          </section>         
        )
      }
    </main>
  );
}

export default App

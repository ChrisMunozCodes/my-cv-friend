declare module 'myTypes' {
    type PdfType = {
        nameInput?: any;
        setNameInput?: any;
        title: string;
        summary: string;
        job: string;
        start: string;
        end: string;
        phone: string;
        email: string;
        portfolio: string;
        github: string;
        linkedin: string;
        twitter: string;
        skills: string;
    };
  
    interface PdfProps {
        pdf: PdfType,
      }
  }
  
  module.exports = {
    PdfType,
    PdfProps,
};
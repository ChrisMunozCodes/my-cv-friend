declare module 'myTypes' {
    type PdfType = {
        name: string;
        title: string;
        summary: string;
        job: string;
        start: string;
        end: string;
        desc: string;
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
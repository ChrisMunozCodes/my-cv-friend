import React from "react"
import { PDFViewer } from '@react-pdf/renderer';
import Pdf from "./Pdf";
import { PdfProps } from "myTypes";


export default function DisplayPdf(props: PdfProps){

    return(
        <PDFViewer
            height={"screen"}
            width={"100%"}
            showToolbar={true}>
            <Pdf {...props}/>
        </PDFViewer>
    )
}
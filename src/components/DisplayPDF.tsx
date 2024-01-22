import React from "react"
import { PDFViewer } from '@react-pdf/renderer';
import Pdf from "./Pdf";


export default function DisplayPdf(){

    return(
        <PDFViewer
            height={"screen"}
            width={"100%"}
            showToolbar={true}>
            <Pdf />
        </PDFViewer>
    )
}
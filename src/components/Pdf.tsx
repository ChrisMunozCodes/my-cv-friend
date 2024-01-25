import { Document, Page, Text, View } from "@react-pdf/renderer";
import { createTw } from "react-pdf-tailwind";
import { PdfProps } from 'myTypes';

const tw = createTw({
    theme: {
      fontFamily: {
        sans: ["Comic Sans"],
      },
      extend: {
        colors: {
          custom: "#bada55",
        },
      },
    },
});

export default function Pdf(props: PdfProps) {

    return (
      <Document>
        <Page size="A4" style={tw("p-12")}>
          {/* Main Row */}
          <View style={tw("flex flex-row")}>
            
            {/* Left Column */}
            <View style={tw("w-9/12")}>
              {/* Header */}
              <View style={tw("mb-6")}>
                <Text style={tw("text-2xl font-bold p-0 m-0")}>{props.pdf.name}</Text>
                <Text style={tw("text-sm text-blue p-0 m-0")}>{props.pdf.title}</Text>
              </View>

              {/* Summary Section */}
              <View style={tw("mb-6")}>
                <Text style={tw("text-2xl font-bold")}>Summary</Text>
                <Text style={tw("text-sm")}>
                  {props.pdf.summary}
                </Text>
              </View>

              {/* Experience Section */}
              <View style={tw("mb-6")}>
                <Text style={tw("text-2xl font-bold")}>EXPERIENCE</Text>
                <Text style={tw("text-lg pt-2")}>{props.pdf.job}</Text>
                <Text style={tw("text-sm pt-1")}>{props.pdf.start} — {props.pdf.end}</Text>
                <Text style={tw("text-sm")}>
                  {props.pdf.desc}
                </Text>
              </View>
            </View>

            {/* Right Column */}
            <View style={tw("w-3/12 pl-6")}>
              {/* Contact Section */}
              <View style={tw("mb-6")}>
                <Text style={tw("text-2xl font-bold")}>Contact</Text>
                <Text style={tw("text-sm")}>{props.pdf.phone}</Text>
                <Text style={tw("text-sm")}>{props.pdf.email}</Text>
                <Text style={tw("text-sm")}>{props.pdf.portfolio}</Text>
                <Text style={tw("text-sm")}>{props.pdf.github}</Text>
                <Text style={tw("text-sm")}>{props.pdf.linkedin}</Text>
                <Text style={tw("text-sm")}>{props.pdf.twitter}</Text>
              </View>

              {/* Skills Section */}
              <View style={tw("mb-6")}>
                <Text style={tw("text-2xl font-bold")}>SKILLS</Text>
                <View style={tw("flex flex-row flex-wrap")}>
                  <Text style={tw("text-sm w-full")}>{props.pdf.skills}</Text>
                  {/* More skills */}
                </View>
              </View>
            </View>

          </View>
        </Page>
      </Document>
    )
}
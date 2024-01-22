import React from "react"
import { Document, Page, Text, View, StyleSheet, Svg, Path } from "@react-pdf/renderer";
import { createTw } from "react-pdf-tailwind";

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

interface PdfProps {
  name: string;
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
}

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
          <Text style={tw("text-2xl font-bold p-0 m-0")}>{props.name}</Text>
          <Text style={tw("text-sm text-blue p-0 m-0")}>Title</Text>
        </View>

        {/* Summary Section */}
        <View style={tw("mb-6")}>
          <Text style={tw("text-2xl font-bold")}>Summary</Text>
          <Text style={tw("text-sm")}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat molestias...
          </Text>
        </View>

        {/* Experience Section */}
        <View style={tw("mb-6")}>
          <Text style={tw("text-2xl font-bold")}>EXPERIENCE</Text>
          <Text style={tw("text-lg pt-2")}>Job Title</Text>
          <Text style={tw("text-sm pt-1")}>Start — End</Text>
          <Text style={tw("text-sm")}>
            Desc
          </Text>
        </View>
      </View>

      {/* Right Column */}
      <View style={tw("w-3/12 pl-6")}>
        {/* Contact Section */}
        <View style={tw("mb-6")}>
          <Text style={tw("text-2xl font-bold")}>Contact</Text>
          <Text style={tw("text-sm")}>Phone</Text>
          <Text style={tw("text-sm")}>Email</Text>
          <Text style={tw("text-sm")}>Portfolio</Text>
          <Text style={tw("text-sm")}>Github</Text>
          <Text style={tw("text-sm")}>Linkedin</Text>
          <Text style={tw("text-sm")}>Twitter</Text>
        </View>

        {/* Skills Section */}
        <View style={tw("mb-6")}>
          <Text style={tw("text-2xl font-bold")}>SKILLS</Text>
          <View style={tw("flex flex-row flex-wrap")}>
            <Text style={tw("text-sm w-full")}>HTML</Text>
            {/* More skills */}
          </View>
        </View>
      </View>

    </View>
  </Page>
</Document>


    )
}
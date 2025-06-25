import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
  senderName: string;
  ip: string;
  extra: string;
};

export default function ContactFormEmail({
  message,
  senderEmail,
  senderName,
  ip,
  extra,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New contact form message</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white border border-black my-10 px-10 py-6 rounded-md">
              <Heading className="text-xl font-bold mb-4">
                You received a new message
              </Heading>

              <Text className="mb-4 whitespace-pre-line">{message}</Text>

              <Hr />

              <Text><strong>Sender Name:</strong> {senderName}</Text>
              <Text><strong>Sender Email:</strong> {senderEmail}</Text>
              <Text><strong>IP Address:</strong> {ip}</Text>
              <Text><strong>Extra:</strong> {extra}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

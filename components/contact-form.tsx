"use client";

import { useSyncExternalStore } from "react";
import { Form } from "./form";
import { contactFields, topicParams } from "@/content/contact";

const subscribe = () => () => {};
const readTopic = () => new URLSearchParams(window.location.search).get("topic");
const serverTopic = () => null;

/** The contact form. `?topic=` picks the matching topic once the page is on the client. */
export function ContactForm() {
  const topic = useSyncExternalStore(subscribe, readTopic, serverTopic);
  return (
    <Form
      id="contactForm"
      fields={contactFields}
      submitLabel="Send message"
      title="Send us a message"
      intro="All fields are needed so we can reply."
      bordered
      preselect={topic ? topicParams[topic] : null}
    />
  );
}

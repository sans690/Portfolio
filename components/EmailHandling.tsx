import { useState } from "react";
import type { FormEvent } from "react";
import emailjs from "@emailjs/browser";

export interface EmailFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface EmailState {
  isSending: boolean;
  statusMessage: string;
  statusType: "success" | "error" | "";
}

export const useEmailSubmit = () => {
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState<"success" | "error" | "">("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const subject = String(formData.get("subject") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!name || !email || !subject || !message) {
      setStatusType("error");
      setStatusMessage("Please complete all fields before submitting.");
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatusType("error");
      setStatusMessage("Email service is not configured yet.");
      return;
    }

    try {
      setIsSending(true);
      setStatusMessage("");
      setStatusType("");

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: name,
          from_email: email,
          reply_to: email,
          subject,
          message,
        },
        { publicKey },
      );

      setStatusType("success");
      setStatusMessage("Thanks! Your message was sent successfully.");
      form.reset();
    } catch {
      setStatusType("error");
      setStatusMessage("Sorry, there was an issue sending your message.");
    } finally {
      setIsSending(false);
    }
  };

  return {
    handleSubmit,
    isSending,
    statusMessage,
    statusType,
  };
};

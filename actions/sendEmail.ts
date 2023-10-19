"use server";
import { Resend } from "resend";
import { validateData, getErrorMessage } from "@/lib/utils";
import React from "react";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateData(senderEmail, 500)) {
    return { error: "Invalid sender email" };
  }

  if (!validateData(message, 5000)) {
    return { error: "Invalid message" };
  }

  try {
    await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>",
      to: "nischalmainali21+resend@gmail.com",
      subject: "Portfolio Contact Form Message",
      reply_to: senderEmail as string,
      // react: React.createElement(ContactFormEmail, {
      //   message: message as string,
      //   senderEmail: senderEmail as string,
      // }),
      text: message as string,
    });
  } catch (error: unknown) {
    return { error: getErrorMessage(error) };
  }
};

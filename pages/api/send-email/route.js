import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { email, selectedDateTime } = await request.json();

    // Validate input
    if (!email || !selectedDateTime) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Send email
    const { data, error } = await resend.emails.send({
      from: 'MedConnect <onboarding@resend.dev>',
      to: process.env.YOUR_EMAIL,
      subject: 'New Consultation Request',
      html: `
        <h1>New Consultation Scheduled</h1>
        <p>Date & Time: ${new Date(selectedDateTime).toLocaleString()}</p>
        <p>Client Email: ${email}</p>
      `
    });

    if (error) {
      return NextResponse.json(
        { error: "Email sending failed" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true },
      { status: 200 }
    );

  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
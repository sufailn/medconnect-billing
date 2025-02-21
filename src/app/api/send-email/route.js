import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { email, selectedDateTime } = await req.json();
    
    console.log('Received request:', { email, selectedDateTime });

    // Validate inputs
    if (!email || !selectedDateTime) {
      console.error('Validation failed: Missing fields');
      return NextResponse.json(
        { error: "Email and date/time are required" },
        { status: 400 }
      );
    }

    // Send email
    const { error } = await resend.emails.send({
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
      console.error('Resend Error:', error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    console.log('Email sent successfully');
    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Unhandled Error:', error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
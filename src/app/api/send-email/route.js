// app/api/send-email/route.js
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req) {
  try {
    // 1. Initialize Resend inside handler
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    // 2. Parse and validate request body
    const { email, selectedDateTime } = await req.json();
    
    if (!email || !selectedDateTime) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // 3. Send email with error handling
    const { data, error } = await resend.emails.send({
      from: 'MedConnect <onboarding@resend.dev>',
      to: process.env.YOUR_EMAIL,
      subject: 'New Consultation Request',
      html: `
        <h2>New Appointment Scheduled</h2>
        <p><strong>Date:</strong> ${new Date(selectedDateTime).toLocaleString()}</p>
        <p><strong>Client Email:</strong> ${email}</p>
      `
    });

    if (error) {
      console.error('Resend API Error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Server Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
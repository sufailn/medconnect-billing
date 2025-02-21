// app/api/send-email/route.js
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { email, selectedDateTime } = await req.json();

    // Validate inputs
    if (!validateEmail(email) || !validateDate(selectedDateTime)) {
      return NextResponse.json(
        { error: "Invalid input format" },
        { status: 400 }
      );
    }

    // Send email
    const { error } = await resend.emails.send({
      from: 'MedConnect <onboarding@resend.dev>',
      to: process.env.YOUR_EMAIL,
      subject: `New Consultation - ${selectedDateTime}`,
      html: `
        <h2>New Appointment</h2>
        <p><strong>Date:</strong> ${new Date(selectedDateTime).toLocaleString()}</p>
        <p><strong>Client Email:</strong> ${email}</p>
      `
    });

    return error 
      ? NextResponse.json({ error: "Email failed" }, { status: 500 })
      : NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}

// Validation helpers
function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateDate(dateString) {
  return !isNaN(Date.parse(dateString));
}
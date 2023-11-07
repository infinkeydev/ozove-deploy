import { NextResponse } from "next/server";
import { sendMail, sendMailToCustomer } from "./sendmail";

export async function GET(req) {
  return NextResponse.json({
    status: 200,
    message: "Success",
  });
}

export async function POST(req) {
  try {
    const body = await req.json();
    let html = "<p>Dear Oz-Ove Admin,</p>";
    html += "<p>Please find customer details as below</p>";

    switch (body["type"]) {
      case 1:
        html += `<p>User Type: Individual</p>`;
        html += `<p>Full Name: ${body.full_name}</p>`;
        html += `<p>DOB: ${body.date_of_birth}</p>`;
        html += `<p>Occupation!: ${body.occupation}</p>`;
        html += `<p>Contact No: ${body.contact_no}</p>`;
        html += `<p>Email: ${body.email}</p>`;
        break;
      case 2:
        html += `<p>User Type: Business</p>`;
        html += `<p>Full Name: ${body.full_name}</p>`;
        html += `<p>Company Name: ${body.company_name}</p>`;
        html += `<p>Occupation!: ${body.job_title}</p>`;
        html += `<p>Contact No: ${body.contact_no}</p>`;
        html += `<p>Email: ${body.email}</p>`;
        break;
      case 3:
        html += `<p>Full Name: ${body.full_name}</p>`;
        html += `<p>Role: ${body.role}</p>`;
        html += `<p>Company Name: ${body.company_name}</p>`;
        html += `<p>Contact No: ${body.contact_no}</p>`;
        html += `<p>Email: ${body.email}</p>`;
        html += `<p>Region: ${body.region}</p>`;
        html += `<p>No of Driver: ${body.no_of_driver}</p>`;
        break;
      case 4:
        html += `<p>User Type: Driver</p>`;
        html += `<p>Full Name: ${body.full_name}</p>`;
        html += `<p>Contact No: ${body.contact_no}</p>`;
        html += `<p>Email: ${body.email}</p>`;
        html += `<p>Vehicle Type: ${body.vehicle_type}</p>`;
        break;
      case 5:
        html += `<p>Full Name: ${body.full_name}</p>`;
        html += `<p>Contact No: ${body.contact_no}</p>`;
        html += `<p>Email: ${body.email}</p>`;
        html += `<p>Plan Type: ${body.plan_type}</p>`;
        break;
      default:
        break;
    }

    html +=
      "<br /><br /><p>Regards<br /><span>OZ Ove © 2023 | Journeying Forward, Together.</span></p>";
    await sendMail(body.subject, html);

    let customerHtml = `<p>Dear Oz-Ove ${body.full_name},</p>`;
    customerHtml +=
      "<p>We appreciate your interest in OZ Ove. As we endeavor to redefine urban mobility in Australia, your involvement is invaluable to us. We look forward to keeping you updated on our advancements and innovations.</p>";
    customerHtml += "<p>Sincerely,</p>";
    customerHtml += "<p>Team OZ Ove</p>";
    customerHtml += `<p><a href="https://ozove.com.au" target="_blank">ozove.com.au</a></p>`;
    await sendMailToCustomer("Welcome to OZ Ove", body.email, customerHtml);
    return NextResponse.json({
      status: 200,
      message: "Mail Sent Successfully",
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: "Mail Not Sent",
    });
  }
}


import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ConsultationEmailRequest {
  name: string;
  phoneNumber: string;
  email: string;
  companyName: string;
  date: string;
  timeSlot: string;
  businessDescription: string;
  submittedAt: string;
}

const formatBookingDataAsHTML = (data: ConsultationEmailRequest) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 800px; margin: 0 auto; padding: 20px; }
            .header { background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
            .data-table { width: 100%; border-collapse: collapse; margin: 20px 0; }
            .data-table th, .data-table td { border: 1px solid #ddd; padding: 12px; text-align: left; }
            .data-table th { background-color: #f8f9fa; font-weight: bold; }
            .data-table tr:nth-child(even) { background-color: #f9f9f9; }
            .footer { margin-top: 30px; padding: 20px; background-color: #e9ecef; border-radius: 8px; }
            .urgent { color: #dc3545; font-weight: bold; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>🚀 New Consultation Booking Request</h1>
                <p class="urgent">⏰ Please contact within 24 hours to confirm the consultation</p>
            </div>
            
            <table class="data-table">
                <tr>
                    <th>📋 Field</th>
                    <th>📝 Information</th>
                </tr>
                <tr>
                    <td><strong>👤 Customer Name</strong></td>
                    <td>${data.name}</td>
                </tr>
                <tr>
                    <td><strong>📱 Phone Number</strong></td>
                    <td>${data.phoneNumber}</td>
                </tr>
                <tr>
                    <td><strong>✉️ Email Address</strong></td>
                    <td><a href="mailto:${data.email}">${data.email}</a></td>
                </tr>
                <tr>
                    <td><strong>🏢 Company Name</strong></td>
                    <td>${data.companyName}</td>
                </tr>
                <tr>
                    <td><strong>📅 Consultation Date</strong></td>
                    <td>${data.date}</td>
                </tr>
                <tr>
                    <td><strong>🕐 Preferred Time</strong></td>
                    <td>${data.timeSlot}</td>
                </tr>
                <tr>
                    <td><strong>💼 Business Description</strong></td>
                    <td>${data.businessDescription || 'Not provided'}</td>
                </tr>
                <tr>
                    <td><strong>📤 Booking Submitted</strong></td>
                    <td>${data.submittedAt}</td>
                </tr>
            </table>

            <div class="footer">
                <h3>🎯 Next Steps:</h3>
                <ul>
                    <li>Contact the customer within 24 hours using their preferred method</li>
                    <li>Confirm the consultation date and time</li>
                    <li>Send meeting details (Zoom link, location, etc.)</li>
                    <li>Prepare consultation materials based on their business description</li>
                </ul>
                
                <p><strong>Customer Contact Options:</strong></p>
                <ul>
                    <li>📞 Call: ${data.phoneNumber}</li>
                    <li>✉️ Email: <a href="mailto:${data.email}">${data.email}</a></li>
                    <li>💬 WhatsApp: ${data.phoneNumber}</li>
                </ul>
            </div>
        </div>
    </body>
    </html>
  `;
};

const handler = async (req: Request): Promise<Response> => {
  console.log("🚀 === EDGE FUNCTION CALLED ===");
  console.log("📅 Timestamp:", new Date().toISOString());
  console.log("🌐 Request method:", req.method);
  console.log("📍 Request URL:", req.url);
  console.log("📋 Request headers:", Object.fromEntries(req.headers.entries()));

  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    console.log("✅ Handling CORS preflight request");
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log("📧 Starting email processing...");
    
    // Check if RESEND_API_KEY is available
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (!resendApiKey) {
      console.error("❌ RESEND_API_KEY is not set in environment variables");
      throw new Error("RESEND_API_KEY is not configured");
    }
    console.log("✅ RESEND_API_KEY is available (length:", resendApiKey.length, ")");

    // Read request body
    console.log("📖 Reading request body...");
    const rawBody = await req.text();
    console.log("📄 Raw body:", rawBody);
    
    let bookingData: ConsultationEmailRequest;
    try {
      bookingData = JSON.parse(rawBody);
      console.log("✅ Successfully parsed JSON body");
    } catch (parseError) {
      console.error("❌ Failed to parse JSON:", parseError);
      throw new Error("Invalid JSON in request body");
    }

    console.log("📝 Received booking data:", JSON.stringify(bookingData, null, 2));

    // Validate required fields
    const requiredFields = ['name', 'phoneNumber', 'email', 'companyName', 'date', 'timeSlot'];
    for (const field of requiredFields) {
      if (!bookingData[field as keyof ConsultationEmailRequest]) {
        console.error(`❌ Missing required field: ${field}`);
        throw new Error(`Missing required field: ${field}`);
      }
    }
    console.log("✅ All required fields are present");

    const htmlContent = formatBookingDataAsHTML(bookingData);
    console.log("📄 Generated HTML content (length):", htmlContent.length);

    console.log("📤 Attempting to send email via Resend...");
    console.log("🎯 Sending to: bizthozhan@gmail.com");
    console.log("📮 From: Biz Thozhan <onboarding@resend.dev>");
    console.log("📝 Subject: New Consultation Request -", bookingData.companyName, "(", bookingData.name, ")");
    
    const emailResponse = await resend.emails.send({
      from: "Biz Thozhan <onboarding@resend.dev>",
      to: ["bizthozhan@gmail.com"],
      subject: `🚀 New Consultation Request - ${bookingData.companyName} (${bookingData.name})`,
      html: htmlContent,
      reply_to: bookingData.email,
    });

    console.log("📧 Resend API response:", JSON.stringify(emailResponse, null, 2));

    if (emailResponse.error) {
      console.error("❌ Resend API error:", emailResponse.error);
      throw new Error(`Resend API error: ${JSON.stringify(emailResponse.error)}`);
    }

    console.log("✅ Email sent successfully!");
    console.log("📨 Email ID:", emailResponse.data?.id);

    const successResponse = { 
      success: true, 
      message: "Consultation booking email sent successfully",
      emailId: emailResponse.data?.id,
      timestamp: new Date().toISOString()
    };

    console.log("🎉 Returning success response:", successResponse);

    return new Response(
      JSON.stringify(successResponse), 
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );

  } catch (error: any) {
    console.error("💥 === ERROR OCCURRED ===");
    console.error("🔥 Error in send-consultation-email function:", error);
    console.error("📛 Error name:", error.name);
    console.error("💬 Error message:", error.message);
    console.error("📚 Error stack:", error.stack);
    
    const errorResponse = { 
      success: false, 
      error: error.message || "Failed to send email",
      timestamp: new Date().toISOString(),
      details: error.stack || "No additional details available"
    };

    console.log("❌ Returning error response:", errorResponse);
    
    return new Response(
      JSON.stringify(errorResponse),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);

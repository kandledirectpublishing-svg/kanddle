import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  service: z.string().optional(),
  message: z.string().optional(),
});

// ─── Email Recipients ────────────────────────────────────────────────────────
const MAIN_INBOX   = "kandledirectpublishing@gmail.com"; // Primary business inbox
const CC_RECIPIENTS = [
  "aliahk.developer@gmail.com",
  "khalid8sharpk@gmail.com",
  "muhammadalisoomr110@gmail.com",
];

// ─── Email HTML Templates ────────────────────────────────────────────────────

function buildInternalEmail(
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
  service?: string,
  message?: string
): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:32px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);max-width:100%;">

        <!-- Header -->
        <tr>
          <td style="background:#1F2937;padding:32px 40px;text-align:center;">
            <p style="color:#F97316;font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;margin:0 0 8px 0;">New Enquiry</p>
            <h1 style="color:#ffffff;font-size:26px;font-weight:800;margin:0;">Kandle Direct Publishing</h1>
            <p style="color:#9CA3AF;font-size:13px;margin:8px 0 0 0;">A client has submitted the contact form</p>
          </td>
        </tr>

        <!-- Accent Bar -->
        <tr><td style="background:#F97316;height:4px;"></td></tr>

        <!-- Body -->
        <tr>
          <td style="padding:40px;">

            <!-- Client Info Table -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
              <tr>
                <td style="padding-bottom:12px;">
                  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F9FAFB;border-radius:8px;border:1px solid #E5E7EB;overflow:hidden;">
                    <tr style="border-bottom:1px solid #E5E7EB;">
                      <td style="padding:14px 20px;font-size:12px;font-weight:700;color:#6B7280;text-transform:uppercase;letter-spacing:1px;width:140px;background:#F3F4F6;">Client Name</td>
                      <td style="padding:14px 20px;font-size:15px;color:#1F2937;font-weight:600;">${firstName} ${lastName}</td>
                    </tr>
                    <tr style="border-bottom:1px solid #E5E7EB;">
                      <td style="padding:14px 20px;font-size:12px;font-weight:700;color:#6B7280;text-transform:uppercase;letter-spacing:1px;background:#F3F4F6;">Email</td>
                      <td style="padding:14px 20px;"><a href="mailto:${email}" style="color:#F97316;text-decoration:none;font-size:15px;font-weight:600;">${email}</a></td>
                    </tr>
                    <tr style="border-bottom:1px solid #E5E7EB;">
                      <td style="padding:14px 20px;font-size:12px;font-weight:700;color:#6B7280;text-transform:uppercase;letter-spacing:1px;background:#F3F4F6;">Phone</td>
                      <td style="padding:14px 20px;"><a href="tel:${phone}" style="color:#1F2937;text-decoration:none;font-size:15px;font-weight:600;">${phone}</a></td>
                    </tr>
                    <tr ${!service ? "" : 'style="border-bottom:1px solid #E5E7EB;"'}>
                      <td style="padding:14px 20px;font-size:12px;font-weight:700;color:#6B7280;text-transform:uppercase;letter-spacing:1px;background:#F3F4F6;">Service</td>
                      <td style="padding:14px 20px;font-size:15px;color:#1F2937;">${service || '<span style="color:#9CA3AF;font-style:italic;">Not specified</span>'}</td>
                    </tr>
                    ${message ? `
                    <tr>
                      <td style="padding:14px 20px;font-size:12px;font-weight:700;color:#6B7280;text-transform:uppercase;letter-spacing:1px;background:#F3F4F6;vertical-align:top;">Message</td>
                      <td style="padding:14px 20px;font-size:15px;color:#374151;line-height:1.6;">${message.replace(/\n/g, "<br>")}</td>
                    </tr>` : ""}
                  </table>
                </td>
              </tr>
            </table>

            <!-- Quick Reply CTA -->
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td align="center" style="padding:8px 0;">
                  <a href="mailto:${email}?subject=Re: Your Publishing Enquiry — Kandle Direct&body=Hi ${firstName},%0A%0AThank you for reaching out to Kandle Direct Publishing.%0A%0A"
                     style="display:inline-block;background:#F97316;color:#ffffff;font-size:15px;font-weight:700;text-decoration:none;padding:14px 32px;border-radius:8px;letter-spacing:0.5px;">
                    Reply to ${firstName} →
                  </a>
                </td>
              </tr>
            </table>

          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#F9FAFB;padding:24px 40px;border-top:1px solid #E5E7EB;text-align:center;">
            <p style="color:#9CA3AF;font-size:12px;margin:0;">This notification was sent automatically from <strong>kandledirectpublishing.com</strong></p>
            <p style="color:#9CA3AF;font-size:12px;margin:4px 0 0 0;">© ${new Date().getFullYear()} Kandle Direct Publishing · 173 Dallow Rd, Luton, LU1 1NX, UK</p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function buildAutoReplyEmail(firstName: string, service?: string): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:32px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);max-width:100%;">

        <!-- Header -->
        <tr>
          <td style="background:#1F2937;padding:40px;text-align:center;">
            <h1 style="color:#ffffff;font-size:28px;font-weight:800;margin:0 0 8px 0;">Thank You, ${firstName}!</h1>
            <p style="color:#D1D5DB;font-size:15px;margin:0;">We've received your enquiry and we'll be in touch shortly.</p>
          </td>
        </tr>
        <tr><td style="background:#F97316;height:4px;"></td></tr>

        <!-- Body -->
        <tr>
          <td style="padding:40px;">
            <p style="color:#374151;font-size:16px;line-height:1.7;margin:0 0 20px 0;">
              Hi <strong>${firstName}</strong>,
            </p>
            <p style="color:#374151;font-size:16px;line-height:1.7;margin:0 0 20px 0;">
              Thank you for reaching out to <strong>Kandle Direct Publishing</strong>. We've received your${service ? ` enquiry about <strong>${service}</strong>` : " message"} and a member of our publishing team will be in contact with you within <strong>1 business day</strong>.
            </p>

            <!-- What Happens Next -->
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#FFF7ED;border:1px solid #FED7AA;border-radius:8px;margin-bottom:28px;">
              <tr><td style="padding:24px 28px;">
                <p style="color:#92400E;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:2px;margin:0 0 16px 0;">What Happens Next</p>
                <table cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="padding:6px 0;vertical-align:top;">
                      <span style="display:inline-block;background:#F97316;color:#fff;border-radius:50%;width:22px;height:22px;text-align:center;line-height:22px;font-size:12px;font-weight:700;margin-right:12px;">1</span>
                      <span style="color:#374151;font-size:14px;">Our team reviews your request</span>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:6px 0;vertical-align:top;">
                      <span style="display:inline-block;background:#F97316;color:#fff;border-radius:50%;width:22px;height:22px;text-align:center;line-height:22px;font-size:12px;font-weight:700;margin-right:12px;">2</span>
                      <span style="color:#374151;font-size:14px;">A publishing expert contacts you within 1 business day</span>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:6px 0;vertical-align:top;">
                      <span style="display:inline-block;background:#F97316;color:#fff;border-radius:50%;width:22px;height:22px;text-align:center;line-height:22px;font-size:12px;font-weight:700;margin-right:12px;">3</span>
                      <span style="color:#374151;font-size:14px;">Free consultation call to discuss your project</span>
                    </td>
                  </tr>
                </table>
              </td></tr>
            </table>

            <p style="color:#6B7280;font-size:14px;margin:0 0 24px 0;">
              In the meantime, if you have an urgent question, you can reach us directly:
            </p>

            <!-- Contact Details -->
            <table cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
              <tr>
                <td style="padding:6px 16px 6px 0;color:#374151;font-size:14px;">📞</td>
                <td style="padding:6px 0;"><a href="tel:+447922656521" style="color:#F97316;text-decoration:none;font-size:14px;font-weight:600;">+44 7922 656521</a></td>
              </tr>
              <tr>
                <td style="padding:6px 16px 6px 0;color:#374151;font-size:14px;">✉️</td>
                <td style="padding:6px 0;"><a href="mailto:kandledirectpublishing@gmail.com" style="color:#F97316;text-decoration:none;font-size:14px;font-weight:600;">kandledirectpublishing@gmail.com</a></td>
              </tr>
            </table>

            <!-- CTA -->
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td align="center">
                  <a href="https://www.kandledirectpublishing.com/services"
                     style="display:inline-block;background:#1F2937;color:#ffffff;font-size:14px;font-weight:700;text-decoration:none;padding:12px 28px;border-radius:8px;">
                    Explore Our Services →
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#F9FAFB;padding:24px 40px;border-top:1px solid #E5E7EB;text-align:center;">
            <p style="color:#9CA3AF;font-size:12px;margin:0 0 4px 0;font-weight:600;">Kandle Direct Publishing</p>
            <p style="color:#9CA3AF;font-size:12px;margin:0;">173 Dallow Rd, Luton, LU1 1NX, UK</p>
            <p style="color:#9CA3AF;font-size:11px;margin:12px 0 0 0;">You received this email because you submitted a form at kandledirectpublishing.com</p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

// ─── API Handler ─────────────────────────────────────────────────────────────

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validation failed", details: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { firstName, lastName, email, phone, service, message } = parsed.data;

    const hasSmtp =
      process.env.SMTP_USER &&
      process.env.SMTP_PASS;

    if (hasSmtp) {
      const nodemailer = await import("nodemailer");

      // Gmail transporter using kandledirectpublishing@gmail.com
      const transporter = nodemailer.default.createTransport({
        service: "gmail",
        auth: {
          user: process.env.SMTP_USER, // kandledirectpublishing@gmail.com
          pass: process.env.SMTP_PASS, // Gmail App Password (16-char)
        },
      });

      const subject = `📬 New Enquiry: ${firstName} ${lastName}${service ? ` — ${service}` : ""}`;

      // 1. Send internal notification to the team
      await transporter.sendMail({
        from: `"Kandle Direct Website" <${process.env.SMTP_USER}>`,
        to: MAIN_INBOX,
        cc: CC_RECIPIENTS.join(", "),
        subject,
        html: buildInternalEmail(firstName, lastName, email, phone, service, message),
      });

      // 2. Send auto-reply confirmation to the client
      await transporter.sendMail({
        from: `"Kandle Direct Publishing" <${process.env.SMTP_USER}>`,
        to: email,
        subject: `We've received your enquiry, ${firstName} — Kandle Direct Publishing`,
        html: buildAutoReplyEmail(firstName, service),
      });

      console.log(`✅ Emails sent for enquiry from ${firstName} ${lastName} <${email}>`);
    } else {
      // Dev fallback — log to terminal
      console.log("\n📬 ====== NEW CONTACT FORM SUBMISSION ======");
      console.log(`  Name:      ${firstName} ${lastName}`);
      console.log(`  Email:     ${email}`);
      console.log(`  Phone:     ${phone}`);
      console.log(`  Service:   ${service || "Not specified"}`);
      console.log(`  Message:   ${message || "—"}`);
      console.log(`  → Would send TO:  ${MAIN_INBOX}`);
      console.log(`  → Would CC:       ${CC_RECIPIENTS.join(", ")}`);
      console.log("============================================\n");
      console.log("⚠️  Add SMTP_USER and SMTP_PASS to .env.local to activate real email.");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

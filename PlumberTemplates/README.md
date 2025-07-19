# 🚰 Plumber Website Mockup System

## Quick Setup & Usage Guide

### 📁 Folder Structure
```
ClientMockups/PlumberTemplates/
├── templates/                    # HTML template files
├── assets/
│   ├── css/                     # Styling files
│   ├── images/                  # Stock plumber images
│   └── logos/                   # Client logos you add
├── generated-mockups/           # Output folder (auto-created)
├── generate-mockup.js           # Generator script
└── README.md                    # This file
```

### 🚀 Quick Start

1. **Generate a mockup for a new client:**
   ```bash
   cd ClientMockups/PlumberTemplates
   node generate-mockup.js "Smith Plumbing" "(817) 555-0123" "Fort Worth"
   ```

2. **With custom logo:**
   ```bash
   node generate-mockup.js "Elite Plumbers" "(214) 555-0456" "Dallas" "TX" "./assets/logos/elite-logo.png"
   ```

3. **Full customization:**
   ```bash
   node generate-mockup.js "ABC Plumbing Co" "(972) 555-7890" "Arlington" "TX" "./assets/logos/abc-logo.png" "25"
   ```

### 📱 Templates Available

#### **Template 1: Professional Blue**
- Clean, corporate design
- Focus on trust and reliability
- Great for established companies
- File: `template-1-professional.html`

#### **Template 2: Local Expert**
- Warm, community-focused design
- Emphasis on local service
- Perfect for family businesses
- File: `template-2-local-expert.html`

### 🎨 Customization Variables

The system automatically replaces these placeholders:

- `{{COMPANY_NAME}}` - Business name
- `{{PHONE_NUMBER}}` - Primary phone number
- `{{CITY_NAME}}` - Service city
- `{{STATE}}` - State (defaults to TX)
- `{{LOGO_URL}}` - Path to logo image
- `{{YEARS_EXPERIENCE}}` - Years in business (defaults to 15)

### 📸 Adding Client Logos

1. Save the client's logo in `assets/logos/`
2. Use formats: `.png`, `.jpg`, `.svg`
3. Recommended size: 200x100px or similar ratio
4. Use the path in the generator: `./assets/logos/client-logo.png`

### 💡 Sales Tips

#### **Before the Call:**
- Research the company name and area
- Check if they have a logo online
- Note any specific services they offer

#### **During the Call:**
- "I'd like to show you exactly what a modern website could do for [Company Name]"
- "Give me 5 minutes to create a custom homepage mockup for you"
- "I'll use your company name and branding to show you the vision"

#### **After Creating Mockup:**
- Send via email or share screen
- Point out mobile responsiveness
- Highlight call-to-action buttons
- Show the professional trust elements

### 🛠️ Quick Modifications

#### **Change Template Colors:**
Edit the CSS files in `assets/css/`:
- `template-styles.css` for Template 1
- `template-2-styles.css` for Template 2

#### **Add More Templates:**
1. Copy an existing template
2. Modify the design and content
3. Update the generator script to include it

#### **Custom Content:**
Modify the HTML templates to include:
- Different services
- Specific testimonials
- Local area references
- Industry specializations

### 📈 Conversion Optimization

Each template includes:
- ✅ Multiple phone number placements
- ✅ Trust signals (licensed, insured, reviews)
- ✅ Clear call-to-action buttons
- ✅ Emergency service emphasis
- ✅ Local area targeting
- ✅ Social proof (testimonials)
- ✅ Mobile-first design

### 🎯 Target Industries

Current focus: **Plumbers**
- Emergency repair emphasis
- Local service area focus
- Trust and licensing highlights
- Before/after potential

**Coming Soon:**
- HVAC contractors
- Electricians
- Landscapers
- General contractors

### 📞 Example Call Script

> "Hi [Name], this is [Your Name] from Forte Design Studio. I specialize in creating high-converting websites for plumbing companies in [Area]. 
>
> I know you're busy, so I won't take much of your time. What I'd like to do is create a free mockup homepage for [Company Name] to show you exactly how a professional website could help you get more emergency calls and service requests.
>
> If you can give me your company name and phone number, I can have a custom mockup ready in about 10 minutes. No obligation - just want to show you what's possible. Would that be helpful?"

---

### 🚀 Next Steps

1. Generate your first mockup
2. Test it on mobile and desktop
3. Customize the content for your market
4. Create a library of variations
5. Track which templates convert best

**Need help or want to add features?** The system is designed to be easily extensible for new templates, industries, and customization options.

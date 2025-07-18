# 🎨 Professional Mockup Generator

A clean, simple website generator for service-based businesses. Pure vanilla HTML, CSS, and JavaScript - no Node.js, no build process, no complexity.

## 🚀 What This Does

Generate professional websites for service businesses in seconds:

- **Plumbing Companies** - Blue theme with plumbing-specific services
- **HVAC Companies** - Red theme with heating/cooling services  
- **Electrical Companies** - Yellow theme with electrical services
- **Landscaping Companies** - Green theme with landscaping services
- **General Contractors** - Purple theme with construction services

## 📁 Simple File Structure

```
├── index.html              # Main generator interface
├── final-test.html         # Test page to verify everything works
├── assets/
│   ├── css/
│   │   ├── main.css        # Clean, modern styling
│   │   └── animations.css  # Simple fade-in animations
│   └── js/
│       └── generator.js    # Pure vanilla JavaScript generator
```

## 🎯 How To Use

1. **Start Local Server**:
   ```bash
   python3 -m http.server 8080
   ```

2. **Open in Browser**:
   ```
   http://localhost:8080
   ```

3. **Generate Website**:
   - Fill in company details
   - Select service type
   - Click "Generate Website"
   - Download the HTML file

## ✨ Features

- **Pure Vanilla** - No frameworks, no dependencies
- **Mobile Responsive** - Looks great on all devices
- **Professional Design** - Clean, modern layouts
- **Service-Specific** - Custom colors and content per industry
- **Instant Download** - Get complete HTML file immediately
- **Live Preview** - See the website before downloading

## 🧪 Testing

Open `final-test.html` to see live examples of generated websites for different service types.

## 🎨 Generated Website Features

Each generated website includes:

- **Fixed Header** - Professional navigation with company branding
- **Hero Section** - Eye-catching introduction with call-to-action buttons
- **Services Section** - Industry-specific service cards with icons
- **Contact Section** - Phone, location, and experience highlights
- **Mobile Responsive** - Automatic adaptation to all screen sizes
- **Professional Styling** - Clean, modern design that builds trust

## 🔧 Customization

To add new service types or modify templates:

1. Open `assets/js/generator.js`
2. Add new service types to:
   - `getServiceColors()` - Define color scheme
   - `getServiceName()` - Set display name
   - `getServiceCards()` - Add service-specific offerings

## 📱 Example Output

The generator creates complete, professional websites like:

- **Elite Pro Plumbing** - Blue-themed plumbing website
- **Spark Pro Electric** - Yellow-themed electrical website  
- **CoolAir HVAC** - Red-themed HVAC website
- **Green Thumb Landscaping** - Green-themed landscaping website

## 🎉 Ready to Use

This system is production-ready and can be used immediately to generate professional websites for service-based businesses. No setup, no installation, no complexity - just open and use!

---

**Built with ❤️ using pure vanilla web technologies**

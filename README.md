# 🚀 GiordanoTec - Professional Creative Services Website

Modern, responsive website for GiordanoTec - Your one-stop solution for Consulting, Graphic Design, Multimedia, Web Development, and Social Media services.

## ✨ Features

- 🎨 **Modern Design** - Clean, professional, and eye-catching
- 📱 **Fully Responsive** - Perfect on all devices (desktop, tablet, mobile)
- 🌍 **Multi-language Support** - English, Spanish, and Italian
- ⚡ **Lightning Fast** - Optimized for speed and performance
- 🎬 **Interactive Gallery** - Showcase your portfolio beautifully
- 💬 **Working Contact Form** - Netlify Forms integration (no backend needed)
- 🔒 **Secure** - HTTPS enabled via Netlify
- 🎯 **SEO Optimized** - Better search engine visibility

## 📁 Project Structure

```
GIORDANOTEC/
│
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js           # JavaScript functionality
├── netlify.toml        # Netlify configuration
├── README.md           # This file
│
└── images/             # All images
    ├── logo.png
    ├── whatsappicon.png
    ├── banner01.jpg
    ├── banner02.jpg
    ├── banner03.jpg
    ├── banner04.jpg
    ├── burger01.png
    ├── burger02.png
    ├── burger03.png
    ├── burger04.png
    ├── burger05.png
    └── burger06.jpg
```

## 🚀 Quick Start - Deploy to Netlify

### Option 1: Drag & Drop (Easiest)

1. Go to [Netlify](https://www.netlify.com/)
2. Sign up or log in
3. Drag and drop the entire `GIORDANOTEC` folder to Netlify
4. Your site is live! 🎉

### Option 2: GitHub + Netlify (Recommended)

1. **Create a GitHub repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - GiordanoTec website"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/giordanotec.git
   git push -u origin main
   ```

2. **Connect to Netlify:**
   - Go to [Netlify](https://app.netlify.com/)
   - Click "New site from Git"
   - Choose GitHub and select your repository
   - Deploy settings are automatically detected from `netlify.toml`
   - Click "Deploy site"

3. **Your site is live!** 🚀

### Option 3: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod
```

## 🌐 Custom Domain Setup

1. In Netlify dashboard, go to **Site settings** > **Domain management**
2. Click **Add custom domain**
3. Enter your domain (e.g., `giordanotec.com`)
4. Update your domain's DNS settings:
   - Add an **A record** pointing to Netlify's load balancer IP
   - Or add a **CNAME record** pointing to your Netlify subdomain
5. Wait for DNS propagation (can take up to 24 hours)
6. Netlify automatically provisions SSL certificate 🔒

## 📝 Customization Guide

### Update Contact Information

Edit `index.html` and find:
```html
<!-- Contact Section -->
<a href="mailto:info.giordanotec@gmail.com">info.giordanotec@gmail.com</a>
<a href="https://wa.me/34675537994">+34 675 537 994</a>
```

### Change Colors

Edit `styles.css` and modify CSS variables:
```css
:root {
    --primary-color: #2c3e50;
    --secondary-color: #3498db;
    --accent-color: #e74c3c;
    /* Add your brand colors here */
}
```

### Add More Projects

In `index.html`, duplicate a gallery item:
```html
<div class="gallery-item" data-category="design">
    <img src="images/your-image.jpg" alt="Description">
    <div class="gallery-overlay">
        <h3>Project Title</h3>
        <p>Category</p>
        <button class="gallery-btn" onclick="openModal(this)">
            <i class="fas fa-search-plus"></i>
        </button>
    </div>
</div>
```

### Update Languages

Edit translations in `script.js`:
```javascript
const translations = {
    es: { /* Spanish translations */ },
    en: { /* English translations */ },
    it: { /* Italian translations */ }
};
```

## 📧 Contact Form Setup

The contact form is already configured for Netlify Forms. Once deployed:

1. Go to Netlify dashboard > **Forms**
2. You'll see submissions from your contact form
3. Set up email notifications in **Site settings** > **Forms** > **Form notifications**

## 🎨 Adding More Images

1. Add images to the `images/` folder
2. Reference them in HTML:
   ```html
   <img src="images/your-image.jpg" alt="Description">
   ```

## 📱 Social Media Links

Update social links in `index.html`:
```html
<a href="https://linktr.ee/giordanotec" target="_blank">
<a href="https://www.linkedin.com/in/pietro-giordano-carfagnini/" target="_blank">
<a href="https://wa.me/34675537994" target="_blank">
```

## 🔧 Technical Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Grid & Flexbox
- **Vanilla JavaScript** - No framework dependencies
- **Font Awesome** - Icons
- **Google Fonts** - Poppins & Montserrat typography
- **Netlify** - Hosting & Forms

## 🌟 Performance

- ⚡ **Fast Loading** - No heavy frameworks
- 📦 **Lightweight** - ~50KB total size (excluding images)
- 🎯 **SEO Friendly** - Semantic HTML & meta tags
- 📱 **Mobile Optimized** - Mobile-first approach

## 🐛 Troubleshooting

### Form not working?
- Make sure you deployed to Netlify (forms only work on Netlify, not locally)
- Check Netlify dashboard > Forms for submissions
- Ensure `data-netlify="true"` is in the form tag

### Images not showing?
- Check file paths are correct
- Ensure images are in the `images/` folder
- Verify image file names match exactly (case-sensitive)

### Custom domain not working?
- Check DNS settings in your domain registrar
- Wait for DNS propagation (up to 24 hours)
- Verify domain is added in Netlify dashboard

## 📞 Support

For questions or support:
- **Email:** info.giordanotec@gmail.com
- **WhatsApp:** +34 675 537 994
- **LinkedIn:** [Pietro Giordano](https://www.linkedin.com/in/pietro-giordano-carfagnini/)

## 📄 License

© 2025 Giordanotec. All rights reserved.

---

**Made with ❤️ by Pietro Giordano**

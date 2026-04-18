# AOHF Website Testing Checklist

## Changes Made

### ✅ 1. Bank Details Updated
- **Location**: `donate.html`
- **Changes**: 
  - Added three GTB accounts (NGN, USD, GBP)
  - Account numbers: 3004034463 (NGN), 3004034858 (USD), 3004034872 (GBP)
  - Color-coded currency badges
  - Improved layout and readability

**Test**: Visit `/donate.html` and verify all three bank accounts are displayed correctly

---

### ✅ 2. Team Pictures Fixed
- **Location**: `our-team.html`
- **Changes**:
  - Adjusted `object-position` for better face visibility
  - Reduced scale transforms for more natural appearance
  - Specific adjustments for chairman-founder, humanitarian-lead, medical-aid, volunteer-manager, accountant-general

**Test**: Visit `/our-team.html` and check that team member faces are properly visible

---

### ✅ 3. Blog Header Fixed
- **Location**: `blog.html`
- **Changes**:
  - Increased top padding to 140px (accounts for fixed navbar)
  - Improved gradient background
  - Better typography and spacing
  - Enhanced description styling

**Test**: Visit `/blog.html` and verify header is not hidden behind navbar

---

### ✅ 4. Sanity.io CMS Integration
- **New Files Created**:
  - `/sanity-studio/` - Complete Sanity Studio setup
  - `/assets/js/sanity-client.js` - API client
  - `/assets/js/featured-blog-loader.js` - Homepage featured blog loader
  - `/blog-dynamic.html` - Dynamic blog page
  - `/SANITY_SETUP_GUIDE.md` - Complete setup instructions

- **Features**:
  - Blog post management with rich text editor
  - Featured blog toggle with priority system
  - Author and category management
  - Image upload and management
  - Real-time content updates

**Test**: 
1. Follow `SANITY_SETUP_GUIDE.md` to set up Sanity
2. Create a blog post and mark it as featured
3. Visit `/index.html` to see featured blog update
4. Visit `/blog-dynamic.html` to see all blog posts

---

### ✅ 5. Minimal Animations
- **Location**: `/assets/css/minimal-animations.css`
- **Changes**:
  - Reduced animation durations to 0.3s
  - Simplified hover effects
  - Removed excessive 3D transforms
  - Disabled complex animations
  - Improved text readability
  - Fixed heading hierarchy
  - Responsive text sizes

**Test**: Navigate through the site and verify animations are subtle and professional

---

### ✅ 6. Text Display Improvements
- **Changes**:
  - Enhanced font smoothing
  - Improved line heights
  - Fixed heading sizes and hierarchy
  - Better paragraph spacing
  - Improved link styling
  - Fixed footer text contrast
  - Responsive text sizes for mobile

**Test**: Check text readability across all pages, especially on mobile devices

---

## Testing Instructions

### Local Server Setup

#### Option 1: Using npm (Recommended)
```bash
cd "/home/nanmedia/Documents/aohf-uu jan updated/aohf-uu"
npm start
```
Then visit: `http://localhost:8000`

#### Option 2: Using Python
```bash
cd "/home/nanmedia/Documents/aohf-uu jan updated/aohf-uu"
python3 -m http.server 8000
```
Then visit: `http://localhost:8000`

---

## Page-by-Page Testing

### Homepage (`index.html`)
- [ ] Hero carousel displays correctly
- [ ] Navigation menu works
- [ ] Featured blog section shows (static or from Sanity)
- [ ] All sections load properly
- [ ] Animations are minimal and smooth
- [ ] Text is readable
- [ ] Mobile responsive

### Donate Page (`donate.html`)
- [ ] All three bank accounts display
- [ ] Currency badges show correct colors
- [ ] Account numbers are clear and readable
- [ ] Contact button works
- [ ] Mobile responsive

### Our Team (`our-team.html`)
- [ ] All team member photos show faces properly
- [ ] Hover effects work smoothly
- [ ] Team member information is readable
- [ ] Grid layout works on mobile
- [ ] No excessive animations

### Blog Page (`blog.html`)
- [ ] Header is visible (not hidden by navbar)
- [ ] All blog cards display
- [ ] Featured badge shows on post 7
- [ ] Read more links work
- [ ] Grid is responsive

### Dynamic Blog (`blog-dynamic.html`)
- [ ] Shows loading state initially
- [ ] Loads posts from Sanity (if configured)
- [ ] Falls back gracefully if Sanity not configured
- [ ] Featured posts show badge
- [ ] Mobile responsive

---

## Browser Testing

Test on:
- [ ] Chrome/Chromium
- [ ] Firefox
- [ ] Safari (if available)
- [ ] Mobile browsers (Chrome Mobile, Safari Mobile)

---

## Mobile Testing

Test on different screen sizes:
- [ ] 320px (small phones)
- [ ] 375px (iPhone SE)
- [ ] 768px (tablets)
- [ ] 1024px (small laptops)
- [ ] 1920px (desktops)

---

## Performance Checks

- [ ] Page load time < 3 seconds
- [ ] Images load properly
- [ ] No console errors
- [ ] Smooth scrolling
- [ ] No layout shifts

---

## Accessibility Checks

- [ ] Proper heading hierarchy
- [ ] Alt text on images
- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] Color contrast meets WCAG standards

---

## Known Issues & Limitations

1. **Sanity CMS**: Requires setup and configuration before dynamic features work
2. **Featured Blog**: Falls back to static content if Sanity not configured
3. **Browser Support**: Optimized for modern browsers (Chrome, Firefox, Safari, Edge)

---

## Next Steps After Testing

1. **If Sanity is configured**:
   - Create sample blog posts
   - Mark one as featured
   - Test dynamic loading

2. **If issues found**:
   - Document in detail
   - Check browser console for errors
   - Verify file paths are correct

3. **Before deployment**:
   - Minify CSS and JS
   - Optimize images
   - Test on production domain
   - Configure Sanity CORS for production

---

## Support Files

- **Sanity Setup**: See `SANITY_SETUP_GUIDE.md`
- **Project Documentation**: See `README.md`
- **Requirements**: See `REQUIREMENTS.md`

---

**Last Updated**: April 2026
**Tester**: _____________
**Date Tested**: _____________

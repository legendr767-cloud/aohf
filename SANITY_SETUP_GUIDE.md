# Sanity.io CMS Setup Guide for AOHF Website

This guide will walk you through setting up Sanity.io as a headless CMS for managing blog posts on the AOHF website, including the featured blog functionality on the homepage.

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Initial Sanity Setup](#initial-sanity-setup)
3. [Configuration](#configuration)
4. [Running the Studio](#running-the-studio)
5. [Creating Content](#creating-content)
6. [Deploying the Studio](#deploying-the-studio)
7. [Troubleshooting](#troubleshooting)

---

## Prerequisites

Before you begin, ensure you have:
- Node.js (version 14 or higher) installed
- npm or yarn package manager
- A Sanity.io account (free at https://www.sanity.io)

---

## Initial Sanity Setup

### Step 1: Install Sanity CLI

Open your terminal and install the Sanity CLI globally:

```bash
npm install -g @sanity/cli
```

### Step 2: Login to Sanity

```bash
sanity login
```

This will open a browser window for you to authenticate with your Sanity account.

### Step 3: Initialize Your Sanity Project

Navigate to the sanity-studio directory:

```bash
cd /home/nanmedia/Documents/aohf-uu\ jan\ updated/aohf-uu/sanity-studio
```

Initialize the project:

```bash
sanity init
```

When prompted:
- **Create new project**: Yes
- **Project name**: AOHF Blog CMS (or your preferred name)
- **Use the default dataset configuration**: Yes
- **Project output path**: Use current directory (.)
- **Select project template**: Clean project with no predefined schemas

**IMPORTANT**: After initialization, Sanity will provide you with a **Project ID**. Save this ID - you'll need it in the next step.

### Step 4: Install Dependencies

```bash
npm install
```

---

## Configuration

### Step 1: Update Configuration Files

You need to replace `YOUR_PROJECT_ID` with your actual Sanity Project ID in three files:

#### File 1: `sanity.config.js`

```javascript
projectId: 'YOUR_PROJECT_ID', // Replace with your actual project ID
```

#### File 2: `sanity.cli.js`

```javascript
projectId: 'YOUR_PROJECT_ID', // Replace with your actual project ID
```

#### File 3: `../assets/js/sanity-client.js`

```javascript
const SANITY_CONFIG = {
  projectId: 'YOUR_PROJECT_ID', // Replace with your actual project ID
  dataset: 'production',
  // ...
};
```

### Step 2: Configure CORS

To allow your website to fetch data from Sanity, you need to configure CORS:

1. Go to https://www.sanity.io/manage
2. Select your project
3. Go to **Settings** → **API**
4. Under **CORS Origins**, click **Add CORS origin**
5. Add your website URLs:
   - `http://localhost:8000` (for local development)
   - `http://127.0.0.1:8000` (for local development)
   - Your production domain (e.g., `https://yourdomain.com`)
6. Check **Allow credentials**
7. Click **Save**

---

## Running the Studio

### Start the Development Server

From the `sanity-studio` directory:

```bash
npm run dev
```

This will start the Sanity Studio at `http://localhost:3333`

The studio is your admin interface where you can create and manage blog posts.

---

## Creating Content

### Step 1: Access the Studio

Open your browser and go to `http://localhost:3333`

### Step 2: Create an Author (Optional)

1. Click on **Author** in the sidebar
2. Click **Create new**
3. Fill in the author details:
   - Name
   - Slug (auto-generated from name)
   - Image (optional)
   - Bio (optional)
4. Click **Publish**

### Step 3: Create a Category (Optional)

1. Click on **Category** in the sidebar
2. Click **Create new**
3. Fill in:
   - Title
   - Slug (auto-generated)
   - Description
4. Click **Publish**

### Step 4: Create a Blog Post

1. Click on **Blog Post** in the sidebar
2. Click **Create new**
3. Fill in the required fields:
   - **Title**: Your blog post title
   - **Slug**: Auto-generated from title (you can edit it)
   - **Author**: Select an author (optional)
   - **Main Image**: Upload the featured image for the post
   - **Categories**: Select categories (optional)
   - **Published At**: Set the publication date and time
   - **Excerpt**: Write a short summary (max 200 characters)
   - **Body**: Write your blog post content using the rich text editor
   - **Featured Post**: Toggle ON to make this post featured on the homepage
   - **Featured Priority**: Set a number (higher = more priority)

4. Click **Publish**

### Making a Post Featured

To make a blog post appear as the featured post on the homepage:

1. Edit the blog post
2. Scroll down to **Featured Post**
3. Toggle it **ON**
4. Set **Featured Priority** (e.g., 100)
   - The post with the highest priority will be shown as featured
   - If multiple posts have the same priority, the most recent will be shown
5. Click **Publish**

---

## Deploying the Studio

### Option 1: Deploy to Sanity's Hosting (Recommended)

```bash
npm run deploy
```

This will deploy your studio to a URL like: `https://your-project.sanity.studio`

### Option 2: Self-Host

Build the studio:

```bash
npm run build
```

The built files will be in the `dist` folder. You can host these on any static hosting service.

---

## Using the CMS on Your Website

### Static Blog Page (Current)

The current blog page (`blog.html`) shows static blog posts. This will continue to work as a fallback.

### Dynamic Blog Page (New)

The new `blog-dynamic.html` page fetches blog posts from Sanity CMS in real-time.

To use it:
1. Ensure your Sanity Project ID is configured in `assets/js/sanity-client.js`
2. Navigate to `blog-dynamic.html` instead of `blog.html`
3. Blog posts will load automatically from Sanity

### Featured Blog on Homepage

The homepage (`index.html`) has been updated to load the featured blog post from Sanity:

1. Include the Sanity client script:
   ```html
   <script src="assets/js/sanity-client.js"></script>
   <script src="assets/js/featured-blog-loader.js"></script>
   ```

2. The featured blog section will automatically update when you mark a post as featured in Sanity

3. If Sanity is not configured or no featured post exists, it will fall back to the static content

---

## Testing Your Setup

### Test 1: Verify Sanity Connection

1. Open your browser console (F12)
2. Navigate to `blog-dynamic.html`
3. You should see blog posts loading
4. Check for any errors in the console

### Test 2: Verify Featured Blog

1. Create a blog post in Sanity Studio
2. Mark it as **Featured** with a high priority
3. Navigate to `index.html`
4. The featured blog section should show your new post

### Test 3: Local Development

Start a local server from your project root:

```bash
cd /home/nanmedia/Documents/aohf-uu\ jan\ updated/aohf-uu
npm start
```

Or use Python:

```bash
python3 -m http.server 8000
```

Then visit:
- Homepage: `http://localhost:8000/index.html`
- Dynamic Blog: `http://localhost:8000/blog-dynamic.html`

---

## Troubleshooting

### Issue: Blog posts not loading

**Solution:**
1. Check that your Project ID is correctly set in all configuration files
2. Verify CORS is configured in Sanity dashboard
3. Check browser console for errors
4. Ensure you have published blog posts (not drafts)

### Issue: Images not displaying

**Solution:**
1. Ensure images are uploaded in Sanity Studio
2. Check that the image has an asset reference
3. Verify the image URL is being generated correctly

### Issue: Featured blog not updating

**Solution:**
1. Ensure the blog post is marked as **Featured** in Sanity
2. Check that **Featured Priority** is set
3. Clear your browser cache
4. Verify the Sanity client script is loaded on the page

### Issue: "No blog posts found"

**Solution:**
1. Ensure you have **published** blog posts (not just saved as drafts)
2. Check that posts have all required fields filled
3. Verify your dataset name is correct (should be 'production')

---

## Next Steps

1. **Create your first blog posts** in Sanity Studio
2. **Mark one as featured** to appear on the homepage
3. **Test the dynamic blog page** to ensure posts load correctly
4. **Deploy your Sanity Studio** for remote access
5. **Update your website** to use `blog-dynamic.html` as the main blog page

---

## Support

For more information:
- Sanity Documentation: https://www.sanity.io/docs
- Sanity Community: https://www.sanity.io/community
- GROQ Query Language: https://www.sanity.io/docs/groq

---

## File Structure

```
aohf-uu/
├── sanity-studio/              # Sanity CMS Studio
│   ├── schemas/
│   │   ├── index.js           # Schema exports
│   │   ├── blogPost.js        # Blog post schema
│   │   ├── author.js          # Author schema
│   │   └── category.js        # Category schema
│   ├── package.json
│   ├── sanity.config.js       # Sanity configuration
│   └── sanity.cli.js          # CLI configuration
├── assets/
│   └── js/
│       ├── sanity-client.js   # Sanity API client
│       └── featured-blog-loader.js  # Featured blog loader
├── blog.html                  # Static blog page (fallback)
├── blog-dynamic.html          # Dynamic blog page (Sanity-powered)
└── index.html                 # Homepage with featured blog
```

---

**Last Updated**: April 2026
**Version**: 1.0.0

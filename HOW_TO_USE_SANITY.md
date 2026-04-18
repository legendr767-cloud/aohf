# How to Use Sanity CMS - Complete Guide

## 🎯 YES! You Can Write Blog Posts & Feature Them on Homepage!

Once you configure Sanity with your Project ID, you can:
- ✅ Write blog posts from admin panel
- ✅ Upload images
- ✅ Mark posts as "Featured"
- ✅ Featured posts automatically appear on homepage
- ✅ Edit/delete posts anytime
- ✅ No coding needed!

---

## 📝 Part 1: Initial Setup (8 Minutes - ONE TIME ONLY)

### Step 1: Create Sanity Account (2 minutes)
1. Go to: https://www.sanity.io
2. Click "Get Started" or "Sign Up"
3. Sign up with Google (easiest) or Email
4. **Cost**: FREE (no credit card needed)

### Step 2: Install Sanity CLI (1 minute)
Open terminal and run:
```bash
npm install -g @sanity/cli
```

### Step 3: Login to Sanity (1 minute)
```bash
sanity login
```
This opens a browser window to log you in.

### Step 4: Create Your Project & Get Project ID (2 minutes)
```bash
cd "/home/nanmedia/Documents/aohf-uu jan updated/aohf-uu/sanity-studio"
sanity init
```

**Answer these questions**:
- Create new project? → **Yes**
- Project name? → **AOHF Blog CMS** (or whatever you want)
- Use default dataset? → **Yes**
- Output path? → **Press Enter** (use current directory)
- Project template? → **Clean project with no predefined schemas**

**IMPORTANT**: You'll see this:
```
Success! Your project is ready!
Project ID: abc123xyz    ← COPY THIS!
```

**COPY YOUR PROJECT ID!** You need it for the next step.

### Step 5: Add Project ID to 3 Files (2 minutes)

#### File 1: `sanity-studio/sanity.config.js`
**Line 9**:
```javascript
projectId: 'abc123xyz',  // ← Replace with YOUR Project ID
```

#### File 2: `sanity-studio/sanity.cli.js`
**Line 5**:
```javascript
projectId: 'abc123xyz',  // ← Replace with YOUR Project ID
```

#### File 3: `assets/js/sanity-client.js`
**Line 6**:
```javascript
projectId: 'abc123xyz',  // ← Replace with YOUR Project ID
```

### Step 6: Configure CORS (1 minute)
1. Go to: https://www.sanity.io/manage
2. Click your project: "AOHF Blog CMS"
3. Click: **Settings** → **API**
4. Under **CORS Origins**, click **"Add CORS origin"**
5. Add: `http://localhost:8000`
6. Check: **"Allow credentials"**
7. Click: **Save**

**What this does**: Allows your website to fetch blog posts from Sanity

### Step 7: Install & Start (2 minutes)
```bash
cd sanity-studio
npm install
npm run dev
```

**Access admin panel at**: http://localhost:3333

---

## 🎨 Part 2: Creating Your First Blog Post

### Step 1: Open Admin Panel
Go to: http://localhost:3333

You'll see the Sanity Studio interface.

### Step 2: Create a Blog Post
1. Click **"Blog Post"** in the left sidebar
2. Click **"Create new"** button (top right)

### Step 3: Fill in the Details

#### **Title** (Required)
Example: "Building a Mosque in Rural Nigeria"

#### **Slug** (Required)
- Click the **"Generate"** button next to Slug
- It auto-creates from your title
- Example: `building-a-mosque-in-rural-nigeria`

#### **Main Image** (Required)
1. Click **"Upload"** under Main Image
2. Select an image from your computer
3. Add **Alt Text** (for accessibility)
   - Example: "Mosque construction in progress"

#### **Published At** (Required)
- Click the date/time picker
- Set when you want the post published
- Use current date/time for immediate publish

#### **Excerpt** (Required)
- Short summary (max 200 characters)
- Example: "We're building a mosque to serve 500 families in rural Nigeria. Join us in this blessed project."

#### **Body** (Required)
- Write your full blog post here
- You have a rich text editor with:
  - **Bold**, *Italic*, Headings
  - Bullet lists, Numbered lists
  - Links, Quotes
  - Images (upload inline)

Example content:
```
## The Need

In the rural village of Egbe, 500 families have been praying in an open field...

## Our Solution

We're constructing a 200-capacity mosque with:
- Prayer hall
- Ablution facilities
- Community center

## How You Can Help

Your donation of $50 can provide...
```

#### **Author** (Optional)
1. Click **"Create new Author"** if this is your first post
2. Fill in:
   - Name: "AOHF Team"
   - Bio: "Asuwaju Odusote Humanitarian Foundation"
   - Image: Upload team logo
3. Click **Publish**
4. Go back to your blog post
5. Select the author you just created

#### **Categories** (Optional)
1. Click **"Create new Category"**
2. Title: "Community Projects"
3. Description: "Mosque, school, and community building projects"
4. Click **Publish**
5. Go back to your blog post
6. Select the category

#### **Featured Post** (IMPORTANT!)
- Toggle this **ON** if you want it on the homepage
- Only featured posts appear on homepage

#### **Featured Priority** (IMPORTANT!)
- Set a number (1-100)
- **Higher number = higher priority**
- Example: Set to **100** for most important post
- If you have multiple featured posts, the highest priority shows on homepage

### Step 4: Publish Your Post
1. Review everything
2. Click **"Publish"** button (top right)
3. Confirm publish

---

## 🏠 Part 3: Featuring Posts on Homepage

### How It Works:
1. Write a blog post in Sanity
2. Toggle **"Featured Post"** to **ON**
3. Set **"Featured Priority"** to a high number (e.g., 100)
4. Click **Publish**
5. **Homepage automatically updates!**

### Multiple Featured Posts:
- You can mark multiple posts as featured
- The post with the **highest priority** shows on homepage
- Example:
  - Post A: Priority 100 ← Shows on homepage
  - Post B: Priority 50
  - Post C: Priority 25

### Changing Featured Post:
1. Open the current featured post
2. Change priority to lower number (e.g., 50)
3. Open the new post you want featured
4. Set priority to higher number (e.g., 100)
5. Publish both
6. Homepage updates automatically!

---

## 📱 Part 4: Viewing Your Blog Posts

### On Your Website:

**Dynamic Blog Page**:
- URL: http://localhost:8000/blog-dynamic.html
- Shows all published posts from Sanity
- Auto-updates when you publish new posts

**Homepage Featured Blog**:
- URL: http://localhost:8000/index.html
- Scroll to "Latest from Our Blog" section
- Shows your highest priority featured post

**Static Blog** (backup):
- URL: http://localhost:8000/blog.html
- Shows the 7 pre-made blog posts
- Always works, even without Sanity

---

## ✏️ Part 5: Editing & Managing Posts

### Edit a Post:
1. Open http://localhost:3333
2. Click **"Blog Post"** in sidebar
3. Click on the post you want to edit
4. Make your changes
5. Click **"Publish"** to save

### Delete a Post:
1. Open the post
2. Click the **three dots** menu (top right)
3. Click **"Delete"**
4. Confirm deletion

### Unpublish a Post:
1. Open the post
2. Click **"Unpublish"** button
3. Post is now a draft (not visible on website)

### Feature/Unfeature a Post:
1. Open the post
2. Toggle **"Featured Post"** ON or OFF
3. Adjust **"Featured Priority"** if needed
4. Click **"Publish"**

---

## 🎯 Part 6: Common Tasks

### Task 1: Change Homepage Featured Post
1. Open Sanity Studio: http://localhost:3333
2. Find the post you want featured
3. Open it
4. Toggle **"Featured Post"** to **ON**
5. Set **"Featured Priority"** to **100**
6. Click **"Publish"**
7. Go to your homepage: http://localhost:8000
8. Refresh the page
9. **New featured post appears!**

### Task 2: Add New Blog Post
1. Open Sanity Studio
2. Click **"Blog Post"** → **"Create new"**
3. Fill in all fields
4. Upload images
5. Write content
6. Toggle **"Featured Post"** if you want it on homepage
7. Click **"Publish"**
8. Visit http://localhost:8000/blog-dynamic.html
9. **Your new post appears!**

### Task 3: Update Existing Post
1. Open Sanity Studio
2. Click **"Blog Post"**
3. Find and click the post
4. Edit any field
5. Click **"Publish"**
6. Changes appear immediately on website

---

## 🚀 Part 7: Going Live (Production)

When you deploy your website to a real domain:

### Step 1: Add Production Domain to CORS
1. Go to: https://www.sanity.io/manage
2. Click your project
3. Settings → API → CORS Origins
4. Click **"Add CORS origin"**
5. Add your domain: `https://yourdomain.com`
6. Check **"Allow credentials"**
7. Click **Save**

### Step 2: Update Sanity Client
In `assets/js/sanity-client.js`, the code already handles both:
- Local: `http://localhost:8000`
- Production: Your live domain

**No changes needed!**

### Step 3: Deploy Sanity Studio (Optional)
You can host your admin panel online:
```bash
cd sanity-studio
sanity deploy
```

Choose a studio URL: `aohf-blog.sanity.studio`

Now you can manage blog from anywhere: https://aohf-blog.sanity.studio

---

## 📊 Part 8: Sanity Dashboard

### View Your Content:
- Go to: https://www.sanity.io/manage
- Click your project
- See all your content, API usage, etc.

### Features:
- ✅ View all blog posts
- ✅ See API usage
- ✅ Manage team members
- ✅ Configure settings
- ✅ View analytics

---

## 💡 Tips & Best Practices

### Writing Blog Posts:
1. **Use descriptive titles** - Good for SEO
2. **Write compelling excerpts** - Shows in blog listing
3. **Add alt text to images** - Accessibility & SEO
4. **Use headings** - Break up long content
5. **Add internal links** - Link to other pages
6. **Optimize images** - Compress before uploading

### Featured Posts:
1. **Feature your best content** - Homepage is prime real estate
2. **Update regularly** - Keep homepage fresh
3. **Use high-quality images** - First impression matters
4. **Write engaging excerpts** - Encourage clicks

### Categories:
1. **Create clear categories** - "Community Projects", "Emergency Relief", etc.
2. **Use consistently** - Same categories across posts
3. **Don't overdo it** - 5-10 categories max

---

## 🔧 Troubleshooting

### Blog posts not showing on website?
**Check**:
1. Post is **Published** (not draft)
2. Project ID is correct in all 3 files
3. CORS is configured
4. Clear browser cache

### Featured post not on homepage?
**Check**:
1. **"Featured Post"** toggle is **ON**
2. **"Featured Priority"** is set (higher = better)
3. Post is **Published**
4. Refresh homepage

### Can't access Sanity Studio?
**Check**:
1. Ran `npm run dev` in sanity-studio folder
2. Going to http://localhost:3333 (not 8000)
3. Sanity CLI is installed

### Images not loading?
**Check**:
1. Images are uploaded in Sanity
2. Alt text is added
3. CORS is configured
4. Clear browser cache

---

## ✅ Summary

### What You Can Do:
✅ Write blog posts from admin panel
✅ Upload images
✅ Feature posts on homepage
✅ Edit/delete posts anytime
✅ Manage from anywhere (after deploying studio)
✅ No coding needed!

### What Happens Automatically:
✅ Homepage updates with featured post
✅ Blog page shows all posts
✅ Images are optimized
✅ SEO-friendly URLs
✅ Mobile responsive

### Time Investment:
- **Setup**: 8 minutes (one time)
- **Write post**: 10-30 minutes
- **Feature on homepage**: 30 seconds
- **Edit post**: 2 minutes

---

## 🎉 You're Ready!

Once you add your Project ID, you can:
1. Open http://localhost:3333
2. Create blog posts
3. Feature them on homepage
4. Manage everything from one place

**No coding required - just write and publish!**

---

**Questions?** Everything is set up and ready to go. Just add your Project ID and start blogging!

# What You Need from Sanity.io - SIMPLE GUIDE

## 🎯 Quick Answer

You need **ONE THING** from Sanity.io: **Your Project ID**

That's it! Everything else is already set up.

---

## 📝 Step-by-Step Setup (5 Minutes)

### Step 1: Create a Sanity Account
1. Go to https://www.sanity.io
2. Click **"Get Started"** or **"Sign Up"**
3. Sign up with:
   - Google account (easiest)
   - GitHub account
   - Or email/password

**Cost**: FREE (no credit card needed)

---

### Step 2: Install Sanity CLI

Open your terminal and run:

```bash
npm install -g @sanity/cli
```

**What this does**: Installs the Sanity command-line tool

---

### Step 3: Login to Sanity

```bash
sanity login
```

**What this does**: Opens a browser window to log you in

---

### Step 4: Create Your Project

Navigate to the sanity-studio folder:

```bash
cd "/home/nanmedia/Documents/aohf-uu jan updated/aohf-uu/sanity-studio"
```

Then initialize:

```bash
sanity init
```

**Answer the questions**:
- ✅ Create new project? → **Yes**
- ✅ Project name? → **AOHF Blog** (or whatever you want)
- ✅ Use default dataset? → **Yes**
- ✅ Output path? → **Press Enter** (use current directory)
- ✅ Project template? → **Clean project with no predefined schemas**

**IMPORTANT**: After this, Sanity will show you a **Project ID** like this:

```
Success! Your project is ready!
Project ID: abc123xyz
```

**COPY THIS PROJECT ID!** You'll need it in the next step.

---

### Step 5: Add Your Project ID

You need to replace `YOUR_PROJECT_ID` with your actual Project ID in **3 files**:

#### File 1: `sanity.config.js`
Open this file and find line 9:
```javascript
projectId: 'YOUR_PROJECT_ID',  // ← Replace this
```
Change it to:
```javascript
projectId: 'abc123xyz',  // ← Your actual Project ID
```

#### File 2: `sanity.cli.js`
Open this file and find line 5:
```javascript
projectId: 'YOUR_PROJECT_ID',  // ← Replace this
```
Change it to:
```javascript
projectId: 'abc123xyz',  // ← Your actual Project ID
```

#### File 3: `../assets/js/sanity-client.js`
Open this file and find line 6:
```javascript
projectId: 'YOUR_PROJECT_ID',  // ← Replace this
```
Change it to:
```javascript
projectId: 'abc123xyz',  // ← Your actual Project ID
```

---

### Step 6: Install Dependencies

Still in the sanity-studio folder:

```bash
npm install
```

**What this does**: Installs all required packages

---

### Step 7: Configure CORS (Allow Your Website)

1. Go to https://www.sanity.io/manage
2. Click on your project (**AOHF Blog**)
3. Click **Settings** → **API**
4. Under **CORS Origins**, click **Add CORS origin**
5. Add these URLs (one at a time):
   - `http://localhost:8000`
   - `http://127.0.0.1:8000`
   - Your production domain (when you deploy)
6. Check **"Allow credentials"**
7. Click **Save**

**What this does**: Allows your website to fetch blog posts from Sanity

---

### Step 8: Start the Admin Panel

```bash
npm run dev
```

**What this does**: Starts your blog admin panel

**Access it at**: http://localhost:3333

---

## 🎉 You're Done! Now What?

### Create Your First Blog Post

1. Open http://localhost:3333 in your browser
2. Click **"Blog Post"** in the sidebar
3. Click **"Create new"**
4. Fill in:
   - **Title**: Your blog post title
   - **Slug**: Click "Generate" (auto-creates from title)
   - **Main Image**: Upload an image
   - **Published At**: Set the date/time
   - **Excerpt**: Short summary (max 200 characters)
   - **Body**: Write your blog post
   - **Featured Post**: Toggle ON to show on homepage
   - **Featured Priority**: Set to 100 (higher = more important)
5. Click **Publish**

### View It on Your Website

1. Go to http://localhost:8000/blog-dynamic.html
2. Your blog post should appear!
3. If you marked it as "Featured", it will also show on the homepage

---

## 📋 Summary - What You Got from Sanity.io

✅ **Project ID** - The only thing you need to configure
✅ **Free account** - No credit card required
✅ **Admin panel** - Runs at http://localhost:3333
✅ **Blog management** - Create, edit, delete posts
✅ **Featured blog control** - Toggle posts as featured

---

## 🔧 Troubleshooting

### "Command not found: sanity"
**Solution**: Install Sanity CLI globally:
```bash
npm install -g @sanity/cli
```

### "CORS error" when loading blog posts
**Solution**: 
1. Go to https://www.sanity.io/manage
2. Add your website URL to CORS origins
3. Make sure "Allow credentials" is checked

### Blog posts not showing
**Solution**:
1. Make sure you **published** the post (not just saved as draft)
2. Check that your Project ID is correct in all 3 files
3. Clear your browser cache

### Can't access admin panel
**Solution**:
1. Make sure you ran `npm run dev` in the sanity-studio folder
2. Check http://localhost:3333 (not 8000)

---

## 💡 Quick Reference

| What | Where |
|------|-------|
| **Sanity Dashboard** | https://www.sanity.io/manage |
| **Admin Panel** | http://localhost:3333 |
| **Your Website** | http://localhost:8000 |
| **Dynamic Blog** | http://localhost:8000/blog-dynamic.html |
| **Project ID Location** | Sanity dashboard → Settings |

---

## 🎯 That's It!

You only need:
1. ✅ Create Sanity account (free)
2. ✅ Get your Project ID
3. ✅ Replace it in 3 files
4. ✅ Configure CORS
5. ✅ Start creating blog posts!

**Questions?** Check the full guide: `SANITY_SETUP_GUIDE.md`

---

**Last Updated**: April 2026
**Difficulty**: Easy (5 minutes)
**Cost**: FREE

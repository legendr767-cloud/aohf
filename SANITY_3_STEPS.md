# Sanity.io Setup - Just 3 Steps!

## What You Get from Sanity.io

**ONE THING**: Your **Project ID**

That's literally all you need! 🎯

---

## Step 1: Create Account & Get Project ID

### 1.1 Create Account (2 minutes)
```
Go to: https://www.sanity.io
Click: "Get Started" or "Sign Up"
Sign up with: Google (easiest) or Email
```

**Cost**: FREE ✅ (No credit card needed)

### 1.2 Install & Login (1 minute)
```bash
npm install -g @sanity/cli
sanity login
```

### 1.3 Create Project & Get ID (2 minutes)
```bash
cd "/home/nanmedia/Documents/aohf-uu jan updated/aohf-uu/sanity-studio"
sanity init
```

**Answer these**:
- Create new project? → **Yes**
- Project name? → **AOHF Blog**
- Use default dataset? → **Yes**
- Output path? → **Press Enter**
- Template? → **Clean project**

**YOU'LL SEE THIS**:
```
Success! Your project is ready!
Project ID: abc123xyz    ← COPY THIS!
```

**✅ DONE! You got your Project ID!**

---

## Step 2: Put Project ID in 3 Files

Replace `YOUR_PROJECT_ID` with your actual ID in these files:

### File 1: `sanity-studio/sanity.config.js`
**Line 9**:
```javascript
projectId: 'abc123xyz',  // ← Your ID here
```

### File 2: `sanity-studio/sanity.cli.js`
**Line 5**:
```javascript
projectId: 'abc123xyz',  // ← Your ID here
```

### File 3: `assets/js/sanity-client.js`
**Line 6**:
```javascript
projectId: 'abc123xyz',  // ← Your ID here
```

**✅ DONE! Files configured!**

---

## Step 3: Configure CORS & Start

### 3.1 Configure CORS (1 minute)
```
1. Go to: https://www.sanity.io/manage
2. Click your project: "AOHF Blog"
3. Click: Settings → API
4. Click: "Add CORS origin"
5. Add: http://localhost:8000
6. Check: "Allow credentials"
7. Click: Save
```

**What this does**: Lets your website talk to Sanity

### 3.2 Start Admin Panel (1 minute)
```bash
cd sanity-studio
npm install
npm run dev
```

**Access at**: http://localhost:3333

**✅ DONE! You're ready to create blog posts!**

---

## 🎉 That's It! Now Create a Blog Post

1. Open http://localhost:3333
2. Click "Blog Post" → "Create new"
3. Fill in:
   - Title
   - Upload image
   - Write excerpt
   - Write content
   - Toggle "Featured Post" ON
   - Set priority to 100
4. Click "Publish"

**View it**: http://localhost:8000/blog-dynamic.html

---

## 📋 Quick Reference

| What | Where |
|------|-------|
| **Get Project ID** | Run `sanity init` |
| **Sanity Dashboard** | https://www.sanity.io/manage |
| **Admin Panel** | http://localhost:3333 |
| **Your Website** | http://localhost:8000 |
| **Dynamic Blog** | http://localhost:8000/blog-dynamic.html |

---

## 🔧 Troubleshooting

**Blog posts not showing?**
- Check Project ID is correct in all 3 files
- Make sure CORS is configured
- Verify post is Published (not draft)

**Can't access admin panel?**
- Make sure you ran `npm run dev`
- Check http://localhost:3333 (not 8000)

---

## ✅ Summary

**You need from Sanity.io**:
1. ✅ Free account
2. ✅ Project ID (one string like "abc123xyz")
3. ✅ CORS configured

**You put in**:
1. ✅ Project ID in 3 files
2. ✅ Run `npm install` and `npm run dev`

**You get**:
1. ✅ Blog admin panel
2. ✅ Create/edit/delete posts
3. ✅ Featured blog control
4. ✅ Dynamic content on website

**Time**: 10 minutes total
**Cost**: FREE
**Difficulty**: Easy

---

**That's all you need to know!** 🚀

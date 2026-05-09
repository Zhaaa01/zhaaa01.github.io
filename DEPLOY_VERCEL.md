# Deploy Portfolio ke Vercel (GRATIS)

Vercel adalah platform hosting terbaik untuk Next.js dan **GRATIS** untuk personal projects.

## 📋 Persyaratan:
- GitHub Account (gratis) 
- Vercel Account (gratis)
- Git sudah terinstall

---

## ✅ Langkah 1: Push Kode ke GitHub

### 1.1 Buat GitHub Repository
1. Buka https://github.com/new
2. Nama repository: `portofolio` (atau nama lain)
3. Pilih "Public" agar bisa deploy gratis
4. Jangan initialize dengan README/gitignore (kita sudah punya)
5. Klik "Create Repository"

### 1.2 Push Kode ke GitHub

Buka Terminal/PowerShell di folder project dan jalankan:

```bash
git add .
git commit -m "Initial commit - Portfolio project"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portofolio.git
git push -u origin main
```

**Ganti `YOUR_USERNAME` dengan username GitHub Anda!**

---

## 🚀 Langkah 2: Deploy ke Vercel

### 2.1 Login ke Vercel
1. Buka https://vercel.com
2. Klik "Sign Up"
3. Pilih "Continue with GitHub"
4. Authorize Vercel untuk akses repository Anda

### 2.2 Import Project
1. Setelah login, klik "New Project"
2. Cari repository `portofolio` Anda
3. Klik "Import"

### 2.3 Configure Project
1. **Project Name:** `portofolio` (atau nama lain)
2. **Framework:** Vercel akan otomatis detect Next.js
3. **Root Directory:** `.` (default)
4. Klik "Deploy"

✅ Selesai! Vercel akan:
- Build project otomatis
- Deploy ke URL unik seperti: `portofolio-abc123.vercel.app`
- Beri Anda domain gratis

---

## 🌐 Langkah 3: Custom Domain (Optional)

Jika ingin domain sendiri (seperti `nama.com`):

1. Di dashboard Vercel > Settings > Domains
2. Tambahkan domain Anda
3. Update DNS records di registrar domain Anda

---

## 🔄 Auto-Deployment

Vercel akan **otomatis deploy** setiap kali Anda:
- Push ke GitHub branch `main`
- Membuat Pull Request
- Merge Pull Request

Jadi workflow Anda:
```bash
# Edit file lokal
git add .
git commit -m "Update portfolio"
git push origin main
# Vercel otomatis deploy!
```

---

## ✨ URLs Gratis dari Vercel:
- Domain utama: `portofolio-abc123.vercel.app`
- Preview untuk setiap branch
- Preview untuk setiap Pull Request

---

## 🎯 Troubleshooting

### Build Error?
- Pastikan `npm run build` bisa jalan di local: `npm run build`
- Cek build logs di Vercel Dashboard > Deployments > Logs

### Port Issues?
- Vercel otomatis handle port, tidak perlu khawatir

### Environment Variables?
- Jika ada `.env.local`, tambahkan ke Vercel:
  - Settings > Environment Variables
  - Tambahkan KEY dan VALUE yang diperlukan

### Ingin Undo Deployment?
- Di Vercel Dashboard, klik deployment yang sebelumnya (di tab "Deployments")

---

## 💡 Tips Penting

✅ **DO:**
- Pastikan semua file penting sudah di-push ke GitHub
- Test `npm run build` lokal sebelum push
- Gunakan meaningful commit messages

❌ **DON'T:**
- Push `.env.local` ke GitHub (sudah di `.gitignore`)
- Hapus `.gitignore` file
- Commit `node_modules` (sudah di `.gitignore`)

---

## 📊 Vercel Free Tier Includes:
- ✅ Unlimited deployments
- ✅ Unlimited collaborators
- ✅ Free SSL certificate
- ✅ Automatic HTTPS
- ✅ Fast CDN globally
- ✅ Serverless Functions
- ✅ Preview deployments

---

## 🎉 Selesai!

Portfolio Anda sekarang **ONLINE** dengan:
- Domain gratis: `portofolio-abc123.vercel.app`
- Auto-deploy dari GitHub
- Lightning-fast performance
- SSL certificate gratis

Share URL Anda ke portfolio link Anda!

---

## 📚 Helpful Links:
- Vercel Docs: https://vercel.com/docs
- Next.js Deployment: https://nextjs.org/learn/basics/deploying-nextjs-app/deploy
- GitHub Docs: https://docs.github.com

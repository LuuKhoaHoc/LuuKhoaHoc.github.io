<div align="center">
<img alt="Portfolio" src="https://raw.githubusercontent.com/luukhoahoc/luukhoahoc.github.io/main/public/me.png" width="90%">
</div>

# 🚀 Portfolio - luukhoahoc.me

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fluukhoahoc%2Fluukhoahoc.github.io)

Portfolio cá nhân được xây dựng với Next.js 14, TypeScript, và các thư viện UI hiện đại. Dự án giới thiệu thông tin cá nhân, dự án, blog và các hoạt động học thuật.

## ✨ Tính năng nổi bật

### 🎨 **Giao diện hiện đại**

- Thiết kế responsive hoàn hảo trên mọi thiết bị
- Dark/Light mode với theme switching mượt mà
- Animation và transitions sử dụng Framer Motion
- UI components từ [shadcn/ui](https://ui.shadcn.com/) và [magic ui](https://magicui.design/)

### 📝 **Nội dung phong phú**

- **Resume/CV**: Thông tin cá nhân và kinh nghiệm
- **Projects**: Showcase các dự án đã thực hiện
- **Hackathons**: Các cuộc thi hackathon đã tham gia
- **Blog**: Bài viết và chia sẻ kiến thức
- **Contact**: Thông tin liên hệ và social links

### 🛠️ **Công nghệ sử dụng**

- **Framework**: Next.js 14 với App Router
- **Language**: TypeScript (strict mode)
- **Styling**: TailwindCSS với custom animations
- **UI Library**: Radix UI, shadcn/ui, Lucide Icons
- **Animation**: Framer Motion, Motion
- **Content**: MDX cho blog posts
- **Deployment**: Vercel với custom domain

### ⚡ **Tối ưu hóa**

- **Performance**: Optimized for Core Web Vitals
- **SEO**: Meta tags và Open Graph chuẩn
- **Accessibility**: WCAG 2.1 compliant
- **Code Quality**: ESLint với import sorting tự động

## 🚀 Cài đặt và chạy locally

### Prerequisites

- Node.js 20+
- pnpm package manager

### Các bước thực hiện

1. **Clone repository**

   ```bash
   git clone https://github.com/luukhoahoc/luukhoahoc.github.io.git
   cd luukhoahoc.github.io
   ```

2. **Cài đặt dependencies**

   ```bash
   pnpm install
   ```

3. **Chạy development server**

   ```bash
   pnpm dev
   ```

4. **Mở trình duyệt**

   ```
   http://localhost:3000
   ```

5. **Tùy chỉnh nội dung**
   - Chỉnh sửa thông tin cá nhân: [`src/data/resume.tsx`](./src/data/resume.tsx)
   - Thêm bài viết blog: [`content/`](./content/) folder
   - Cập nhật dự án: [`src/data/`](./src/data/) folder

## 📜 Scripts hữu ích

```bash
# Development
pnpm dev              # Chạy development server
pnpm build           # Build production
pnpm start           # Chạy production server

# Code Quality
pnpm lint            # Kiểm tra ESLint
pnpm lint --fix      # Tự động sửa lỗi ESLint và sắp xếp import

# Type checking
pnpm type-check      # Kiểm tra TypeScript types
```

## 🎯 Cấu trúc dự án

```
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── blog/           # Blog pages
│   │   ├── globals.css     # Global styles
│   │   └── layout.tsx      # Root layout
│   ├── components/         # React components
│   │   ├── ui/            # Reusable UI components
│   │   ├── magicui/       # Magic UI components
│   │   └── ...            # Feature components
│   ├── data/              # Data files (resume, blog, etc.)
│   └── lib/               # Utilities và configurations
├── content/               # MDX blog posts
└── public/               # Static assets
```

## 🔧 Cấu hình ESLint

Dự án sử dụng ESLint với `eslint-plugin-import` để tự động sắp xếp import theo chuẩn quốc tế:

- **Import order**: External → Internal → Relative
- **Alphabetical sorting** trong từng nhóm
- **Auto-fix**: Tự động sắp xếp khi save hoặc chạy `pnpm lint --fix`

## 🌐 Deployment

### Vercel (Khuyến nghị)

1. Import project từ GitHub
2. Cấu hình environment variables (nếu cần)
3. Deploy tự động khi push lên main branch

### Manual deployment

```bash
pnpm build
pnpm start
```

## 📝 License

Licensed under the [MIT license](./LICENSE).

## 👨‍💻 Author

**Luu Khoa Hoc** - [luukhoahoc.me](https://luukhoahoc.me)

---

<div align="center">
  <p>⭐ Nếu bạn thấy dự án này hữu ích, hãy cho một star nhé!</p>
</div>

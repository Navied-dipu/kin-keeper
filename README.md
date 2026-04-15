# 🐣 KeenKeeper — Friend Relationship Tracker App

## 📌 Project Description
KeenKeeper is a responsive full-stack friendly relationship tracking web application built with **Next.js** and **Tailwind CSS**.  
It helps users manage friendships, track interactions (Call, Text, Video), and visualize relationship activity through analytics and timelines.

The app is fully responsive and works smoothly across **mobile, tablet, and desktop devices**.

---

## 🚀 Live Features

### 🔝 Navbar
- Clean responsive navbar inspired by Figma design
- Logo on the left, navigation links on the right
- Pages: Home, Timeline, Stats
- Active route highlighting with icons

---

### 🎯 Home Page Banner
- Centered title and subtitle
- “Add a Friend” button with icon
- 4 summary/stat cards below banner

---

### 👫 Friends Management
- Friends data loaded from a local JSON file
- Displays 6–10 realistic friend profiles
- Each friend card includes:
  - Profile picture
  - Name
  - Days since last contact
  - Tags (e.g., college, work, close friend)
  - Status indicator (overdue / almost due / on-track)
- Responsive grid layout (4 columns on large screens)
- Clickable cards → navigates to Friend Details page

---

### 👤 Friend Details Page
Two-column layout:

#### Left Side:
- Profile picture
- Name & email
- Status badge (color-coded)
- Tags & bio
- Action buttons:
  - ⏰ Snooze 2 Weeks
  - 📦 Archive
  - 🗑️ Delete

#### Right Side:
- 📊 Stats Cards:
  - Days Since Contact
  - Goal (days)
  - Next Due Date
- 🎯 Relationship Goal Card (editable UI)
- ⚡ Quick Check-In:
  - Call 📞
  - Text 💬
  - Video 🎥

---

### ⚡ Quick Check-In System
- Clicking Call/Text/Video:
  - Adds new timeline entry automatically
  - Generates title like:
    - "Call with John Doe"
    - "Text with John Doe"
  - Shows toast notification

---

### 📜 Timeline Page
- Displays all interaction history
- Each entry includes:
  - Date
  - Type icon (Call / Text / Video)
  - Title of interaction
- Filter system:
  - Filter by Call
  - Filter by Text
  - Filter by Video

---

### 📊 Stats / Analytics Page
- “Friendship Analytics” dashboard
- Pie chart using **Recharts**
- Shows interaction distribution:
  - Call
  - Text
  - Video

---

### 🦶 Footer
- Fully responsive footer
- Matches overall design theme

---

## 🛠️ Tech Stack
- ⚛️ Next.js
- ⚡ React.js
- 🎨 Tailwind CSS
- 🧩 DaisyUI
- 📊 Recharts
- 🔔 React Toastify (notifications)

---

## 📱 Responsive Design
Fully optimized for:
- 📱 Mobile
- 📟 Tablet
- 💻 Desktop

---

## ⚙️ Extra Requirements Implemented
- ✅ 404 Page for invalid routes
- ✅ Loading animation while fetching friends data
- ✅ Toast notifications for interactions
- ✅ Page refresh safe (no runtime errors after deployment)
- ✅ Clean JSON-based data structure

---

## 📂 JSON Data Structure Example
```json
{
  "id": 1,
  "name": "John Doe",
  "picture": "https://example.com/photo.jpg",
  "email": "john@example.com",
  "days_since_contact": 12,
  "status": "overdue",
  "tags": ["college", "close friend"],
  "bio": "Met in university. Love hiking together.",
  "goal": 14,
  "next_due_date": "2025-07-20"
}
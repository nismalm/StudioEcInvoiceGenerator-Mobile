# Receipt/Invoice Generator - Expo App

## ✅ Perfect Solution - No Android Studio Needed!

Your Receipt/Invoice Generator is now built with **Expo** - this means:
- **No Android Studio required**
- **No complex setup**  
- **Test instantly on your phone**
- **Generate APK for distribution**

## 🚀 Quick Start (2 Minutes Setup)

### Step 1: Install Expo CLI
```bash
npm install -g @expo/cli
```

### Step 2: Start the Development Server
```bash
cd ReceiptGenerator
npx expo start
```

### Step 3: Test on Your Phone
1. **Download "Expo Go" app** from Google Play Store (Android) or App Store (iPhone)
2. **Scan the QR code** shown in your terminal/browser
3. **App loads instantly** on your device!

## 📱 Features Built

**✅ All Your Requirements Implemented:**
- **Project Selection** with dropdown
- **PART 1**: Invoice/Receipt selection
- **PART 2**: Smart numbering (INV/RP/2025/010/01)
- **PART 3**: Auto-fill project info with editable Bill To
- **PART 4**: Dynamic items with automatic calculations
- **PART 5**: Notes section
- **PDF Generation** with your exact studio.ec template design

## 🎯 How to Use the App

1. **Select Project** from dropdown
2. **Choose Document Type** (Invoice/Receipt)
3. **Configure Numbering** (project type, year, receipt number)
4. **Fill Items** (description, quantity, price, tax - amount auto-calculated)
5. **Add Notes** if needed
6. **Generate PDF** - automatically shares/saves to device

## 📄 PDF Output

The generated PDFs match your template **exactly**:
- studio.ec branding and layout
- Proper PART labels and positioning
- Professional formatting
- Automatic calculations and totals
- Your company contact details

## 🏗️ Building for Distribution

### For Testing During Development
```bash
npx expo start
# Scan QR code with Expo Go app
```

### To Build APK (for sharing with others)
```bash
# Build Android APK
npx expo build:android -t apk

# Build for Google Play Store (AAB)
npx expo build:android -t app-bundle
```

### To Build for iOS
```bash
npx expo build:ios
```

## 💾 Data Storage

- **Projects**: Stored locally using AsyncStorage
- **Generated PDFs**: Saved to device Documents folder
- **No cloud dependencies**: Works completely offline
- **Free forever**: No subscription costs

## 🎨 Customization

To modify company details, edit the `generateHTML()` function in `App.js` around line 109.

## 🔧 Troubleshooting

**If Expo Go doesn't connect:**
- Ensure phone and computer are on same WiFi
- Try `npx expo start --tunnel`

**If PDF generation fails:**
- Check device storage permissions
- Ensure device has sufficient storage

## ✨ Advantages of Expo Version

1. **Instant Testing** - No Android Studio setup needed
2. **Cross Platform** - Works on both Android and iPhone
3. **Easy Distribution** - Share APK files directly
4. **Hot Reload** - Changes appear instantly during development
5. **Professional PDFs** - Perfect template matching

Your receipt/invoice generator is now ready to use! 🎉

[//]: # BUILD APK(eas build --platform android --profile apk)
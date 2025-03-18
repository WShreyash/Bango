# 🚀 Bango

**Bango** is a lightweight, fast utility app that lets you perform **quick searches** directly from your desktop using custom **bang** commands.

> ⚠️ **Beta Release Notice:**  
This is a **beta** release, so bugs may occur. Please report issues or feedback on my **[GitHub Issues](https://github.com/WShreyash/Bango/issues)** page.

---

## ✨ Features
✅ **Quick Search Bangs:**  
- `.yt` — YouTube Search  
- `.gpt` — GPT Search  
- `.ghub` — GitHub Search  
- `.bing` — Bing Search  
- `.wiki` — Wikipedia Search  

**Examples:**  
```
Minecraft.yt   → Searches "Minecraft" on YouTube
Elon Musk.wiki → Wikipedia search for Elon Musk
electron.ghub  → Searches "electron" on GitHub
```

✅ **Minimal UI & Fast Performance**  
✅ **Cross-Platform:** Works on **Windows** 🖥️, **Linux** 🐧, and **Mac** 🍎  

---

## 🖥️ Windows Setup
1. Download the installer from the **[Releases](https://github.com/WShreyash/Bango/releases/tag/v0.0.1-beta)** page.
2. Run the installer.
3. To auto-start Bango at Windows startup:  
   - Create a shortcut for the app.  
   - Press `Win + R`, type `shell:startup`, and press **Enter**.  
   - Paste the shortcut in the folder that opens.

---

## 🐧 Linux Setup
1. Download the **AppImage** from the **[Releases](https://github.com/WShreyash/Bango/releases/tag/v0.0.1-beta)** page.
2. Open Terminal and navigate to the AppImage location:  
   ```bash
   cd /path/to/AppImage
   ```
3. Make the AppImage executable:  
   ```bash
   chmod +x Bango-0.0.1.AppImage
   ```
4. Run the AppImage:  
   ```bash
   ./Bango-0.0.1.AppImage
   ```

### 🖥️ **Optional: Create a Desktop Shortcut**
1. Run this command to create the shortcut:
   ```bash
   echo "[Desktop Entry]
   Name=Bango
   Exec=/full/path/to/Bango-0.0.1.AppImage
   Icon=/full/path/to/icon.png
   Type=Application
   Categories=Utility;
   Terminal=false" > ~/.local/share/applications/bango.desktop
   ```
2. Make it executable:  
   ```bash
   chmod +x ~/.local/share/applications/bango.desktop
   xdg-desktop-menu install --novendor ~/.local/share/applications/bango.desktop
   ```

---

## 🍎 macOS Setup
1. Download and extract the **mac.zip** file from the **[Releases](https://github.com/WShreyash/Bango/releases/tag/v0.0.1-beta)** page.
2. Open Terminal and navigate to the app bundle:  
   ```bash
   cd /path/to/Bango.app/Contents/MacOS/
   ```
3. Make the app executable:  
   ```bash
   chmod +x Bango
   ```
4. Launch the app:  
   ```bash
   ./Bango
   ```
5. If macOS Gatekeeper blocks the app, run:  
   ```bash
   xattr -cr /path/to/Bango.app
   open /path/to/Bango.app
   ```

---

## 🧪 Beta Release Info
This is an **early beta release**. Expect some bugs or quirks as we refine the experience.
Please report any issues or suggestions on our **[GitHub Issues](https://github.com/WShreyash/Bango/issues)** page.

---

🔍 Happy **searching**, and thanks for being part of the journey! 🚀

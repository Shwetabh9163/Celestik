/**
 * Run this once to copy the palmistry hand image into public/images:
 *   node setup-assets.js
 */
const fs = require("fs");
const path = require("path");

const src = path.join(
  process.env.USERPROFILE || process.env.HOME,
  ".gemini/antigravity/brain/11510076-bf12-4dec-9e1c-e2b3ffaef930/media__1771768522662.jpg"
);
const destDir = path.join(__dirname, "public", "images");
const dest = path.join(destDir, "palm_hand.jpg");

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
  console.log("Created:", destDir);
}

if (fs.existsSync(src)) {
  fs.copyFileSync(src, dest);
  console.log("✓ palmistry hand image copied to:", dest);
} else {
  console.error("Source not found:", src);
  console.log("Please copy your palmistry hand image manually to:");
  console.log("  public/images/palm_hand.jpg");
}

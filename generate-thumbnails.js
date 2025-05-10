// generate-thumbnails.js
const fs = require("fs-extra");
const path = require("path");
const sharp = require("sharp");

const INPUT_DIR = path.join(__dirname, "public/assets/images");
const OUTPUT_DIR = INPUT_DIR; // Outputs next to original

const sizes = [
  { suffix: "-thumb", width: 300 },
  { suffix: "-medium", width: 800 }
];

async function processImage(file) {
  const ext = path.extname(file).toLowerCase();
  const base = path.basename(file, ext);
  const inputPath = path.join(INPUT_DIR, file);

  // Only process .jpg, .jpeg, .png
  if (![".jpg", ".JPG", ".jpeg", ".png"].includes(ext)) return;

  for (const { suffix, width } of sizes) {
    const outputFileName = `${base}${suffix}.webp`;
    const outputPath = path.join(OUTPUT_DIR, outputFileName);

    try {
      await sharp(inputPath)
        .resize({ width })
        .webp({ quality: 80 })
        .toFile(outputPath);
      console.log(`✔ Created: ${outputFileName}`);
    } catch (err) {
      console.error(`❌ Error processing ${file} at size ${width}:`, err);
    }
  }
}

async function run() {
  const files = await fs.readdir(INPUT_DIR);
  await Promise.all(files.map(processImage));
  console.log("✅ All thumbnails generated!");
}

run();

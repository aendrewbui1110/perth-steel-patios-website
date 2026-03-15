import sharp from 'sharp';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const inputPath = path.join(__dirname, '..', 'src', 'assets', 'hero.jpg');
const outputDir = path.join(__dirname, '..', 'src', 'assets');

async function optimize() {
  const sizes = [
    { width: 640, suffix: '-640' },
    { width: 1024, suffix: '-1024' },
    { width: 1920, suffix: '-1920' },
  ];

  for (const { width, suffix } of sizes) {
    await sharp(inputPath)
      .resize(width, null, { withoutEnlargement: true })
      .jpeg({ quality: 80, progressive: true })
      .toFile(path.join(outputDir, `hero${suffix}.jpg`));

    console.log(`Created hero${suffix}.jpg at ${width}px wide`);
  }

  // Also create a main optimized version
  await sharp(inputPath)
    .resize(1920, null, { withoutEnlargement: true })
    .jpeg({ quality: 80, progressive: true })
    .toFile(path.join(outputDir, 'hero-optimized.jpg'));

  console.log('Created hero-optimized.jpg');
}

optimize().catch(console.error);

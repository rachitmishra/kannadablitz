import { Jimp } from "jimp";

async function createIcon(size) {
  const image = new Jimp({ width: size, height: size, color: 0x4A90E2FF }); // Blue background

  // Let's draw a simple white square in the middle to represent a placeholder for the logo
  // simple 5x5 grid logic scaled up
  
  // "KB" pixel art (5 pixels high)
  // K:
  // 1 0 0 1
  // 1 0 1 0
  // 1 1 0 0
  // 1 0 1 0
  // 1 0 0 1
  
  // B:
  // 1 1 1 0
  // 1 0 0 1
  // 1 1 1 0
  // 1 0 0 1
  // 1 1 1 0
  
  const K = [
    [1, 0, 0, 1],
    [1, 0, 1, 0],
    [1, 1, 0, 0],
    [1, 0, 1, 0],
    [1, 0, 0, 1]
  ];
  
  const B = [
    [1, 1, 1, 0],
    [1, 0, 0, 1],
    [1, 1, 1, 0],
    [1, 0, 0, 1],
    [1, 1, 1, 0]
  ];
  
  // Combine them with a space
  // Total width: 4 (K) + 1 (space) + 4 (B) = 9
  // Height: 5
  
  const gridWidth = 9;
  const gridHeight = 5;
  
  // maximize pixel size
  const pixelSize = Math.floor(size * 0.6 / gridHeight); // use 60% of height
  
  const startX = Math.floor((size - (gridWidth * pixelSize)) / 2);
  const startY = Math.floor((size - (gridHeight * pixelSize)) / 2);
  
  const white = 0xFFFFFFFF;
  
  function drawPixel(gx, gy) {
    // Draw a rectangle at grid position gx, gy
    const px = startX + gx * pixelSize;
    const py = startY + gy * pixelSize;
    
    // Fill rectangle
    for (let i = 0; i < pixelSize; i++) {
        for (let j = 0; j < pixelSize; j++) {
            if (px + i < size && py + j < size) {
                 image.setPixelColor(white, px + i, py + j);
            }
        }
    }
  }
  
  // Draw K
  for(let r=0; r<5; r++) {
      for(let c=0; c<4; c++) {
          if (K[r][c]) drawPixel(c, r);
      }
  }
  
  // Draw B (offset x by 5)
  for(let r=0; r<5; r++) {
      for(let c=0; c<4; c++) {
          if (B[r][c]) drawPixel(c + 5, r);
      }
  }
  
  const fileName = `public/apple-touch-icon-${size}x${size}.png`;
  await image.write(fileName);
  console.log(`Created ${fileName}`);
}

async function main() {
  const sizes = [60, 76, 120, 152, 180];
  for (const size of sizes) {
    await createIcon(size);
  }
}

main().catch(console.error);
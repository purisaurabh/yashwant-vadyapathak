from PIL import Image

def process_image(img_path):
    try:
        img = Image.open(img_path).convert("RGBA")
        data = img.getdata()
        new_data = []
        
        for item in data:
            brightness = (item[0] + item[1] + item[2]) / 3
            
            if brightness > 230:
                new_data.append((item[0], item[1], item[2], 0))
            elif brightness > 180:
                alpha = int(255 * (230 - brightness) / 50)
                new_data.append((item[0], item[1], item[2], max(0, min(255, alpha))))
            else:
                new_data.append(item)
                
        img.putdata(new_data)
        img.save(img_path)
        print(f"Processed {img_path}")
    except Exception as e:
        print(f"Failed {img_path}: {e}")

paths = [
    "d:/E/Yashwant/public/dhol_corner.png",
    "d:/E/Yashwant/public/tasha_corner.png",
    "d:/E/Yashwant/public/flag_corner.png",
    "d:/E/Yashwant/public/cymbals_corner.png"
]

for p in paths:
    process_image(p)

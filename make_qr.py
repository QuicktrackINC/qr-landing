import qrcode
from PIL import Image, ImageDraw

def create_branded_qr():
    # 1. Create QR code with high error correction
    qr = qrcode.QRCode(
        version=4,
        error_correction=qrcode.constants.ERROR_CORRECT_H,
        box_size=16,
        border=3,
    )
    url = "https://qr-landing-omega.vercel.app"
    qr.add_data(url)
    qr.make(fit=True)

    # Make QR image
    # Use dark charcoal/black for modules, white for background
    qr_img = qr.make_image(fill_color="#1D1D1F", back_color="#FFFFFF").convert('RGBA')

    # 2. Open logo
    logo_path = "public/logo.png"
    logo = Image.open(logo_path).convert('RGBA')

    # Calculate sizes
    qr_width, qr_height = qr_img.size
    
    # Logo size should be around 24% of QR code width
    logo_size = int(qr_width * 0.26)
    logo = logo.resize((logo_size, logo_size), Image.Resampling.LANCZOS)

    # Create a circular mask / white background for logo to ensure maximum contrast & scannability
    bg_size = logo_size + 16
    logo_bg = Image.new('RGBA', (bg_size, bg_size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(logo_bg)
    
    # Draw white circle background with subtle orange border
    draw.ellipse((0, 0, bg_size - 1, bg_size - 1), fill=(255, 255, 255, 255), outline=(255, 102, 0, 255), width=4)
    
    # Paste logo onto white circular background
    offset = (bg_size - logo_size) // 2
    logo_bg.paste(logo, (offset, offset), logo)

    # 3. Paste logo container into the middle of QR code
    pos = ((qr_width - bg_size) // 2, (qr_height - bg_size) // 2)
    qr_img.paste(logo_bg, pos, logo_bg)

    # Save outputs
    qr_img.save("public/lama_qr_code.png")
    qr_img.save("public/lama_qr_code_hd.png")
    print(f"QR Code successfully created! Size: {qr_img.size}")

if __name__ == "__main__":
    create_branded_qr()

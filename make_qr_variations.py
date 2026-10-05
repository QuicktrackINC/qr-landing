import qrcode
from PIL import Image, ImageDraw

def create_accent_qr():
    # High error correction
    qr = qrcode.QRCode(
        version=4,
        error_correction=qrcode.constants.ERROR_CORRECT_H,
        box_size=18,
        border=3,
    )
    url = "https://qr-landing-omega.vercel.app"
    qr.add_data(url)
    qr.make(fit=True)

    # Base QR image
    qr_img = qr.make_image(fill_color="#1D1D1F", back_color="#FFFFFF").convert('RGBA')

    # Open logo
    logo = Image.open("public/logo.png").convert('RGBA')
    qr_width, qr_height = qr_img.size

    # Logo size ~ 25% of QR width
    logo_size = int(qr_width * 0.25)
    logo = logo.resize((logo_size, logo_size), Image.Resampling.LANCZOS)

    # Circular container with orange border
    bg_size = logo_size + 20
    logo_bg = Image.new('RGBA', (bg_size, bg_size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(logo_bg)
    
    # Outer orange ring & white inner circle
    draw.ellipse((0, 0, bg_size - 1, bg_size - 1), fill=(255, 255, 255, 255), outline=(255, 102, 0, 255), width=5)
    
    offset = (bg_size - logo_size) // 2
    logo_bg.paste(logo, (offset, offset), logo)

    pos = ((qr_width - bg_size) // 2, (qr_height - bg_size) // 2)
    qr_img.paste(logo_bg, pos, logo_bg)

    # Save
    qr_img.save("public/lama_qr_accent.png")
    print("Accent QR created!")

if __name__ == "__main__":
    create_accent_qr()

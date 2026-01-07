from PIL import Image, ImageDraw, ImageFont

W, H = 500, 300
img = Image.new("RGB", (W, H), "#1f2933")
draw = ImageDraw.Draw(img)

# Linux-safe fonts
font_big = ImageFont.truetype(
    "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 36
)
font_mid = ImageFont.truetype(
    "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 22
)

# Use same font for symbols (emoji-like)
emoji_font = ImageFont.truetype(
    "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 18
)

name = "Amey Sanmati"
role = "Python Developer"
company = "CLCODING"
phone = "+91 91111 90000"
email = "udaykalse@gmail.com"
web = "www.clcoding.com"

draw.text((30, 30), name, font=font_big, fill="white")
draw.text((30, 80), role, font=font_mid, fill="#9ca3af")
draw.text((30, 110), company, font=font_mid, fill="#60a5fa")

# Use symbols instead of emoji (Linux-safe)
draw.text((30, 180), "Phone: " + phone, font=emoji_font, fill="white")
draw.text((30, 210), "Email: " + email, font=emoji_font, fill="white")
draw.text((30, 240), "Web: " + web, font=emoji_font, fill="white")

img.save("business_card_fixed.png")
img

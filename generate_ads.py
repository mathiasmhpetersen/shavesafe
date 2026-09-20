#!/usr/bin/env python3
"""
Huxi Bach Tour Ad Generator
=============================
Generates city-specific ads from a template image by replacing
date and venue text for each tour stop.

Requirements:
    pip install Pillow numpy

Font:
    Uses League Gothic Condensed. The script will attempt to find it
    in common locations or you can specify the path via --font.

    Install on macOS:  brew install --cask font-league-gothic
    Install on Linux:  Download from https://www.theleagueoftype.com/league-gothic
    Or just drop the .ttf/.otf file in this directory.

Usage:
    python generate_ads.py template.png
    python generate_ads.py template.png --font /path/to/LeagueGothicCondensed.ttf
    python generate_ads.py template.png --output ./output_ads
"""

import argparse
import os
import sys
from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageFont


# ─────────────────────────────────────────────
# CONFIGURATION — Edit this for each campaign
# ─────────────────────────────────────────────

SHOWS = [
    {
        "city": "København",
        "date_line1": "DEN 11.-12.",
        "date_line2": "NOVEMBER",
        "venue_line1": "BREMEN TEATER",
        "venue_line2": "KØBENHAVN",
        "filename": "Ubegribeligt_4x5_-_Kobenhavn.png",
    },
    {
        "city": "Aarhus",
        "date_line1": "DEN 25.",
        "date_line2": "NOVEMBER",
        "venue_line1": "MUSIKHUSET",
        "venue_line2": "AARHUS",
        "filename": "Ubegribeligt_4x5_-_Aarhus.png",
    },
    {
        "city": "Odense",
        "date_line1": "DEN 3.",
        "date_line2": "DECEMBER",
        "venue_line1": "MAGASINET",
        "venue_line2": "ODENSE",
        "filename": "Ubegribeligt_4x5_-_Odense.png",
    },
    {
        "city": "Aalborg",
        "date_line1": "DEN 9.",
        "date_line2": "DECEMBER",
        "venue_line1": "AKKC",
        "venue_line2": "AALBORG",
        "filename": "Ubegribeligt_4x5_-_Aalborg.png",
    },
]


# ─────────────────────────────────────────────
# TEMPLATE LAYOUT — Pixel positions for 1080x1350
# Adjust these if using a different template
# ─────────────────────────────────────────────

LAYOUT = {
    # Background color (sampled from template)
    "bg_color": (254, 255, 249),

    # Text color (near-black from the original)
    "text_color": (32, 28, 30),

    # Base font size (calibrated for 1080x1350 template)
    "font_size": 127,

    # Erase regions: rectangles painted with bg_color before drawing new text
    # Format: (x1, y1, x2, y2)
    "erase_date": (0, 375, 460, 520),
    "erase_venue": (620, 375, 1080, 520),

    # Text anchor positions
    "date_x": 44,          # Left-aligned x
    "venue_right_x": 1030, # Right-aligned x edge
    "line1_y": 386,        # Top of line 1 text
    "line2_y": 451,        # Top of line 2 text

    # Maximum width for text before auto-scaling (to avoid overlapping face)
    "max_date_width": 400,   # Max width for date text (left side)
    "max_venue_width": 380,  # Max width for venue text (right side)
}


# ─────────────────────────────────────────────
# FONT DISCOVERY
# ─────────────────────────────────────────────

FONT_SEARCH_PATHS = [
    # Current directory
    "LeagueGothicCondensed.ttf",
    "LeagueGothic-Condensed.ttf",
    "league-gothic-condensed.ttf",
    "LeagueGothicCondensed.otf",
    "LeagueGothic-CondensedRegular.otf",
    # macOS
    os.path.expanduser("~/Library/Fonts/LeagueGothic-CondensedRegular.otf"),
    os.path.expanduser("~/Library/Fonts/LeagueGothicCondensed-Regular.ttf"),
    "/Library/Fonts/LeagueGothic-CondensedRegular.otf",
    # Linux
    "/usr/share/fonts/truetype/league-gothic/LeagueGothic-CondensedRegular.ttf",
    "/usr/local/share/fonts/LeagueGothic-CondensedRegular.ttf",
    os.path.expanduser("~/.local/share/fonts/LeagueGothic-CondensedRegular.ttf"),
    # Windows
    "C:/Windows/Fonts/LeagueGothic-CondensedRegular.ttf",
]


def find_font(custom_path=None):
    """Find League Gothic Condensed font file."""
    if custom_path and os.path.exists(custom_path):
        return custom_path

    for path in FONT_SEARCH_PATHS:
        if os.path.exists(path):
            return path

    return None


# ─────────────────────────────────────────────
# AD GENERATION
# ─────────────────────────────────────────────

def get_text_width(font, text):
    """Get the rendered width of text."""
    bbox = font.getbbox(text)
    return bbox[2] - bbox[0]


def get_font_top_offset(font, text="DECEMBER"):
    """Get the top offset (blank space above glyphs) for vertical alignment."""
    bbox = font.getbbox(text)
    return bbox[1]


def get_scaled_font(font_path, base_size, text, max_width):
    """Return a font sized to fit text within max_width."""
    size = base_size
    font = ImageFont.truetype(font_path, size)
    width = get_text_width(font, text)

    if width <= max_width:
        return font, size

    # Scale down to fit
    while width > max_width and size > 20:
        size -= 2
        font = ImageFont.truetype(font_path, size)
        width = get_text_width(font, text)

    return font, size


def generate_ad(template_path, show, font_path, output_path, layout=None):
    """Generate a single ad variant from the template."""
    if layout is None:
        layout = LAYOUT

    # Load template
    img = Image.open(template_path).copy()
    draw = ImageDraw.Draw(img)

    bg = layout["bg_color"]
    text_color = layout["text_color"]
    base_size = layout["font_size"]

    # ── Step 1: Erase old text ──
    draw.rectangle(layout["erase_date"], fill=bg)
    draw.rectangle(layout["erase_venue"], fill=bg)

    # ── Step 2: Calculate font sizes ──
    # Date side: use the wider of the two lines to determine scaling
    date_max_w = max(
        get_text_width(ImageFont.truetype(font_path, base_size), show["date_line1"]),
        get_text_width(ImageFont.truetype(font_path, base_size), show["date_line2"]),
    )

    if date_max_w > layout["max_date_width"]:
        wider_line = show["date_line1"] if get_text_width(
            ImageFont.truetype(font_path, base_size), show["date_line1"]
        ) >= get_text_width(
            ImageFont.truetype(font_path, base_size), show["date_line2"]
        ) else show["date_line2"]
        date_font, date_size = get_scaled_font(font_path, base_size, wider_line, layout["max_date_width"])
    else:
        date_font = ImageFont.truetype(font_path, base_size)
        date_size = base_size

    # Venue side: same logic
    venue_max_w = max(
        get_text_width(ImageFont.truetype(font_path, base_size), show["venue_line1"]),
        get_text_width(ImageFont.truetype(font_path, base_size), show["venue_line2"]),
    )

    if venue_max_w > layout["max_venue_width"]:
        wider_line = show["venue_line1"] if get_text_width(
            ImageFont.truetype(font_path, base_size), show["venue_line1"]
        ) >= get_text_width(
            ImageFont.truetype(font_path, base_size), show["venue_line2"]
        ) else show["venue_line2"]
        venue_font, venue_size = get_scaled_font(font_path, base_size, wider_line, layout["max_venue_width"])
    else:
        venue_font = ImageFont.truetype(font_path, base_size)
        venue_size = base_size

    # ── Step 3: Draw new text ──
    # Calculate y positions accounting for font metrics
    date_top_offset = get_font_top_offset(date_font)
    venue_top_offset = get_font_top_offset(venue_font)

    y1_date = layout["line1_y"] - date_top_offset
    y2_date = layout["line2_y"] - date_top_offset
    y1_venue = layout["line1_y"] - venue_top_offset
    y2_venue = layout["line2_y"] - venue_top_offset

    # Date: left-aligned
    draw.text((layout["date_x"], y1_date), show["date_line1"], font=date_font, fill=text_color)
    draw.text((layout["date_x"], y2_date), show["date_line2"], font=date_font, fill=text_color)

    # Venue: right-aligned
    v1_w = get_text_width(venue_font, show["venue_line1"])
    v2_w = get_text_width(venue_font, show["venue_line2"])
    right_x = layout["venue_right_x"]

    draw.text((right_x - v1_w, y1_venue), show["venue_line1"], font=venue_font, fill=text_color)
    draw.text((right_x - v2_w, y2_venue), show["venue_line2"], font=venue_font, fill=text_color)

    # ── Step 4: Save ──
    img.save(output_path, quality=95)
    return output_path


def main():
    parser = argparse.ArgumentParser(
        description="Generate city-specific ads from a template image"
    )
    parser.add_argument(
        "template",
        help="Path to the template image (e.g. Ubegribeligt_4x5_-_Aalborg.png)"
    )
    parser.add_argument(
        "--font",
        help="Path to League Gothic Condensed font file (.ttf or .otf)",
        default=None,
    )
    parser.add_argument(
        "--output", "-o",
        help="Output directory (default: ./output)",
        default="./output",
    )
    parser.add_argument(
        "--preview",
        help="Generate only one city for preview (e.g. 'Aarhus')",
        default=None,
    )

    args = parser.parse_args()

    # Validate template
    if not os.path.exists(args.template):
        print(f"❌ Template not found: {args.template}")
        sys.exit(1)

    # Find font
    font_path = find_font(args.font)
    if font_path is None:
        print("❌ Could not find League Gothic Condensed font.")
        print("   Options:")
        print("   1. Download from https://www.theleagueoftype.com/league-gothic")
        print("   2. Place the .ttf file in this directory")
        print("   3. Use --font /path/to/font.ttf")
        sys.exit(1)

    print(f"📝 Font: {font_path}")
    print(f"🖼️  Template: {args.template}")

    # Create output directory
    output_dir = Path(args.output)
    output_dir.mkdir(parents=True, exist_ok=True)

    # Filter shows if preview mode
    shows = SHOWS
    if args.preview:
        shows = [s for s in SHOWS if s["city"].lower() == args.preview.lower()]
        if not shows:
            print(f"❌ City '{args.preview}' not found. Available: {', '.join(s['city'] for s in SHOWS)}")
            sys.exit(1)

    # Generate ads
    print(f"\n🚀 Generating {len(shows)} ad(s)...\n")

    for show in shows:
        output_path = output_dir / show["filename"]
        generate_ad(args.template, show, font_path, str(output_path))

        print(f"  ✅ {show['city']:<12} → {output_path}")
        print(f"     {show['date_line1']} {show['date_line2']}  |  {show['venue_line1']} {show['venue_line2']}")

    print(f"\n🎉 Done! {len(shows)} ads saved to {output_dir}/")


if __name__ == "__main__":
    main()

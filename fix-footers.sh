#!/bin/bash

# Script to check and report footer issues in HTML files
# This will help identify which files have broken footers

echo "Checking footer structure in HTML files..."
echo "==========================================="
echo ""

# Array of main HTML files to check
files=(
    "index.html"
    "blog.html"
    "our-team.html"
    "who-we-are.html"
    "contact.html"
    "volunteer.html"
    "support.html"
    "gallery.html"
)

broken_count=0

for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        # Count opening and closing footer tags
        opening=$(grep -c "<footer" "$file")
        closing=$(grep -c "</footer>" "$file")
        
        if [ "$opening" -ne "$closing" ]; then
            echo "❌ BROKEN: $file (Opening: $opening, Closing: $closing)"
            broken_count=$((broken_count + 1))
        else
            echo "✅ OK: $file"
        fi
    fi
done

echo ""
echo "==========================================="
echo "Summary: $broken_count files with footer issues"
echo ""

if [ $broken_count -gt 0 ]; then
    echo "Run this command to see footer structure:"
    echo "grep -A 5 -B 5 'footer-3d' [filename]"
fi

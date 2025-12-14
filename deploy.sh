#!/bin/bash

# סקריפט להעלאת עדכונים ל-GitHub ולהטמעה ב-Vercel
# Repository: landing-page-builders

echo "🚀 מעלה עדכונים ל-GitHub..."
echo ""

# בדיקת סטטוס
echo "📊 סטטוס Git:"
git status

echo ""
read -p "האם תרצה להמשיך ולהעלות? (y/n): " -n 1 -r
echo

if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "ביטול..."
    exit 1
fi

# הוספת כל הקבצים
echo ""
echo "➕ מוסיף קבצים..."
git add .

# Commit
if [ -z "$1" ]; then
    commit_msg="Update landing page"
else
    commit_msg="$1"
fi

echo ""
echo "💾 שומר שינויים: $commit_msg"
git commit -m "$commit_msg"

# Push
echo ""
echo "📤 מעלה ל-GitHub..."
git push origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ הקוד הועלה בהצלחה ל-GitHub!"
    echo ""
    echo "🔗 Repository: https://github.com/sasha463111/landing-page-builders"
    echo ""
    echo "📝 Vercel יעדכן את הדף אוטומטית תוך כמה שניות"
    echo "   אם לא, נסה לעשות redeploy ב-Vercel dashboard"
else
    echo ""
    echo "❌ שגיאה בהעלאה"
    exit 1
fi

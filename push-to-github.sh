#!/bin/bash

# סקריפט עזר להעלאת הקוד ל-GitHub

echo "🚀 העלאת דף הנחיתה ל-GitHub"
echo ""

# בדיקה אם יש remote כבר
if git remote -v | grep -q "origin"; then
    echo "⚠️  נמצא remote כבר קיים:"
    git remote -v
    read -p "האם תרצה להחליף אותו? (y/n): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        git remote remove origin
    else
        echo "ביטול..."
        exit 1
    fi
fi

# קבלת URL מה-user
echo "📝 אנא הזן את ה-URL של ה-repository שלך ב-GitHub"
echo "   לדוגמה: https://github.com/yourusername/landing-page.git"
read -p "GitHub Repository URL: " repo_url

if [ -z "$repo_url" ]; then
    echo "❌ לא הוזן URL. ביטול..."
    exit 1
fi

# הוספת remote
echo ""
echo "➕ מוסיף remote..."
git remote add origin "$repo_url"

# בדיקה
if [ $? -eq 0 ]; then
    echo "✅ Remote נוסף בהצלחה!"
    echo ""
    echo "Remote מוגדר:"
    git remote -v
    echo ""
    echo "📤 מעלה את הקוד ל-GitHub..."
    git push -u origin main
    
    if [ $? -eq 0 ]; then
        echo ""
        echo "🎉 הקוד הועלה בהצלחה ל-GitHub!"
        echo ""
        echo "עכשיו תוכל:"
        echo "1. להיכנס ל-Vercel.com"
        echo "2. לחבר את ה-repository"
        echo "3. לעשות deploy!"
        echo ""
        echo "לקרוא את קובץ DEPLOY.md להוראות מפורטות"
    else
        echo ""
        echo "❌ שגיאה בהעלאה. בדוק:"
        echo "   - שה-URL נכון"
        echo "   - שיש לך הרשאות ל-repository"
        echo "   - שהתחברת ל-GitHub (או Personal Access Token)"
    fi
else
    echo "❌ שגיאה בהוספת remote"
    exit 1
fi

# הוראות העלאה ל-GitHub ו-Vercel

## שלב 1: יצירת Repository ב-GitHub

1. היכנס ל-[GitHub.com](https://github.com) והתחבר
2. לחץ על הכפתור הירוק **"New"** או על **"+"** למעלה מימין
3. בחר **"New repository"**
4. מלא את הפרטים:
   - **Repository name**: `landing-page` (או שם אחר שאתה מעדיף)
   - **Description**: `Modern Hebrew landing page for SmartLeads`
   - בחר **Public** (או Private - Vercel עובד עם שניהם)
   - **אל תיצור README, .gitignore או רישיון** (כבר יש לנו)
5. לחץ על **"Create repository"**

## שלב 2: העלאת הקוד ל-GitHub

לאחר יצירת ה-repository, GitHub יציג לך הוראות. הפעל את הפקודות הבאות:

```bash
cd ~/landing-page

# הוסף את ה-remote (החלף את USERNAME בשם המשתמש שלך ב-GitHub)
git remote add origin https://github.com/USERNAME/landing-page.git

# בדוק שה-remote נוסף
git remote -v

# העלה את הקוד
git push -u origin main
```

**הערה**: אם תתבקש למזע, הזן את שם המשתמש והסיסמה שלך ב-GitHub (או Personal Access Token).

## שלב 3: חיבור ל-Vercel

1. היכנס ל-[Vercel.com](https://vercel.com) והתחבר (ניתן להתחבר עם GitHub)
2. לחץ על **"Add New..."** → **"Project"**
3. בחר את ה-repository שיצרת (`landing-page`)
4. Vercel יזהה אוטומטית שזה פרויקט סטטי:
   - **Framework Preset**: Other (או לא צריך לשנות)
   - **Root Directory**: `./` (ברירת מחדל)
   - **Build Command**: השאר ריק (אין build)
   - **Output Directory**: השאר ריק (אין build)
5. לחץ על **"Deploy"**
6. לאחר כמה שניות, הדף יהיה זמין בכתובת: `https://your-project.vercel.app`

## עדכונים עתידיים

כל פעם שתרצה לעדכן את הדף:
```bash
cd ~/landing-page
git add .
git commit -m "תיאור השינוי"
git push
```

Vercel יעדכן את הדף אוטומטית!

## הגדרות נוספות ב-Vercel (אופציונלי)

- **Domain מותאם**: ניתן להוסיף domain מותאם בהגדרות הפרויקט
- **Environment Variables**: אם תצטרך משתני סביבה
- **Analytics**: ניתן להפעיל Vercel Analytics לניתוח תנועה

---

**צריך עזרה?** Vercel יש להם תמיכה מעולה ו-documentation מפורטת.

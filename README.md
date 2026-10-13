# PM SHRI TGMS Pegadapally — Firebase website package

This folder is the deployable website source plus Firebase rules and PWA files. It uses the existing Firebase Web App configuration in `index.html`; it does not create or overwrite existing Authentication users or Firestore profiles.

## Files
- `index.html` — public homepage, Firebase sign-in, role-based starter portal, notices, admission enquiry submission, basic attendance/marks/result entry.
- `firestore.rules` — Firestore authorization rules (review against the live schema before publishing).
- `storage.rules` — Firebase Storage rules.
- `database.rules.json` — Realtime Database rules (only needed if the project uses RTDB).
- `manifest.json`, `service-worker.js`, `assets/` — installable PWA shell and icons.

## Deploy
1. Download/extract the ZIP. Keep the folder structure unchanged.
2. Add the school's real image files in `assets/` using the expected names: `principal.jpg`, `school-logo.png`, `tglogo.png`.
3. In Firebase Console, confirm Authentication Email/Password and Firestore are enabled.
4. Back up current Firestore rules, then review `firestore.rules` with the principal/authorized administrator and test in Rules Playground/Emulator before publishing. Deploy Storage and Realtime Database rules only if those products are used. These rules are separate.
5. Ensure every account's `users/{uid}` document ID matches its Firebase Authentication UID and contains the intended role (`student`, `teacher`, `admin`, or `master`). Do not allow users to edit their own role.
6. Upload the site files to the root of the GitHub Pages publishing branch/folder and enable HTTPS. The service worker/PWA works on HTTPS.
7. Test using a dedicated test student, teacher, and admin account before using real records.

## Important operational notes
- Existing student/teacher records are not imported, altered, or duplicated by this package.
- This is a deployable web package, but not a claim that every school workflow has been production-tested against your live Firebase project. Full roll-call attendance grid/history, bulk import/export, full exam schema, gallery upload management, password recovery workflow, push notifications, and end-to-end role/query testing need validation/implementation before real school-wide use.
- Do not put Firebase Admin SDK service-account private keys in this public website. The web config is not a service-account key.
- Do not use shared passwords for students. Use school-supervised account recovery and have an authorized adult approve access to real student records.

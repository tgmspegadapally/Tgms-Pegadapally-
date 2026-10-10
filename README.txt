PM SHRI TGMS PEGADAPALLY — PHASE 1 FIREBASE WEBSITE
====================================================

This package is the public-facing Phase 1 website. It uses the Firebase project configuration supplied by the school.

FILES
-----
- index.html: Public homepage, live public notice listener, Firebase-backed admission enquiry form.
- manifest.json: Installable PWA metadata.
- sw.js: Service worker; it does not cache cross-origin Firebase requests.
- assets/app-icon.svg: App icon.
- database.rules.json: Realtime Database rules to paste into Firebase Console.
- README.txt: Setup instructions and important limitations.

IMPORTANT SCOPE
---------------
Phase 1 deliberately does NOT include student/teacher roster records, passwords, private portals, or admin credentials in public HTML. GitHub Pages source is public, so embedding these would expose them to every visitor. Phase 2 can add accounts automatically using a secure authentication and authorization design; accounts do not need to be created manually one at a time.

FIREBASE SETUP — REQUIRED BEFORE PUBLIC USE
-------------------------------------------
1. Open https://console.firebase.google.com/ and select project `tgms-pegadapally`.
2. Open Build > Realtime Database. Confirm the database URL matches the configuration in index.html.
3. Open the Realtime Database Rules tab.
4. Back up the current rules before replacing anything. Paste the contents of database.rules.json and click Publish.
5. In the Realtime Database Data tab, create this public notice node:
   public
     notice
       on: false
       text: ""
6. To show a public notice, edit it in Firebase Console to:
   public/notice/on = true (boolean)
   public/notice/text = "Admissions are open. Contact the school office for details."
   To close it, set `on` to false. Visitors receive notice changes live.
7. Upload the files in this ZIP to the ROOT of the GitHub Pages repository, replacing the old index.html and sw.js. Keep the assets folder and manifest.json. Commit changes and wait for GitHub Pages to finish deploying over HTTPS.

ADMISSION ENQUIRIES
-------------------
- The form creates a random application ID and writes one record to `admissionApplications/<applicationId>`.
- Public clients can create a new enquiry but cannot read, edit, or delete submitted enquiries under the supplied rules.
- The public page does not expose submitted names or phone numbers.
- Staff must review enquiries in Firebase Console for Phase 1. The site does not yet provide a secure admin dashboard or public status tracking.

SECURITY NOTES — PLEASE READ
----------------------------
- Firebase web config values identify the project; they are not a replacement for database security rules.
- These rules prevent public reads and updates/deletes of existing application records, but a public form can still receive spam. This is a Phase 1 starter and is not a full anti-abuse system. Before a large public launch, add App Check and/or a trusted server-side form endpoint with abuse protection.
- Do not change database rules to allow public read/write at the root. Do not store student marks, attendance, Aadhaar, PAN, passwords, or staff-only data under publicly readable paths.
- Public notice updates are done in Firebase Console in Phase 1 because a secure website admin login has not yet been configured.
- Do not use the old browser-only demo login for real accounts. Phase 2 requires secure access control; an automated provisioning script can create the student and teacher accounts in bulk.

PWA INSTALLATION
----------------
After GitHub Pages deploys over HTTPS, open the site in Chrome and use the browser menu > Install app (or Add to Home screen, depending on device).


BRANDING ASSETS INCLUDED
- assets/school-logo.png: PM SHRI logo supplied by the school
- assets/principal.jpg: principal image supplied in this chat
- assets/favicon.png: school emblem/favicon supplied in this chat

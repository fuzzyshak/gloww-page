# Paris: Saudi Arabic by default, Lebanese when asked

## Where the change belongs
The /test7 page (Agent Paris) is not in this Gloww project. It lives in your Gymmai project (gymmai-lv). This project only shows Paris through the chat bubble, which opens gymmai-lv.lovable.app/test7. Nothing here controls how Paris speaks.

## What to do
1. Open the Gymmai project in Lovable.
2. Paste this request there:

   "On /test7, update Agent Paris's instructions: when speaking Arabic, default to the Saudi (Najdi/Hijazi everyday) dialect, not Modern Standard Arabic. If the user asks for Lebanese Arabic, switch to the Lebanese dialect and keep using it until asked to change. Keep English replies unchanged."

3. Test Paris on /test7 in Gymmai. The bubble on the Gloww page will pick up the change automatically, since it loads the same page.

## Changes in this project
None.

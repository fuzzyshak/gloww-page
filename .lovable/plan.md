## Paris works on /test7 but not inside the bubble on gymmai.com/gloww

This is expected from what I found. On /test7, Paris opens as her own page, so the microphone is allowed. On gymmai.com/gloww, she opens inside the bubble from another address (gymmai-lv.lovable.app). gymmai.com only allows the microphone for its own pages, so the call stops straight away. My test showed "microphone is not allowed in this document".

### Fix (in your Gymmai project, not this one)
Open your Gymmai project and paste this:

"In public/embed/paris-widget-snippet.js, change PARIS_URL to https://gymmai.com/test7?embed=1 and AVATAR to https://gymmai.com/paris/paris-400.jpg, so the bubble loads Paris from gymmai.com itself and the microphone is allowed. Also in public/_headers, change the Permissions-Policy line to: camera=(self "https://gymmai-lv.lovable.app"), microphone=(self "https://gymmai-lv.lovable.app"), geolocation=(self)"

### After the change
- Publish Gymmai, hard refresh gymmai.com/gloww, and click "Talk to Paris". The call should stay open.
- Nothing in this Gloww project needs to change, because it doesn't send that microphone restriction.

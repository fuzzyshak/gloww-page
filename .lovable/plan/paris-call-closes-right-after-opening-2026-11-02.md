## Paris call closes right after opening

The cause isn't confirmed yet. The bubble opens Paris from your Gymmai site (/test7) inside a small window. The call screen comes from that page, so the most likely cause is there, not in the bubble.

### Steps
1. Open gymmai.com/gloww in a test browser, click "Talk to Paris", and record what happens and any error messages.
2. Read the /test7 code in your Gymmai project (read only) to see what makes the call end. Likely causes:
   - The microphone is blocked inside the small window, so the call stops.
   - The call service refuses to connect when Paris runs inside another site.
   - /test7 closes the call when it detects it's inside a window.
3. Report the exact cause. If the fix belongs in the bubble, I'll make it here. If it belongs in /test7, I'll give you the exact message to paste in your Gymmai project.

### Technical details
- The bubble loads `https://gymmai-lv.lovable.app/test7?embed=1` in an iframe with `allow="microphone; camera; autoplay"`. The page is on gymmai.com, so the iframe is cross-origin. Check permissions-policy headers and the voice provider's allowed origins.
- The bubble only clears the iframe when someone clicks Close, so nothing on the bubble side ends the call on its own.

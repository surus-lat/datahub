

## Remove All Lovable Branding

### Changes to `index.html`

1. **Remove Lovable author meta** (line 8): Change `content="Lovable"` to `content="DataHub"` or remove entirely
2. **Fix OG title** (line 10): Change from the UUID to `"DataHub"`
3. **Fix OG description** (line 11): Change from `"Lovable Generated Project"` to `"DataHub - the missing data layer"`
4. **Remove Lovable OG image** (line 13): Remove the `og:image` meta tag pointing to `lovable.dev` (or replace with your own image if you have one)
5. **Remove Twitter Lovable references** (lines 15-17): Remove `twitter:site` pointing to `@lovable_dev` and `twitter:image` pointing to `lovable.dev`

### Lovable Badge

- The "Edit in Lovable" badge that appears on the published site can be hidden via **Project Settings > Hide 'Lovable' Badge** toggle (requires a paid plan)

### Favicon

- The current `public/favicon.ico` is the default Lovable favicon. To replace it, you'll need to provide your own favicon image or URL. Do you have one you'd like to use?

### Technical Summary

All changes are in `index.html` -- updating 6 meta tags to remove Lovable branding and replace with DataHub-appropriate values.


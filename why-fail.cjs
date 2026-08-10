const fs = require('fs');

// We have 55 broken links! Which ones are they? linkinator didn't explicitly say "404", it just says "Detected 55 broken links".
// Oh, wait, it says: "out [0] https://instituteofunderwriting.com/" -> That means it checked the URL and it returned 0 ? Wait, a 0 status code usually means a network error or blocked request.
// Linkinator checks remote URLs. It doesn't actually check local files unless we tell it it's a directory?
// Ah, `linkinator out` tells it to crawl the directory `out`. But Next.js exported files with absolute canonical URLs (`https://instituteofunderwriting.com/...`). Linkinator is trying to hit the live domain for those canonical links, and the site isn't live yet, so they fail (or return 0 for unresolvable).

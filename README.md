# Gravatar Utils
Node and Deno modules to make getting Gravatar profiles extremely easy!

```javascript
import { getGravatarHash, getGravatarUrl } from "gravatar-utils";

const userEmail = "xxxxxxxx@xxxxx.xxx";

// This function will generate the hash that gravatar uses to identify users, will return something similar to xxxxxxxxxxxxxxxxxxxxx
const userHash = getGravatarHash(userEmail);
// This function will generate the url that is accessible by any fetch library, will return something similar to https://www.gravatar.com/xxxxxxxxxxxxxxxxxxxxx.json
const gravatarProfileUrl = getGravatarUrl(userEmail);

// Fetch gravatar profile
const res = await fetch(gravatarProfileUrl);
const data = await res.json();
```

More information on the Gravatar API can be found at https://www.gravatar.com/site/implement/profiles/json/.
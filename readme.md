# Open Graph for Deno

An Open Graph parser for Deno.

> ⚠️ This project is unstable and actively being developed. Use with caution.

## Usage

```ts
import { parse } from "https://deno.land/x/opengraph/mod.ts";

const { title, image, description, url } = parse("https://deno.land/");
```

#!/bin/bash
#
#   Add package.json files to cjs/mjs subtrees
#

# See: https://www.sensedeep.com/blog/posts/2021/how-to-create-single-source-npm-module.html

cat >dist/esm/package.json <<!EOF
{
  "type": "module"
}
!EOF

cat >dist/cjs/package.json <<!EOF
{
  "type": "commonjs"
}
!EOF

find src -name '*.d.ts' -exec cp {} dist/esm \;
find src -name '*.d.ts' -exec cp {} dist/cjs \;



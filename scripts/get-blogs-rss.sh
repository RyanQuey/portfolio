#!/usr/bin/env bash

set -e
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

curl -L https://medium.com/feed/@ryanquey > $DIR/../static/medium-feed.rss
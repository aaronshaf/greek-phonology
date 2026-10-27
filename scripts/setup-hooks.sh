#!/bin/sh
# Point this clone at the versioned hooks in .githooks.
git config core.hooksPath .githooks
echo "core.hooksPath=.githooks"

#!/bin/bash
title=${1:-""}
category=${2:-"dev"}

date=`date '+%Y-%m-%d'`

echo "---
title: "$title"
date: "$date"
tags: [""]
category: "$category"
published: false
---

# 제목

" > $title.md


---
title: "[TIL] irb 자동완성 설정 irb가 실행할때 자동으로 설정되게 하기"
date: "2019-07-12"
tags: ["TIL", "RUBY"]
category: "dev"
published: true
---

`~/.irbrc` 파일을 만든다. (`touch ~/.irbrc`)

아래와 같이 편집하면 된다.

```
# irb autocomplete
IRB.conf[:AUTO_INDENT] = true
IRB.conf[:USE_READLINE] = true
IRB.conf[:LOAD_MODULES] = [] unless IRB.conf.key?(:LOAD_MODULES)
unless IRB.conf[:LOAD_MODULES].include?('irb/completion')
  IRB.conf[:LOAD_MODULES] << 'irb/completion'
end
```

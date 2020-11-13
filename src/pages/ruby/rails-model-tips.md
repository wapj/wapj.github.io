---
title: "레일즈의 ActiveRecord 모델팁들"
date: "2019-07-18"
category: "dev"
published: true
---

## in 쿼리에 리스트를 넘기고 싶은경우

where 절에 바로 넣으면 됨

```
Group.where(id: [1,2,3,4,5])
```

## 모델에서 하나의 속성만 뽑아내서 리스트로 만들고 싶은 경우

`pluck` 을 사용하면 된다.

ex)

```
groups = Group.where(name like '%#{keyword}%')
gruops.pluck(:id)

------------------------
output
------------------------
=> [1,2,3,4,5,6]
```

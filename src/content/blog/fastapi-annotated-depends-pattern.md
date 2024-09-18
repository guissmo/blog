---
title: "Understanding FastAPI Annotated and Depends Pattern"
layout: "../../layouts/PostLayout.astro"
category: Code
author: guissmo
date: 2024-05-26T11:57:08+00:00
description: I talk about how and why Annotated[ClassName, Depends()] in FastAPI.
slug: fastapi-annotated-depends-pattern
tags:
  - Python
math: true
---

Today, I investigated step-by-step how and why the code `Annotated[ClassName, Depends()]` works and why it could be useful if you want type hints.

I'm writing this down as I understand it and if anyone reading finds errors, I would appreciate it if you contact me!

## type hints and `Annotated`

In my first backend project, when I asked a colleague what the above pattern does, I was told it had something to do with _dependency injection_ and was kindly pointed to the relevant FastAPI page.

I started with `Annotated` in the [typing](https://docs.python.org/3/library/typing.html) documentation.

> typing.Annotated
>
>    Special typing form to add context-specific metadata to an annotation.

After some experimentation, we find that:

```python
def foo(x: int) -> bool:
    return x == 1
```

is functionally the same as:

```python
from typing import Annotated
def foo(x: Annotated[int, "This is an integer between 0 and 2."]) -> bool:
    return x == 1
```

As long as the first argument on `Annotated` is a type, you're good. You can write whatever you want on the rest of the arguments.

A priori, you get exactly the same benefits if you simply add a comment like so:

```python
def foo(x: int) -> bool:
    """
    x is an integer between 0 and 2
    """
    return x == 1
```

At this point, I understood that the rest of the arguments are `Annotated` are ignored by Python so they could literally be anything. It turns out I was half right.

## FastAPI, `Annotated` and `Depends`

Indeed, the rest of the arguments of `Annotated` could literally be anything but libraries such as FastAPI could utilize the metadata in `Annotated` in a more useful way.

To understand this, here is an [example in their documentation](https://fastapi.tiangolo.com/tutorial/dependencies/#__tabbed_1_1) on how to use `Annotated` and `Depends`.

```python
from typing import Annotated

from fastapi import Depends, FastAPI

app = FastAPI()


async def common_parameters(q: str | None = None, skip: int = 0, limit: int = 100):
    return {"q": q, "skip": skip, "limit": limit}


@app.get("/items/")
async def read_items(commons: Annotated[dict, Depends(common_parameters)]):
    return commons
```

The documentation did not adequately explain for me why this works. Upon further investigation, if the `/items/` endpoint is called:
* with the expected `commons` parameters, then those given parameters are used
* without the expected `commons` parameters, then the function inside `Depends` gets called and its return value is assigned to `commons` as the function `read_items` runs.

This only seems to work if the first function, in this case `read_items`, has been decorated by something from FastAPI, in this case `@app.get("/items/")`.

Without such a decorator, `read_items` would complain that it was expecting an argument `commons` that was not given.

## Class Dependencies

Once equipped with this understanding, the [classes as dependencies](https://fastapi.tiangolo.com/tutorial/dependencies/classes-as-dependencies/) page in the official FastAPI docs becomes clearer.

```python
class CommonQueryParams:
    def __init__(self, q: str | None = None, skip: int = 0, limit: int = 100):
        self.q = q
        self.skip = skip
        self.limit = limit

@app.get("/items/")
async def read_items(commons: Annotated[CommonQueryParams, Depends(CommonQueryParams)]):
```

Like in the previous example, if the `commons` parameter is not given in the call of the endpoint then the argument of `Depends`, which in this case is `CommonQueryParams` is called with default arguments.

This returns an instance of `CommonQueryParams` and is thus a valid value for `commons`.

## Why `Annotated[ClassName, Depends()]` Works

Clearly, we would find ourselves writing a useful pattern like `Annotated[CommonQueryParams, Depends(CommonQueryParams)]` many times in our code.

Notice that we would need to type the class name **twice** every time. The developers of FastAPI recognize this and have thus included the following feature as a shortcut:

> You declare the dependency as the type of the parameter, and you use `Depends()` without any parameter, instead of having to write the full class again inside of `Depends(CommonQueryParams)`.

And this is why this pattern works.

## Conclusion

To summarize:

* `Annotated` by itself does not do anything, other than give a type hint plus any potential metadata one would find useful.
* In the context of FastAPI:
  * `Depends` can be used as a metadata argument for `Annotated` to inject dependencies. I think this works as long as the first function called is decorated by something from FastAPI.
  * If `Depends` is used in `Annotated` with no arguments, then `Depends` calls the class which was given as the first argument in `Annotated`.
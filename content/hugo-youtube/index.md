---
title: Youtube Shortcode
date: 2021-04-16T19:56:45+07:00
layout: sc-documentation
lastmod: 2022-05-15T16:05:03+07:00
---

Following are some samples for the usage of the Youtube Shortcode.

**Note:** You can do [multiline GoHugo-tags since v0.81.0](https://gohugo.io/news/0.81.0-relnotes/#newlines-in-template-actions-and-commands). With older Hugo versions you need to remove the newlines in the following template examples. On the other side, there shouldn't be any reason to use an old Hugo version ;]

## Default call {.mt-5}

{{< highlight go-html-template >}}
{{</*youtube
        id="dQw4w9WgXcQ"
*/>}}
{{< / highlight >}}

{{< youtube id="dQw4w9WgXcQ" >}}

## Quick shortcode {.mt-5}

Please don't do that ;] But you can if you want. Use the `youtube` shortcode just in combination with the video-ID. You don't even need quotation marks around the ID.

{{< highlight go-html-template >}}
{{</*youtube
        dQw4w9WgXcQ
*/>}}
{{< / highlight >}}

{{< youtube dQw4w9WgXcQ >}}

## Add an aria-label to the play button {.mt-5}

{{< highlight go-html-template >}}
{{</*youtube
        id="dQw4w9WgXcQ"
        title="Lower your eyelids to die with the sun - M83"
*/>}}
{{< / highlight >}}

{{< youtube id="dQw4w9WgXcQ" title="Lower your eyelids to die with the sun - M83" >}}

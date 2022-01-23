#!/bin/bash

go get github.com/paulirish/lite-youtube-embed@master
git add go.mod
hugo mod tidy
git add go.sum

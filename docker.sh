#!/bin/bash

# Dừng và xoá container cũ
docker-compose down

# Build lại container với lệnh --no-cache để tránh sử dụng cache
docker-compose up -d --build --no-cache

#!/bin/bash

# Dừng và xoá container cũ
docker-compose down

# Build lại container và chạy trong chế độ nền
docker-compose up -d --build 

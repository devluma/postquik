#!/bin/bash

# PostgreSQL
docker run -d --restart=unless-stopped --name postgresql -e POSTGRESQL_USERNAME=postgres -e POSTGRESQL_PASSWORD=secret -e POSTGRESQL_DATABASE=blumiapi_local -p 5432:5432 bitnami/postgresql:latest

# Redis
docker run -d --restart=unless-stopped --name redis -e REDIS_PASSWORD=secret -p 6379:6379 bitnami/redis:latest

# Mailhog
docker run -d --restart=unless-stopped --name mailhog -p 1025:1025 -p 8025:8025 mailhog/mailhog

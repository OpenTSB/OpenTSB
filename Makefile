.PHONY: up down restart logs ps build pull clean

DC ?= docker compose
COMPOSE_FILES = -f docker-compose.yml -f docker-compose.db.yml

up:
	$(DC) $(COMPOSE_FILES) up -d --build

down:
	$(DC) $(COMPOSE_FILES) down

restart: down up

logs:
	$(DC) $(COMPOSE_FILES) logs -f

ps:
	$(DC) $(COMPOSE_FILES) ps

build:
	$(DC) $(COMPOSE_FILES) build

pull:
	$(DC) $(COMPOSE_FILES) pull

clean:
	$(DC) $(COMPOSE_FILES) down -v


deploy_dev:
	docker run --name projectmark -v $(PWD):/app -it -d -w /app -p 3006:3000 node:18.17.1 --trace-deprecation
	docker exec projectmark yarn install
start:
	docker exec projectmark yarn start
dev:
	docker exec projectmark yarn dev
install:
	docker exec projectmark yarn install
build:
	docker exec projectmark yarn build
test:
	docker exec projectmark yarn test
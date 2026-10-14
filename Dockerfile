FROM node:20
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx","-g","daemon off;"]
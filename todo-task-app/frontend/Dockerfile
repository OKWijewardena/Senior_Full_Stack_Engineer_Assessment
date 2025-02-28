# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json before running npm install
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Build the React app
RUN npm run build

# Use nginx to serve the built app
FROM nginx:alpine

# Copy the built app to Nginx HTML directory
COPY --from=0 /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

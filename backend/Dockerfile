# Use an official Node.js image
FROM node:16

# Set the working directory
WORKDIR /app

# Copy package files first
COPY backend/package*.json ./

# Install dependencies
RUN npm ci  # Ensures a clean install

# Copy backend files
COPY backend /app/backend

# Rebuild native dependencies
RUN npm rebuild bcrypt --build-from-source

# Expose the port
EXPOSE 3000

# Start the application
CMD ["node", "./backend/server.js"]

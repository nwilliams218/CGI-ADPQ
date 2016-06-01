FROM nginx

# Set timezone
RUN echo "America/Los_Angeles" > /etc/timezone \
 && dpkg-reconfigure -f noninteractive tzdata

# Install wget and install/updates certificates
RUN apt-get update \
 && apt-get install -y -q --no-install-recommends \
    ca-certificates \
    wget \
 && apt-get clean \
 && rm -r /var/lib/apt/lists/*

# PORT
EXPOSE 80

# Copy over code
COPY client/dist /usr/share/nginx/html

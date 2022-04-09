FROM node

# =====================================================================================

# Install OpenJDK-8
RUN apt-get update && \
    apt-get install -y openjdk-8-jdk && \
    apt-get install -y ant && \
    apt-get clean;
    
# Fix certificate issues
RUN apt-get update && \
    apt-get install ca-certificates-java && \
    apt-get clean && \
    update-ca-certificates -f;

# Setup JAVA_HOME -- useful for docker commandline
ENV JAVA_HOME /usr/lib/jvm/java-8-openjdk-amd64/
RUN export JAVA_HOME

#===================================================================================

RUN apt-get update && \
    apt-get install -y golang-go;

#======================================================================================

RUN apt-get update && \
    apt-get install -y rustc;

#======================================================================================

RUN apt-get update && \
    apt-get install -y ruby;

#======================================================================================

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

RUN npm install pm2 -g

COPY . .

RUN npm run build

EXPOSE 4000

WORKDIR /usr/app/dist

CMD ["pm2-runtime","src/app.js"]
FROM quay.io/x-notiya/chamod-md
RUN git clone https://github.com/X-Notiya/CHAMOD-MD /root/X-Notiya
WORKDIR /root/X-Notiya/
RUN npm install npm@latest
RUN yarn install --network-concurrency 1
EXPOSE 8000
CMD ["npm", "start"]

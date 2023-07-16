FROM quay.io/sampandey001/secktor
RUN git clone https://github.com/X-Notiya/DARK-QUEEN-MD /root/SamPandey001
WORKDIR /root/X-Notiya/
RUN npm install npm@latest
RUN yarn install --network-concurrency 1
EXPOSE 8000
CMD ["npm", "start"]
